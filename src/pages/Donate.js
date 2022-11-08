import { 
  Container,
  Row,
  Col, 
  Button
} from "reactstrap";
import { Link } from "react-router-dom";
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
      <Row>
        <Col className="my-4 text-center bannerDonateOrg offset-1 col-10">
          <h1>To successfully fight for change we need funding</h1>
          <h2>All Workers Union is a registered 501(c)4 non-profit organization focused on promoting social welfare and shifting the political landscape back on the side of workers</h2>
          <h2>Donations will be used for outreach, organizing events, spreading our message and operations costs</h2>
          <h2>Most importantly, all funds will be used to achieve our goal of improving the lives of workers</h2>
        </Col>
        </Row>

        {/* Message that we are required to collect name, address and employment information from donors, but the supreme court <em>(NAACP v. Alabama)</em> has ruled that "compelled disclosure of affiliation with groups engaged in advocacy may constitute [an] effective a restraint on freedom of association". We will not willingly release donor information to federal or state entities unless forced to do so by law. 
        https://afjactioncampaign.org/wp-content/uploads/2017/03/501c4-Reporting.pdf */}

          {/* 3 columns: Donate with CC, Paypal, Crypto */}
        {/* <Row>          
        <Col className="my-4 text-center bannerDonateRed offset-1 col-10">
          <Col className='col-md-4'>
            <h2>Securely Donate with Credit Card {'\n'}</h2>
            <a href="https://square.link/u/vfJWVQGS">
            <Button color="primary" size="lg">Donate</Button> 
            </a>
          </Col>
          <Col className='col-md-4'>

          </Col>
          <Col className='col-md-4'>

          </Col>
          </Col>
          </Row> */}



        <Row>
        <Col className="my-4 text-center bannerDonateGrn offset-1 col-10">
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