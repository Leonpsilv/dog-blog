import { useContext } from "react";
import Login from "../components/Login";
import { UserContext } from "../context/UserContext";

const LoginPage = () => {
  const { data } = useContext(UserContext);

  return (
    <>
      {data ? (<h1> Você está logado! </h1>) : (<Login />)}
    </>
  );
}

export default LoginPage;