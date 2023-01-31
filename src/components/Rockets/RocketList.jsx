import { useSelector } from 'react-redux';
import { ListGroup } from 'react-bootstrap';
import Rocket from './Rocket';

const RocketList = () => {
  const rockets = useSelector((state) => state.rockets);

  const toggleReservationStatus = (id) => console.log(`toggleReservation id: ${id}`);

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
