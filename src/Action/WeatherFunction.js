import axios from "axios"
import { CURRENT_POSITION, FETCH_API, PER_DAY } from "../Store/Events"

export const fetchApi = (city) => dispatch => {
    axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=69ea186130e1fec118fcc795ac180f7e
    `)
        .then(res => {
            dispatch({
                type: FETCH_API,
                payload: res.data,
                city: city
            })
        })
        .catch(err => {
            dispatch({
                type: FETCH_API,
                payload: { data: false, err }
            })
        })
}

export const perDay = (city, j) => dispatch => {
    axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=69ea186130e1fec118fcc795ac180f7e`)
        .then(res => {
            dispatch({
                type: PER_DAY,
                payload: res.data,
                city: city,
                index: j
            })
        })
        .catch(err => {
            dispatch({
                type: PER_DAY,
                payload: { data: false, err }
            })
        })
}

export const getLocation = () => dispatch => {
    axios.get("https://ipapi.co/json/")
        .then(res => {
            dispatch({
                type: CURRENT_POSITION,
                payload: res.data
            })
        })
        .catch(err => {
            dispatch({
                type: CURRENT_POSITION,
                payload: { data: false, err }
            })
        })
    //     .then((response) => {
    //         // let data = response.data;
    //         // setSearch(data.city);
    //         type:   
    //     })
    //     .catch((error) => {
    //     });
}