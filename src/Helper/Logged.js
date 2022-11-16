import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const Logged = ({ children }) => {
  const { login } = useContext(UserContext);
  return (login ? <Navigate to="/" /> : children);
}

export default Logged;