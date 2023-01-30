import React from 'react';
import {
  Badge,
  Button,
  Col,
  Container,
  Row,
} from 'react-bootstrap';

import planet from '../assets/planet.png';

function Rockets() {
  return (
    <div>
      <Container className="mt-5">
        <Row className="mt-2" border="primary">
          <Col>
            <img
              src={planet}
              width="200"
              height="200"
              className="d-inline-block align-top border-2"
              alt="React Bootstrap logo"
            />
          </Col>
          <Col lg="9">
            <h3>Falcon 1</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Maxime odio, tempore eius rem nostrum veniam, maiores vero
              quae eligendi minus, provident atque voluptate dicta.
              Laudantium doloribus aliquam atque veniam et.
            </p>
            <Button>Reserve Rocket</Button>
          </Col>
        </Row>
        <Row className="mt-2">
          <Col>
            <img
              src={planet}
              width="200"
              height="200"
              className="d-inline-block align-top border-bottom border-3"
              alt="React Bootstrap logo"
            />
          </Col>
          <Col lg="9">
            <h3>Falcon 9</h3>
            <p>
              <Badge> Reserved </Badge>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Maxime odio, tempore eius rem nostrum veniam, maiores vero
              quae eligendi minus, provident atque voluptate dicta.
              Laudantium doloribus aliquam atque veniam et.
            </p>
            <Button variant="outline-secondary">Cancel Reservation</Button>
          </Col>
        </Row>
        <Row className="mt-2">
          <Col>
            <img
              src={planet}
              width="200"
              height="200"
              className="d-inline-block align-top border-2"
              alt="React Bootstrap logo"
            />
          </Col>
          <Col lg="9">
            <h3>Falcon 1</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Maxime odio, tempore eius rem nostrum veniam, maiores vero
              quae eligendi minus, provident atque voluptate dicta.
              Laudantium doloribus aliquam atque veniam et.
            </p>
            <Button>Reserve Rocket</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Rockets;
