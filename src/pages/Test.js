import { Row, Col, Container } from "reactstrap";
import AnimatedDisplayCard from "../display/AnimatedDisplayCard";
import logo from '../assets/logo1.png';
import FDR from '../assets/FDR_nobiz.jpg';

const Test = () => {

  return(
    <Container>
      <Row>
        <Col>
          <AnimatedDisplayCard image={FDR} name='logo' description='AWU logo' />
        </Col>
      </Row>
    </Container>
  )
}

export default Test;