import { 
  Container,
  Row,
  Col, 
} from "reactstrap";
import "./Donate.css"


const Donate = () => {

  return (
    <Container>
      <Row className="my-4">
        <Col className="text-center bannerDonate">
          <h1>To successfully fight for change we need funding</h1>
          <h2>All Workers Union is a registered 501(c)4 non-profit organization focused on promoting social welfare and shifting the political landscape back on the side of workers</h2>
          <h2>Donations will be used for outreach, organizing events, spreading our message and operations costs</h2>
          <h2>Most importantly, all funds will be used to achieve our goal of improving the lives of workers</h2>
        </Col>
      </Row>

      {/* donation information */}

      

      {/* <Row className="my-4">
        <Col className="text-center bannerDonate">
          <h3>With funding we plan to assemble a team of lawyers to defend workers and allow them to litigate current and former employers at no financial risk to themselves</h3>
        </Col>
      </Row> */}

    </Container>
  );
}

export default Donate;