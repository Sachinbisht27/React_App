import NavBar from "../src/Components/Navbar/navbar";
import Footer from "../src/Components/Footer/footer";
import HomePage from "../src/Components/Homepage/homepage";
import { Routes, Route } from "react-router-dom";
import AddformDetails from "../src/Components/AddFormDetails/addformdetails";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage/>} ></Route>
        <Route path="addformdetails" element={<AddformDetails/>}></Route>
      </Routes>
      <Footer/>
    </>
  );
}
export default App;
