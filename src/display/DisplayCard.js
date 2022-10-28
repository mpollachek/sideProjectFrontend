import { 
  Card, 
  CardImg, 
  CardText, 
  CardBody, 
  CardTitle, 
  CardSubtitle, 
  CardLink,
  Col,
  Row,
  Modal,
  Container
} from 'reactstrap';
import {useState} from 'react';
import { useSpring, animated } from 'react-spring';

const DisplayCard = ({title, subtitle, image, text, alt, link, linksource, linkname}) => {
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    const [state, toggleState] = useState( false )
    const { x } = useSpring({
      from: { x: 0 },
      x: state ? 1 : 0,
      config: { duration: 500 },
    })

    return (      
      <Container>
      <Row className='text-center lrmargin hand' onClick={toggle} onMouseOver={() => toggleState(!state)} >
        <animated.div
        style={{
          scale: x.to({
            range: [0, 0.25, 0.5, 0.75, 1],
            output: [1, 0.97, 1.03, 0.95, 1],
          })
        }}>
        <Col>
          <Card>
            <img
            alt={alt}
            src={image}
            width="100%"
            />
            <CardBody>
              <CardTitle tag="h5">{title}</CardTitle>
              <CardSubtitle
              className='mb-2 text-muted'
              tag='h6'
              > {subtitle} </CardSubtitle>
              <CardText> {text} </CardText>
              <CardLink href={link}> 
                {linksource} <em>{linkname}</em>
              </CardLink>
            </CardBody>
          </Card>
        </Col>
        </animated.div>
      </Row>    
      
      <Modal isOpen={modal} toggle={toggle} size='xl' centered={true}>
        <Row className='text-center lrmargin'>
        <Col>
          <Card>
            <img
            alt={alt}
            src={image}
            width="100%"
            />
            <CardBody>
              <CardTitle tag="h5">{title}</CardTitle>
              <CardSubtitle
              className='mb-2 text-muted'
              tag='h6'
              > {subtitle} </CardSubtitle>
              <CardText> {text} </CardText>
              <CardLink href={link}> 
                {linksource} <em>{linkname}</em>
              </CardLink>
            </CardBody>
          </Card>
        </Col>
      </Row> 
      </Modal>
      </Container>
    );
};

export default DisplayCard;