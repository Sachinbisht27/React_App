import "../Footer/footer.css";
import { useMediaQuery } from "react-responsive";

function Footer() {
  const isSmall = useMediaQuery({ query: '(max-width: 576px)' })
  if (isSmall) {
    return (
      <div className="footer-mob">
        <a>@Thanks to visiting our site<br />
          About us</a>
      </div>
    );
  } else {
    return (
      <div className="footers">
        <a>@Thanks to visiting our site<br />
          About us</a>
      </div>
    );
  }
}
export default Footer;
