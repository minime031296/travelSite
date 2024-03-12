import React, { createContext, useState } from 'react';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState( false);

  const login = () => {
   
    setIsLoggedIn({...isLoggedIn, isAuth: true});
  };

  const logout = () => {
    
    setIsLoggedIn({...isLoggedIn, isAuth: true});
  };

  return (
    <AuthContext.Provider value={{isLoggedIn,setIsLoggedIn}}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
