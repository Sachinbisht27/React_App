import NavBar from "../src/Components/Navbar/navbar";
import Footer from "../src/Components/Footer/footer";
import HomePage from "../src/Components/Homepage/homepage";
import { Routes, Route } from "react-router-dom";
import AddformDetails from "../src/Components/AddFormDetails/addformdetails";

function App() {
  return (
    <>
      <NavBar />
      <HomePage />
      <Footer />
      <Routes>
        <Route path="/addformdetails" element={<AddformDetails/>}>Tab</Route>
      </Routes>
    </>
  );
}
export default App;
