import { Row, Col, Container, List } from "reactstrap";
import DisplayCard from "../display/DisplayCard";
import CBOchart1 from "../assets/CBO_wealth_chart_1.png";
import CBOchart2 from "../assets/wealth_increase_distribution.png";
import wageGroup from "../assets/EPI_wage_group.png";
import productivity from "../assets/EPI_productivity.png";
import "./Mission.css";
import oligarchy from "../assets/definition_oligarchy.png";
import plutocracy from "../assets/definition_plutocracy.png";
import hands from "../assets/hands_op50.jpg";
import lobbying from "../assets/lobbying_op50.png";

//list benefits of better pay/less hours
// -mental health, happiness,
const Mission = () => {
  return (
    <Container className="full-width">
      <Row
        style={{
          backgroundImage: `url(${hands})`,
          backgroundSize: "cover",
        }}
      >
        <Row>
          <Col
            className="text-center offset-1 col-10 mt-3"
            style={{
              textShadow: "0 0 3px #000000, 0 0 5px #000000",
            }}
          >
            <h1>Our mission is to improve the lives of workers</h1>
            <h2>
              We will break the barriers of division created by politicians and the media, unite workers and demand change
            </h2>
            <h2>
              The United States must eliminate wealth as the driving mechanism
              of our government
            </h2>
          </Col>
        </Row>

        <Row>
          <Col className="bgLornge offset-1 col-10 my-3 col-md-5">
            <h3 className="text-center">Our Goals</h3>
            <List>
              <li>Increase wages of the lower and middle classes</li>
              <li>Reduce number of hours worked per week</li>
              <li>Create a workers bill of rights</li>
              <li>
                Remove the ability for corporations and the wealthy to purchase policy
              </li>
              <li>Decrease corruption - increase transparency</li>
              <li>
                Overhaul the healthcare system so workers can afford healthcare
              </li>
              <li>
                Provide workers with guaranteed paid leave annually and paid
                parental leave when they or their spouse give birth to a child
              </li>
              <li>
                Bring power back into the hands of the people by uniting against
                corruption and modern indentured servitude
              </li>
            </List>
          </Col>
          <Col className="bgLornge offset-1 col-10 offset-md-0 col-md-5 mx-md-2 my-3">
            <h3 className="text-center">Benefits of achieving our goals</h3>
            <List>
              <li>Strengthened economy</li>
              <li>Healthier society</li>
              <li>Reduction in crime</li>
              <li>Nationwide improved happiness/decreased depression</li>
              <li>Reduced wealth/income inequality</li>
              <li>Decreased political corruption</li>
              <li>More jobs/reduced unemployment</li>
              <li>
                Reduce advantage large corporations have over small businesses
              </li>
              <li>
                Lower the federal deficit by reducing government spending on
                welfare and unemployment while increasing taxable income
                nationwide
              </li>
            </List>
          </Col>
        </Row>

        <Row>
          <Col
            className="text-center offset-1 col-10 my-3"
            style={{
              textShadow: "0 0 3px #000000, 0 0 5px #000000",
            }}
          >
            <h2>
              Our purchasing power decreases each year and they tell us to
              budget better
            </h2>
            <h3>
              Their bank accounts fatten each year and it's time we tell them to
              buy fewer yachts and private jets
            </h3>
          </Col>
        </Row>
      </Row>

      <Row
        style={{
          backgroundImage: `url(${lobbying})`,
          backgroundSize: "cover",
        }}
      >
        <Row className="text-center">
          <Col className="offset-lg-1 col-lg-5 my-3">
            <img
              src={oligarchy}
              alt="definition of oligarchy"
              className="definition"
              style={{ opacity: 0.85 }}
            />
          </Col>
          <Col className="col-lg-5 my-3">
            <img
              src={plutocracy}
              alt="definition of plutocracy"
              className="definition"
              style={{ opacity: 0.85 }}
            />
          </Col>
        </Row>

        <Row className="bggrn offset-1 col-10 text-center my-3">
          <Col>
            <h3>
              The terms oligarchy and plutocracy can both be used to accurately
              describe the USA
            </h3>
            <h3>
              If we truly want a government "of the people, by the people, for
              the people" we must remove money's influence on politics
            </h3>
            <h3>
              In the "Land of the Free" our only choices are to work our lives
              away or become homeless and starve to death
            </h3>
          </Col>
        </Row>
      </Row>
    </Container>
  );
};
export default Mission;
