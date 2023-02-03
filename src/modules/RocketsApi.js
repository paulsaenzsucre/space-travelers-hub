const ROCKETS_BASE_URL = 'https://api.spacexdata.com/v3/rockets';
const getRocketsUrl = new URL(ROCKETS_BASE_URL);

const getRockets = async () => {
  const rockets = [];
  const rocketsList = await fetch(getRocketsUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not OK');
      }

      return response;
    })
    .then((response) => response.json());

  rocketsList.forEach((rocket) => {
    const {
      id,
      rocket_name: rocketName,
      description,
      flickr_images: images,
    } = rocket;

    let imgId = 0;

    const flickrImages = images.map((img) => {
      imgId += 1;

      return {
        imgId,
        imgSrc: img,
      };
    });

    rockets.push({
      id,
      rocketName,
      description,
      flickrImages,
      isReserved: false,
    });
  });

  return rockets;
};

export default getRockets;
