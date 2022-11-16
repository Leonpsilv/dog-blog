import { getSuggestedQuery } from '@testing-library/react';
import React, { createContext, useState } from 'react';
import { TOKEN_POST, USER_GET, USER_REGISTER } from '../api';
import  useFetch from '../Hooks/useFetch';

export const UserContext = createContext();

export const UserStorage = ({children}) => {
  const [data, setData] = useState(null);
  const [login, setLogin] = useState(null);
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(null);

  const {loading, error, request} = useFetch();

  async function getUser (token) {
    const {url, options} = USER_GET(token);
    const response = await fetch(url, options);
    const json = await response.json();

    setData(json);
    setLogin(true);
  }

  async function userLogin (username, password) {
    const token = window.localStorage.getItem('token'); 
    if(token) getUser(token);

    const {url, options} = TOKEN_POST({username, password});
    const response = await fetch(url, options);
    const data = await response.json();
    if(data.token){
        window.localStorage.setItem('token', data.token);
    
        getUser(data.token);
    }
  }

  async function userRegister (username, password, email) {
    const {url, options} = USER_REGISTER({username, password, email});
    const response = await request(url, options);
    const json = await response.json;
    if(!json.code || json.code !== 'error') {
      console.log(json);
    }
  }

return (
  <UserContext.Provider value={{userLogin, data, userRegister}}>
    {children}
  </UserContext.Provider>
);
}
