import axios from "axios"
import { FETCH_API } from "../Store/Events"

export const fetchApi = (city) => dispatch => {
    axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=69ea186130e1fec118fcc795ac180f7e
    `)
        .then(res => {
            dispatch({
                type: FETCH_API,
                payload: res.data
            })
        })
        .catch(err => {
            dispatch({
                type: FETCH_API,
                payload: { data: false, err }
            })
        })
}