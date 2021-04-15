import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { fetchApi } from '../Action/WeatherFunction';
import Clouds from './Clouds';

const Dashboard = () => {
    // const dispatch=useDispatch();
    const dispatch = useDispatch();
    const [city,setcity]=useState()
    const handleSubmit=()=>{
        dispatch(fetchApi(city));
    }
    const handleInput=(e)=>{
        setcity(e.target.value)
    }
    return (
        <div>
            <input type="text" placeholder="Enter City Name" onChange={handleInput}/>
            <br></br>          
            <br></br>          
            <input type="button" value="Submit" onClick={handleSubmit}/>  
        <Clouds city={city}/>
        </div>
    )
}

export default Dashboard
