import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchApi } from '../Action/WeatherFunction';
import Clouds from './Clouds';

const Dashboard = () => {
    // const dispatch=useDispatch();
    const City = useSelector(state => state.Wether_Data.City)
    const dispatch = useDispatch();
    const [city, setcity] = useState()
    const handleSubmit = () => {
        dispatch(fetchApi(city));
    }
    const handleInput = (e) => {
        setcity(e.target.value)
    }
    return (
        <div >
            <div className="NavBar">

                <h3 className="head">Weather App</h3>
                <input className="inputbar" type="text" placeholder="Enter City Name" onChange={handleInput} />
                <br></br>
                <br></br>
                <input className="inputbtn" type="button" value="Submit" onClick={handleSubmit} />
                <h3 className="city">City is : {City}</h3>
            </div>
            <Clouds city={city} />
        </div>
    )
}

export default Dashboard
