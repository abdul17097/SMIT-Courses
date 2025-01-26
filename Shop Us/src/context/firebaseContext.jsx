import { app } from "@/firebaseConfig";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";

export const FirebaseContext = createContext();

const FirbaseProvider = ({ children }) => {
  const auth = getAuth(app);
  const [isLogin, setIsLogin] = useState(true);
  const login = ({ email, password }) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((response) => {
        console.log("Login successful:", response.user);
        toast.success("Successfully logged in"); // Provide meaningful logs
      })
      .catch((error) => {
        console.error("Login error:", error.message); // Log error for debugging
        toast.error("Invalid Credential");
      });
  };
  return (
    <FirebaseContext.Provider value={{ isLogin, setIsLogin, login, message }}>
      {children}
    </FirebaseContext.Provider>
  );
};

export const useFirebaseContext = () => {
  return useContext(FirebaseContext);
};
export default FirbaseProvider;

export const useAuthContext = () => {
  return getAuth(app);
};
