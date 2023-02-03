const MISSION_URL = 'https://api.spacexdata.com/v3/missions';

const FETCH_MISSIONS = 'space-travelers-hub/missions/FETCH_MISSIONS';
const JOIN_MISSIONS = 'space-travelers-hub/missions/JOIN_MISSIONS';
const LEAVE_MISSIONS = 'space-travelers-hub/missions/LEAVE_MISSIONS';

const initialState = [];

const missionReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case FETCH_MISSIONS:
      return { ...state, missions: action.payload };
    case JOIN_MISSIONS:
      return {
        ...state,
        missions: state.missions.map((mission) => {
          if (mission.mission_id === action.payload) {
            return { ...mission, status: true };
          }
          return mission;
        }),
      };
    case LEAVE_MISSIONS:
      return {
        ...state,
        missions: state.missions.map((mission) => {
          if (mission.mission_id === action.payload) {
            return { ...mission, status: false };
          }
          return mission;
        }),
      };

    default:
      return state;
  }
};

export const fetchMissions = (payload) => ({
  type: FETCH_MISSIONS,
  payload,
});

export const apiFetchMissions = () => async (dispatch) => {
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
  dispatch(fetchMissions(missions));
};

export const joinMission = (payload) => ({
  type: JOIN_MISSIONS,
  payload,
});

export const leaveMission = (payload) => ({
  type: LEAVE_MISSIONS,
  payload,
});

export default missionReducer;
