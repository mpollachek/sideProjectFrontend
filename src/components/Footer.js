import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import "./Footer.css";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import AssignmentTurnedInRoundedIcon from "@mui/icons-material/AssignmentTurnedInRounded";
import PeopleIcon from "@mui/icons-material/People";
import EngineeringIcon from "@mui/icons-material/Engineering";
import LocalAtmIcon from "@mui/icons-material/LocalAtm";
import TwitterIcon from "@mui/icons-material/Twitter";
import QuizIcon from "@mui/icons-material/Quiz";
import FacebookIcon from "@mui/icons-material/Facebook";
import ReportIcon from "@mui/icons-material/Report";

const Footer = () => {
  return (
    <footer>
      <Container className="full-width site-footer">
        <Row>
          <Col xs={{ size: 5, offset: 1 }} className="text-center my-4">
            <ul className="list-unstyled">
              <li>
                <Link to="/" className="footericons">
                  <HomeRoundedIcon />
                  Home
                </Link>
              </li>
              <li>
                <Link to="/Mission" className="footericons">
                  <AssignmentTurnedInRoundedIcon />
                  Our Mission
                </Link>
              </li>
              <li>
                <Link to="/Issues" className="footericons">
                  <ReportIcon />
                  Issues to Solve
                </Link>
              </li>
              <li>
                <Link to="/GetInvolved" className="footericons">
                  <EngineeringIcon />
                  Get Involved
                </Link>
              </li>
              <li>
                <Link to="/Faq" className="footericons">
                  <QuizIcon />
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/Donate" className="footericons">
                  <LocalAtmIcon />
                  Donate
                </Link>
              </li>
            </ul>
          </Col>
          <Col xs="5" className="text-center my-4">
            <br />
            <a
              role="button"
              className="btn btn-link footericons"
              href="mailto:support@allworkersunion.com"
            >
              <EmailIcon /> support@ allworkersunion.com
            </a>
            <br />
            <a
              role="button"
              className="btn btn-link footericons"
              href="https://twitter.com/AllWorkersUnion"
            >
              <TwitterIcon /> Twitter
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
