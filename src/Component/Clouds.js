import { Tab, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core'
import moment from 'moment';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchApi } from '../Action/WeatherFunction';

const Clouds = (props) => {

    const [Dweather, setDweather] = useState();
    const data = useSelector(state => state.Wether_Data.Wether.list);
    const [dayData, setdayData] = useState([]);
    const [date, setDate] = useState([])
    const [ttime, setTtime] = useState([])
    let [compDate, setCompDate] = useState([]);
    const [weather, setWeather] = useState([]);
    const dispatch = useDispatch();

    let fil = [];
    let datee = [];
    let desc = [];
    desc = weather.map((i, j) => { return i.description })
    fil = dayData.filter((i, j) => {
        return dayData.indexOf(i) == j
    })
    // desc=weather.map((i,j)=>{})

    let time = new Date().toLocaleTimeString();
    time = moment(time, 'hh').format('YYYY-MM-D ')
    // time.toLowerCase();
    datee = date.filter((i, j) => { return date.indexOf(i) == j })
    console.log(time + "03:00:00");

    useEffect(() => {
        dispatch(fetchApi("Mohali"))
    }, [])
    useEffect(() => {
        data && setdayData(data.map((i) => { return moment(i.dt_txt).format('dddd') }))
        data && setDate(data.map((i) => { return moment(i.dt_txt).format('D MMMM') }))
        data && setDweather(data.map((i) => { return i.weather }))
        Dweather && setWeather(Dweather.map((i, j) => { return i[0] }))
        data && setTtime(data.map((i) => {
            return i.dt_txt
            // console.log(i.dt_txt[1])
            // return moment(i.dt_txt).format('YYYY-M-D ') 
        }))
        data && setCompDate(data.map((i) => { return moment(i.dt_txt).format('YYYY-D-MM') }))
    }, [data])

    console.log(time);
    console.log(ttime);

    return (
        <div>
            <div><TableContainer>
                <Table>
                    <TableHead>
                        <TableRow><TableCell></TableCell>{fil.map((i) => { return <TableCell>{i}</TableCell> })}
                        </TableRow>
                        <TableRow><TableCell></TableCell>{datee.map((i) => {
                            return <TableCell>{i}</TableCell>
                        })}</TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            {data && data.map((i, j) => {
                                let o = ""
                                if (i.dt_txt === time + "18:00:00") {
                                    o = i.weather[0].description
                                }
                                return <TableCell>{o}</TableCell>
                            })}
                        </TableRow>
                        <TableRow>
                            <TableCell>03:00:00</TableCell>
                        </TableRow>                        <TableRow>
                            <TableCell>06:00:00</TableCell>
                        </TableRow>                        <TableRow>
                            <TableCell>09:00:00</TableCell>
                        </TableRow>                        <TableRow>
                            <TableCell>12:00:00</TableCell>
                        </TableRow>                        <TableRow>
                            <TableCell>15:00:00</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>18:00:00</TableCell>
                        </TableRow>                        <TableRow>
                            <TableCell>21:00:00</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer></div>
            {/* <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Date</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data && data.map((i) => { return <TableRow><TableCell>{moment(i.dt_txt).format('dddd , h:mm:ss a')}</TableCell></TableRow> })}
                    </TableBody>
                </Table>
            </TableContainer> */}
        </div>
    )
}

export default Clouds
