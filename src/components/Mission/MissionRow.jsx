import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { joinMission, leaveMission } from '../../redux/missions/missions';

function MissionRow({ mission }) {
  const dispatch = useDispatch();
  const toggleStatus = () => {
    if (mission.status) {
      dispatch(leaveMission(mission.mission_id));
    } else {
      dispatch(joinMission(mission.mission_id));
    }
  };

  return (
    <tr key={mission.mission_id}>
      <td>{mission.mission_name}</td>
      <td>{mission.description}</td>
      <td>
        <Button
          variant={mission.status ? 'primary' : 'outline-secondary'}
        >
          {mission.status ? 'Active Member' : 'Not a Member'}
        </Button>
      </td>
      <td>
        <Button
          onClick={toggleStatus}
          variant={mission.status ? 'outline-danger' : 'outline-secondary'}
        >
          {mission.status ? 'Leave Mission' : 'Join Mission'}
        </Button>
      </td>

    </tr>
  );
}

MissionRow.propTypes = {
  mission: PropTypes.shape({
    mission_id: PropTypes.string.isRequired,
    mission_name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    status: PropTypes.bool.isRequired,
  }).isRequired,
};

export default MissionRow;
