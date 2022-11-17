// import Card from "react-bootstrap/card";
import "../Footer/footer.css";
import "../Navbar/navbar.css";
import { useMediaQuery } from "react-responsive";


function AddformDetails() {
    const isSmall = useMediaQuery({ query: '(max-width: 576px)' })
    if (isSmall) {
      return (
        <>
        <h1>Hello</h1>
        </>
      );
    } else {
      return (
        <>
        <h1>hello</h1>
        </>
      );
    }
}
export default AddformDetails;
