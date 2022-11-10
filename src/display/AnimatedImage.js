import { Row, Col } from "reactstrap";
import { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import "./DisplayCard.css";

const AnimatedDisplayCard = ({ imageCSS }) => {
  const [toggle, setToggle] = useState(false);
  const animatedStyle = useSpring({
    opacity: toggle ? 1 : 0,
    transform: toggle ? "scale(1,1)" : "scale(1,0)",
    config: { duration: 500 },
  });

  useEffect(() => {
    setToggle(true);
  }, []);

  return (
    <animated.div style={animatedStyle}>
      <Row style={animatedStyle}>
        <Col>
          <CardImg src={image} />
        </Col>
      </Row>
    </animated.div>
  );
};

export default AnimatedDisplayCard;

<Row className="firstImage justify-content-center mt-3">
  {/* <img src={statue} alt='Statue of Workers' style={{maxWidth: '100%'}}/> */}
  <Col className="imageText my-auto">
    <h1 className="display-4 imageTextProps1">
      We Are Not Left<span className="imageTextProps2">We Are Not Right</span>
    </h1>
  </Col>
</Row>;
