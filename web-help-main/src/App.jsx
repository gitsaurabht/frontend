import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import LoginForm from "./authPages/login";
import SignUpForm from "./authPages/sigin";
import HomePage from "./sourcePages/homePage";
import UserHome from "./sourcePages/userHome";

function App() {
  

  return (
    <Router>
      <div className="container">
      <Routes>
        <Route path="/LoginForm" element={<LoginForm/>}/>
        <Route path="/SignUpForm" element={<SignUpForm/>}/>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/UserPage" element={<UserHome/>}/>
      </Routes>
    </div>
    </Router>
  );
}

export default App;