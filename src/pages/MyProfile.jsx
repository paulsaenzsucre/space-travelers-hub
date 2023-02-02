import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Alert,
  Button,
  Col,
  Container,
  ListGroup,
  Row,
} from 'react-bootstrap';
import { toggleReservationState } from '../redux/rockets/rocketsSlice';

function MyProfile() {
  const rockets = useSelector((state) => state.rockets);
  const missions = useSelector((state) => state.missions.missions);
  const dispatch = useDispatch();

  let joinedMissions = [];
  if (missions) {
    joinedMissions = missions.length ? missions.filter((mission) => mission.status) : [];
  }

  const cancelRocketReservation = (id) => {
    dispatch(toggleReservationState(id));
  };

  const filterReservedRockets = (rocks) => {
    const reserved = rocks.filter((rocket) => rocket.isReserved);

    return reserved.length > 0
      ? reserved.map((rocket) => (
        <ListGroup.Item key={rocket.id}>
          <div className="d-flex justify-content-between align-items-center">
            {rocket.rocketName}
            <div>
              <a className="btn btn-info me-3" href={rocket.wikipedia} target="_blank" rel="noreferrer">Read more</a>
              <Button variant="danger" onClick={() => cancelRocketReservation(rocket.id)}>Cancel Reservation</Button>
            </div>

          </div>
        </ListGroup.Item>
      ))
      : (<Alert variant="info">No rockets reserved</Alert>);
  };

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
            {filterReservedRockets(rockets)}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
}

export default MyProfile;
