import { createContext, useState } from "react";

interface ContextProps {
  isLogged: boolean;
  login: () => void;
  logout: () => void;
}

export const AuthContext = createContext({} as ContextProps);

const AuthProvider: React.FC = ({ children }) => {
  const [isLogged, setIsLogged] = useState(false);
  const login = () => setIsLogged(true);
  const logout = () => setIsLogged(false);

  return (
    <AuthContext.Provider value={{ isLogged, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
