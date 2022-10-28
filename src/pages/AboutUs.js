import {
  Col,
  Container,
  Row,
} from 'reactstrap';
import './AboutUs.css';

const AboutUs = () => {

  return (
    <Container>
      <Row >
        <Col className='text-center lrmargin10'>
          <h2>Fighting against the establishment, political dynasties and billionaire owned media, there is no doubt much will be said about us</h2>
          <h3 className='bannerusred' >The truth is that we are mothers, we are fathers,
            <br />we are brothers and we are sisters
            <br />We are family, we are friends
            <br />We are people who simply want to live happy lives
            <br />and leave something better for our children
          </h3>
          <h3>Each of these are more important than the fact that we are also workers</h3>
          <h2>And if you stand with us, <em>you</em> are one of us</h2>
        </Col>
      </Row>
      <Row className='text-center mb-3'>
        <Col className='bggrnus col-12 col-lg-6' >
          <h4>We are strong</h4>
          <h4>We are brave</h4>
          <h4>We are patriots</h4>
          <h4>We are free</h4>
        </Col>
        <Col className='bgorngeus col-12 col-lg-6' >
          <h4>Those allowing themselves to be exploited are weak</h4>
          <h4>Not standing up for ourselves is cowardly</h4>
          <h4>Allowing our country to be controlled by wealth is treason</h4>
          <h4>The current system is redesigned indentured servitude</h4>
        </Col>
      </Row>
      <Row className='text-center mb-3'>
        <Col>
          <h2>We do not live to work</h2>
          <h2>We work to live</h2>
          <h2>We are not on this earth to further enrich billionaires</h2>
        </Col>
      </Row>
    </Container>

  );
}

export default AboutUs;