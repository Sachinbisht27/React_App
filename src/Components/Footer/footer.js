import Card from "react-bootstrap/card";
import "../Footer/footer.css";
import { useMediaQuery } from "react-responsive";
function Footer() {
    const isSmall = useMediaQuery({ query: '(max-width: 576px)' })
    if (isSmall) {
      return (
        <Card className="footer-mob">
         <a>@Thanks to visiting our site<br/>
          About us</a>
        </Card>
      );
    } else {
      return (
        <Card className="footers">
         @Thanks to visiting our site
          <a>About us</a>
        </Card>
      );
    }
}
export default Footer;
