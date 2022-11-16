import { Container } from 'react-bootstrap';
import "../Homepage/homepage.css";
import { useMediaQuery } from 'react-responsive'

function HomePage() {
    const isSmall = useMediaQuery({ query: '(max-width: 576px)' })
    if (isSmall) {
      return (
        <Container className="align-mob">
            <h1>Hire India's Top Remote Talent</h1>
            <p className='p-mob'>A hiring platform that helps remote-first compaines hire 10X faster &more efficeintly.</p>
            <p className='p-mob'>A network of 50,000+ talents, pre-vetted against their technical capabilities,language  proficiency and behavirol skills.</p>
        </Container>
    );
} else {
    return (
    <Container className="align">
        <h1>Hire India's Top Remote Talent</h1>
        <p>A hiring platform that helps remote-first compaines hire 10X faster &more efficeintly.</p>
        <p>A network of 50,000+ talents, pre-vetted against their technical capabilities,language</p>
        <p>proficiency and behavirol skills.</p>
    </Container>
      );
    }
  }

export default HomePage ;
