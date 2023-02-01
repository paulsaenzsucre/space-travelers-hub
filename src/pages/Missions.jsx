import React, { useEffect } from 'react';
import { Container, Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import MissionRow from '../components/Mission/MissionRow';
import { apiFetchMissions } from '../redux/missions/missions';

let rendered = false;
function Missions() {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.missions.missions);
  useEffect(() => {
    if (!rendered) {
      dispatch(apiFetchMissions());
      rendered = true;
    }
  }, []);
  return (
    <Container>
      <Table striped bordered hover responsive="xs">
        <thead>
          <tr>
            <th>Mission</th>
            <th>Description</th>
            <th>Status</th>
            <th>{' '}</th>
          </tr>
        </thead>
        <tbody>
          { missions?.map((mission) => (
            <MissionRow key={mission.mission_id} mission={mission} />
          ))}
        </tbody>
      </Table>
    </Container>
  );
}

export default Missions;
