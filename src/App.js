import NavBar from "../src/Components/Navbar/navbar";
import Footer from "../src/Components/Footer/footer";
import HomePage from "../src/Components/Homepage/homepage";
import { Routes, Route } from "react-router-dom";
import LoginPageContent from "../src/Components/LogInPageContent/loginpagecontent";
import SignupPageContent from "../src/Components/SignUpPageContent/signuppagecontent";


function App() {
  return (
    <>
<<<<<<< Updated upstream
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage/>} ></Route>
        <Route path="loginpagecontent" element={<LoginPageContent/>}></Route>
        <Route path="signuppagecontent" element={<SignupPageContent/>}></Route>
      </Routes>
      <Footer/>
=======
      <div className="background">
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="loginpagecontent" element={<LoginPageContent />}></Route>
          <Route
            path="signuppagecontent"
            element={<SignupPageContent />}
          ></Route>
        </Routes>
        <Footer />
      </div>
>>>>>>> Stashed changes
    </>
  );
}
export default App;
