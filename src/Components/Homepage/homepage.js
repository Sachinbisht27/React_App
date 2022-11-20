import { Container } from 'react-bootstrap';
import "../Homepage/homepage.css";
import { useMediaQuery } from 'react-responsive'

function HomePage() {
  const isSmall = useMediaQuery({ query: '(max-width: 576px)' })
  if (isSmall) {
    return (
      <Container className="top-mob">
          <h1>Hire India's Top Remote Talent</h1>
          <p className='p-mob'>A hiring platform that helps remote-first companies hire 10X faster &more efficiently.</p>
          <p className='p-mob'>A network of 50,000+ talents, pre-vetted against their technical capabilities,language proficiency and behavioral skills.</p>
      </Container>
    );
  } else {
    return (
    <Container className="align">
        <h1>Hire India's Top Remote Talent</h1>
        <p>A Hiring platform that helps remote-first companies hire 10X faster & more efficiently.</p>
        <p>A network of 50,000+ talents, pre-vetted against their technical capabilities,language proficiency and behavioral skills.</p>
    </Container>
      );
    }
  }

export default HomePage;
