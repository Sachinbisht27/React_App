import NavBar from "../src/Components/Navbar/navbar";
import Footer from "../src/Components/Footer/footer";
import HomePage from "../src/Components/Homepage/homepage";
import { Routes, Route } from "react-router-dom";
import LoginPageContent from "../src/Components/LogInPageContent/loginpagecontent";
import SignupPageContent from "../src/Components/SignUpPageContent/signuppagecontent";
import background from "../src/img/background.png";

function App() {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${background})`,
          height: "680px",
          // width:"2000px",
          backgroundSize: "round",
          backgroundRepeat: "no-repeat",
          // marginBottom: "200px"
        }}
      >
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
    </>
  );
}
// }

export default App;
