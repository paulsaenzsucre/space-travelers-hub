const MISSION_URL = 'https://api.spacexdata.com/v3/missions';

const apiFetchMission = async () => {
  const response = await fetch(MISSION_URL);
  const data = await response.json();
  const missions = [];
  data.forEach((d) => {
    missions.push({
      mission_id: d.mission_id,
      mission_name: d.mission_name,
      description: d.description,
      status: false,
    });
  });
  return missions;
};

export default apiFetchMission;
