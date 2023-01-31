import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';
import Figure from 'react-bootstrap/Figure';

const Rocket = ({
  rocketName,
  description,
  flickrImages,
  isReserved,
  handleClick,
}) => (
  <Container>
    <Row>
      <Col xs={12} lg={5} xl={4}>
        <Carousel>
          {
            flickrImages.map(({ imgSrc, imgId }) => (
              <Carousel.Item key={imgId}>
                <Figure>
                  <Figure.Image
                    alt="171x180"
                    src={imgSrc}
                  />
                </Figure>
              </Carousel.Item>
            ))
          }
        </Carousel>
      </Col>
      <Col xs={12} lg={7} xl={8}>
        <Card style={{ border: 0 }}>
          <Card.Body style={{ padding: 0 }}>
            <Card.Title>{rocketName}</Card.Title>
            <Card.Text>{description}</Card.Text>
            <Button
              variant={isReserved ? 'outline-secondary' : 'primary'}
              onClick={handleClick}
            >
              {isReserved ? 'Cancel Reservation' : 'Reserve Rocket'}
            </Button>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </Container>
);

Rocket.propTypes = {
  rocketName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  flickrImages: PropTypes.arrayOf(PropTypes.shape({
    imgSrc: PropTypes.string.isRequired,
    imgId: PropTypes.number.isRequired,
  })).isRequired,
  isReserved: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Rocket;
