import React from 'react';
import { useSelector } from 'react-redux';
import {
  Col, Container, ListGroup, Row,
} from 'react-bootstrap';

function MyProfile() {
  const rockets = useSelector((state) => state.rockets);

  return (
    <Container className="mt-5">
      <Row>
        <Col>
          <h1>My Missions</h1>
          <ListGroup>
            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
            <ListGroup.Item>Morbi leo risus</ListGroup.Item>
            <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col>
          <h1>My Rockets</h1>
          <ListGroup>
            {rockets.map((rocket) => (rocket.isReserved
              ? (
                <ListGroup.Item key={rocket.id}>
                  {rocket.rocketName}
                </ListGroup.Item>
              )
              : null))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
}

export default MyProfile;
