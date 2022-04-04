import React from "react";
import SignInStack from "./SignInStack";
import Tabs from "./Tabs";
import useAuth from "../hooks/useAuth";

// import { Container } from './styles';

const Navigation: React.FC = () => {
  const { isLogged } = useAuth();
  return isLogged ? <Tabs /> : <SignInStack />;
};

export default Navigation;
