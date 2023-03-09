import axios from "axios";
import { CURRENT_POSITION, FETCH_API, PER_DAY } from "../Store/Events";

const appId = "4454cbe8483aa1414fe0547be93c4c3e";
export const fetchApi = (city) => (dispatch) => {
  axios
    .get(
      `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${appId}`
    )
    .then((res) => {
      dispatch({
        type: FETCH_API,
        payload: res.data,
        city: city,
      });
    })
    .catch((err) => {
      dispatch({
        type: FETCH_API,
        payload: { data: false, err },
      });
    });
};

export const perDay = (city, j) => (dispatch) => {
  axios
    .get(
      `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${appId}`
    )
    .then((res) => {
      dispatch({
        type: PER_DAY,
        payload: res.data,
        city: city,
        index: j,
      });
    })
    .catch((err) => {
      dispatch({
        type: PER_DAY,
        payload: { data: false, err },
      });
    });
};

export const getLocation = () => (dispatch) => {
  axios
    .get("https://ipapi.co/json/")
    .then((res) => {
      dispatch({
        type: CURRENT_POSITION,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: CURRENT_POSITION,
        payload: { data: false, err },
      });
    });
};
