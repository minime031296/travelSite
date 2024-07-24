import React, { useContext, useState } from 'react';
import Navbar from './Component/Navbar/Navbar';
import Home from './Component/Home/Home';
import Main from './Component/Main/Main';
import Footer from './Component/Footer/Footer';
import { AuthContext } from './Authcontext/AuthContextProvider';
import AllRoutes from './links/AllRoutes';




function App() {
  const { isLoggedIn } = useContext(AuthContext);
  

  return (
    <>
      <Navbar />
      {isLoggedIn ? (
       <>
      <Home/>
      <Main/>
      <Footer/>
       
          </>
      
      ) :(
        <AllRoutes/>
          )}
        </>
    );
}

export default App;
