import { useContext } from "react";
import { AuthContext } from "../../context/Auth";

const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("Wrap useAuth with AuthProvider");
  }

  return context;
};

export default useAuth;
