import { useState } from 'react';
import { ListGroup } from 'react-bootstrap';
import Rocket from './Rocket';

const RocketList = () => {
  const [rockets, setRockets] = useState([
    {
      id: '5e9d0d95eda69955f709d1eb',
      rocketName: 'Falcon 1',
      description: 'The Falcon 1 was an expendable launch system privately developed and manufactured by SpaceX during 2006-2009. On 28 September 2008, Falcon 1 became the first privately-developed liquid-fuel launch vehicle to go into orbit around the Earth.',
      flickrImages: [
        {
          imgSrc: 'https://live.staticflickr.com/65535/48954138962_ee541e6755_b.jpg',
          imgId: 0,
        },
        {
          imgSrc: 'https://live.staticflickr.com/65535/48953946911_e60c5bcc5c_b.jpg',
          imgId: 1,
        },
      ],
      isReserved: false,
    },
    {
      id: '5e9d0d95eda69973a809d1ec',
      rocketName: 'Falcon 9',
      description: 'Falcon 9 is a two-stage rocket designed and manufactured by SpaceX for the reliable and safe transport of satellites and the Dragon spacecraft into orbit.',
      flickrImages: [
        {
          imgSrc: 'https://farm1.staticflickr.com/929/28787338307_3453a11a77_b.jpg',
          imgId: 0,
        },
        {
          imgSrc: 'https://farm4.staticflickr.com/3955/32915197674_eee74d81bb_b.jpg',
          imgId: 1,
        },
        {
          imgSrc: 'https://farm1.staticflickr.com/293/32312415025_6841e30bf1_b.jpg',
          imgId: 2,
        },
        {
          imgSrc: 'https://farm1.staticflickr.com/623/23660653516_5b6cb301d1_b.jpg',
          imgId: 3,
        },

      ],
      isReserved: true,
    },
    {
      id: '5e9d0d95eda69974db09d1ed',
      rocketName: 'Falcon Heavy',
      description: 'With the ability to lift into orbit over 54 metric tons (119,000 lb)--a mass equivalent to a 737 jetliner loaded with passengers, crew, luggage and fuel--Falcon Heavy can lift more than twice the payload of the next closest operational vehicle, the Delta IV Heavy, at one-third the cost.',
      flickrImages: [
        {
          imgSrc: 'https://farm5.staticflickr.com/4599/38583829295_581f34dd84_b.jpg',
          imgId: 0,
        },
        {
          imgSrc: 'https://farm5.staticflickr.com/4645/38583830575_3f0f7215e6_b.jpg',
          imgId: 1,
        },
        {
          imgSrc: 'https://farm5.staticflickr.com/4696/40126460511_b15bf84c85_b.jpg',
          imgId: 2,
        },
        {
          imgSrc: 'https://farm5.staticflickr.com/4711/40126461411_aabc643fd8_b.jpg',
          imgId: 3,
        },
      ],
      isReserved: false,
    }]);

  const toggleReservationStatus = (id) => setRockets(
    rockets.map((rocket) => (rocket.id !== id
      ? rocket
      : { ...rocket, isReserved: !rocket.isReserved })),
  );

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
