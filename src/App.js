import { Route, NavLink, Router, Routes } from "react-router-dom";
import React from "react";
import "../src/App.css";
import { Container } from "react-bootstrap";
import SignUpForm from "./Components/SignUpForm";
import SignInForm from "./Components/SignInForm";

function App() {
  return (
    <>
<<<<<<< Updated upstream
      <div className="background">
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} ></Route>
          <Route path="loginpagecontent" element={<LoginPageContent />}></Route>
          <Route path="signuppagecontent" element={<SignupPageContent />}></Route>
        </Routes>
        <Footer />
      </div>
=======
      <Container className="container ">
        <div className="App">
          <div className="appAside" />
          <div className="appForm">
            <div className="pageSwitcher">
              <NavLink
                to="/sign-in"
                activeClassName="pageSwitcherItem-active"
                className="pageSwitcherItem"
              >
                Sign In
              </NavLink>
              <NavLink
                to="/"
                activeClassName="pageSwitcherItem-active"
                className="pageSwitcherItem"
              >
                Sign Up
              </NavLink>
            </div>
            <Routes>
              <Route exact path="/" element={<SignUpForm />}></Route>
              <Route path="/sign-in" element={<SignInForm />}></Route>
            </Routes>
          </div>
        </div>
      </Container>
>>>>>>> Stashed changes
    </>
  );
}

export default App;
