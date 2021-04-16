import axios from "axios"
import { FETCH_API, PER_DAY } from "../Store/Events"

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
    // axios.get(`api.openweathermap.org/data/2.5/forecast/daily?q=${city}&mode=xml&units=metric&cnt=7&appid=50c9fad5c18d620ce1212e9ea4e1177d`)
    // axios.get(`http://api.openweathermap.org/data/2.5/forecast/daily?q=${city}&mode=xml&units=metric&cnt=16")`)
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