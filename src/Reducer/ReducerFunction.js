import moment from "moment"
import { CURRENT_POSITION, FETCH_API, PER_DAY } from "../Store/Events"

const initialstate = {
    Wether: "",
    City: "",
    PWether: "",
    city: "",
    location: "",
    date:""
}

const ReducerFunction = (state = initialstate, action) => {
    switch (action.type) {
        case FETCH_API:
            {
                localStorage.setItem('city', action.city)
                return ({
                    ...state,
                    Wether: action.payload,
                    City: action.city
                })
            }
        case PER_DAY:
            {

                let list = action.payload.list
                let city = action.city
                let index = action.index
                console.log(list, index, city);
                let date = list[index].dt_txt
                date = moment(date).format('YYYY-M-D')
                console.log(date);
                let comp;
                let filtered = [];
                let data = list.filter((i, j) => {
                    comp = i.dt_txt
                    comp = moment(comp).format('YYYY-M-D')
                    // console.log(comp);

                    if (comp === date) {
                        return ({
                            ...state,
                            PWether: i,
                            city: action.city,
                            date:date
                        })
                    }
                })
                return ({
                    ...state,
                    PWether: data,
                    city: action.city
                })
            }
        case CURRENT_POSITION:
            {
                return ({
                    ...state,
                    location: action.payload,
                })
            }
        default:
            return state
    }
}

export default ReducerFunction