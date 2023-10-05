import React from "react";
import { Route,Routes } from "react-router-dom";
import Login from "./pages/Login.jsx";
import Homepage from "./pages/Homepage.jsx";
import VerificationPage from "./pages/VerificationPage.jsx";

const ErrorPage = () => {
  return <div>404 - Page Not Found</div>;
};

const App = () => {
   return(
    <>
      <Routes>
        <Route exact path = "/" element={<Homepage/>}/>
        <Route path="/pages/Login" element={<Login/>} />
        <Route element={ErrorPage}/>
      </Routes>
    </>
   )
}
  
export default App;