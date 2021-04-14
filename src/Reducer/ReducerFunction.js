import { FETCH_API } from "../Store/Events"

const initialstate = {
    Wether: ""
}

const ReducerFunction = (state = initialstate, action) => {
    switch(action.type)
    {
        case FETCH_API:
            {
                return({
                    ...state,
                    Wether:action.payload
                })
            }
        default:
            return state
    }
}

export default ReducerFunction