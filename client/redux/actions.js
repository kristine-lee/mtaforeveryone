import axios from 'axios';

//action types
const GET_USER_LOCATION = 'GET_USER_LOCATION';
const GET_ACCESSIBLE_STATION = 'GET_ACCESSIBLE_STATION';
const SHOW_MAP = 'SHOW_MAP';

const CALCULATE_ROUTES = 'CALCULATE_ROUTES';
const REDIRECT_TO_DEMAND_ACTION = 'REDIRECT_TO_DEMAND_ACTION';

//action creators
export const getUserLocation = userLocation => ({
  type: GET_USER_LOCATION,
  userLocation
})
export const getAccessibleStation = accessibleStation => ({
  type: GET_ACCESSIBLE_STATION,
  accessibleStation
})
export const showMap = map => ({
  type: SHOW_MAP,
  map
})
export const calculateRoutes = routes => ({
  type: CALCULATE_ROUTES,
  routes
})

//thunk creators

export const fetchAccessibleStations = () => {
  return async dispatch => {
    try {
      const {data}
    } catch (error) {
      console.log("can't get accessible stations!", error)
    }
  }
}
