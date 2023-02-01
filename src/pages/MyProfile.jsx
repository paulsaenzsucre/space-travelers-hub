import React from 'react';
import { useSelector } from 'react-redux';
import {
  Col, Container, ListGroup, Row,
} from 'react-bootstrap';

function MyProfile() {
  const rockets = useSelector((state) => state.rockets);
  const missions = useSelector((state) => state.missions.missions);
  let joinedMissions = [];
  if (missions) {
    joinedMissions = missions.length ? missions.filter((mission) => mission.status) : [];
  }
  return (
    <Container className="mt-5">
      <Row>
        <Col>
          <h1>My Missions</h1>
          <ListGroup>
            {joinedMissions.length ? joinedMissions.map((mission) => (
              <ListGroup.Item key={mission.mission_id}>{mission.mission_name}</ListGroup.Item>
            )) : <h6 className="text-danger">No Joined Group</h6>}
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
