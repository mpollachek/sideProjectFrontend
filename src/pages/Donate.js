import { 
  Container,
  Row,
  Col, 
} from "reactstrap";
import "./Donate.css"
import business from '../assets/business.png';
import businessIdea from '../assets/business-idea.jpg';
import businessIdeaCropped from '../assets/business-idea-cropped.jpg';
import Technology from '../assets/technology.jpg';
import businessPeople from '../assets/business-people.jpg';


const Donate = () => {

  return (
    <Container className="full-width">
      <Row       
        style={{
          backgroundImage: `url(${businessIdeaCropped})`,
          backgroundSize: "cover",
        }}
      >
      <Row className="my-4">
        <Col className="text-center bannerDonateOrg offset-md-1 col-md-10">
          <h1>To successfully fight for change we need funding</h1>
          <h2>All Workers Union is a registered 501(c)4 non-profit organization focused on promoting social welfare and shifting the political landscape back on the side of workers</h2>
          <h2>Donations will be used for outreach, organizing events, spreading our message and operations costs</h2>
          <h2>Most importantly, all funds will be used to achieve our goal of improving the lives of workers</h2>
        </Col>
      </Row>

      <Row className="my-4">
        <Col className="text-center bannerDonateGrn offset-md-1 col-md-10">
          <h1>We are dedicated to making the changes outlined on the homepage</h1>
          <h2>Have no illusions, we will be fighting an uphill battle</h2>
          <h2>For the sake of younger generations, doing nothing is not an option</h2>
          <h2>With proper funding we will be able to create a movement that sets the course of America back in the direction of prosperity for <b>ALL</b></h2>
        </Col>
      </Row>
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