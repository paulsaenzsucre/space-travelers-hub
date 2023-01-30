import React from 'react';
import {
  Col, Container, ListGroup, Row,
} from 'react-bootstrap';

function MyProfile() {
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
            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
            <ListGroup.Item>Morbi leo risus</ListGroup.Item>
            <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
}

export default MyProfile;
