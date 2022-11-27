import NavBar from "../src/Components/Navbar/navbar";
import Footer from "../src/Components/Footer/footer";
import HomePage from "../src/Components/Homepage/homepage";
import { Routes, Route } from "react-router-dom";
import LoginPageContent from "../src/Components/LogInPageContent/loginpagecontent";
import SignupPageContent from "../src/Components/SignUpPageContent/signuppagecontent";
import "../src/App.css";
import Products from "./Components/Products/products";


function App() {
  return (
    <>
    <div className="background">
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage/>} ></Route>
        <Route path="loginpagecontent" element={<LoginPageContent/>}></Route>
        <Route path="signuppagecontent" element={<SignupPageContent/>}></Route>
        <Route path="products" element={<Products/>}></Route>
      </Routes>
      <Footer/>
      </div>
    </>
  );
}

export default App;
