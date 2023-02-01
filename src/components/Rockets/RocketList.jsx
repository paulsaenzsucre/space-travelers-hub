import { useDispatch, useSelector } from 'react-redux';
import { ListGroup } from 'react-bootstrap';
import { toggleReservationState } from '../../redux/rockets/rocketsSlice';
import Rocket from './Rocket';

const RocketList = () => {
  const rockets = useSelector((state) => state.rockets);
  const dispatch = useDispatch();

  const toggleReservationStatus = (id) => {
    dispatch(toggleReservationState(id));
  };

  return (
    <ListGroup>
      {rockets.map((rocket) => (
        <ListGroup.Item key={rocket.id} style={{ border: 0 }}>
          <Rocket
            rocketName={rocket.rocketName}
            description={rocket.description}
            flickrImages={rocket.flickrImages}
            isReserved={rocket.isReserved}
            handleClick={() => toggleReservationStatus(rocket.id)}
          />
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default RocketList;
