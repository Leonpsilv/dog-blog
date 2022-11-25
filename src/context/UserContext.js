import React, { createContext, useCallback, useEffect, useState } from 'react';
import { TOKEN_POST, TOKEN_VALIDATE_POST, USER_GET, USER_REGISTER } from '../api';
import  useFetch from '../hooks/useFetch';

export const UserContext = createContext();

export const UserStorage = ({children}) => {
  const [data, setData] = useState(null);
  const [login, setLogin] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const {request} = useFetch();

  
  const getUser = useCallback(
    async function (token) {
      const {url, options} = USER_GET(token);
      const {json} = await request(url, options);
  
      setData(json);
      setLogin(true);
    }, [request]
  );
  
  
  async function userLogin (username, password) {
    try{
      setError(null);
      setLoading(true);
      const token = window.localStorage.getItem('token'); 
      if(token){
        await getUser(token);
      }else{
        setLogin(false);
      }
      
      const {url, options} = TOKEN_POST({username, password});
      const response = await request(url, options);
      if(!response.response.ok){
        if(response.statusText) throw new Error(response.statusText);
        throw new Error('Usuário inválido!');
      }
      const data = await response.json;
      if(data.token){
          window.localStorage.setItem('token', data.token);
          await getUser(data.token);
      }
    }catch(err){
      setError(err.message);
      setLogin(false);
    }finally{
      setLoading(false); 
    }
  }

  useEffect(() => {
    async function autoLogin () {
      const token = window.localStorage.getItem('token');
      try{
        if(!token) return
        setLoading(true);
        setError(null);
        
        const {url, options} = TOKEN_VALIDATE_POST(token);
        const response = await request(url, options);

        if(response.json.code !== 'jwt_auth_valid_token') throw new Error('Token inválido!');
        await getUser(token);
      } catch (e) {
        userLogout();
      } finally {
        setLoading(false);
        setError(null);
      }

    }
    autoLogin();
  }, [request, getUser]);

  async function userRegister (username, password, email) {
    try{
      setError(null);
      setLoading(true);
      const {url, options} = USER_REGISTER({username, password, email});
      const response = await request(url, options);
      if(!response.response.ok) {
        if(response.statusText) throw new Error(response.statusText);
        throw new Error('Dados inválidos e/ou já usados!');
      }
    }catch(e) {
      setError(e.message);
    }finally{
      setLoading(false);
    }
  }

  async function userLogout () {
    setLogin(false);
    setData(null);
    setError(null);
    setLoading(false);
    window.localStorage.removeItem('token');
  }

return (
  <UserContext.Provider value={{
    userLogin,
    userRegister,
    userLogout,
    data,
    login,
    loading,
    error
  }}>

    {children}
  </UserContext.Provider>
);
}
