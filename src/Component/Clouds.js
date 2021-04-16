import { Tab, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core'
import moment from 'moment';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchApi, getLocation, perDay } from '../Action/WeatherFunction';

const Clouds = (props) => {
    const data = useSelector(state => state.Wether_Data.Wether.list);
    const city = useSelector(state => state.Wether_Data.City)
    const filterData = useSelector(state => state.Wether_Data.PWether)
    const current = useSelector(state => state.Wether_Data.location.city)
    const [Dweather, setDweather] = useState();
    const [dayData, setdayData] = useState([]);
    const [date, setDate] = useState([])
    const [ttime, setTtime] = useState([])
    let [compDate, setCompDate] = useState([]);
    const [weather, setWeather] = useState([]);
    const dispatch = useDispatch();
    let imgData = ""
    let tempD = 'tempDate'
    let fil = []; let datee = []; let desc = [];
    desc = weather.map((i, j) => { return i.description })
    fil = dayData.filter((i, j) => {
        return dayData.indexOf(i) == j
    })
    let time = new Date().toLocaleTimeString();
    time = moment(time, 'hh').format('YYYY-MM-D ')
    datee = date.filter((i, j) => { return date.indexOf(i) == j })
    useEffect(() => {
        dispatch(fetchApi(current))
        dispatch(getLocation())
    }, [])
    useEffect(() => {
        data && setdayData(data.map((i) => { return moment(i.dt_txt).format('dddd') }))
        data && setDate(data.map((i) => { return moment(i.dt_txt).format('D MMMM') }))
        data && setDweather(data.map((i) => { return i.weather }))
        Dweather && setWeather(Dweather.map((i, j) => { return i[0] }))
        data && setTtime(data.map((i) => {
            return moment(i.dt_txt).format('YYYY-M-D ')
        }))
        data && setCompDate(data.map((i) => { return moment(i.dt_txt).format('YYYY-D-MM') }))
    }, [data])
    let hrs = []; let k;
    const handleClick = (city, j) => {
        dispatch(perDay(city, j))
    }
    return (
        <div><br></br>
            <div><TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>{fil.map((i) => { return <TableCell style={{ fontWeight: "bold" }}>{i}</TableCell> })}
                        </TableRow>
                        <TableRow>{datee.map((i) => {
                            return <TableCell>{i}</TableCell>
                        })}</TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            {data && data.map((i, j) => {
                                let tempDate = moment(i.dt_txt).format('YYYY-M-D')
                                let o = ""
                                if (toString(tempDate) === toString(time)) {
                                    o = i.weather[0].description
                                    if (tempD != tempDate) {
                                        hrs.push(i.main.temp)
                                        let d; let v; let tem;
                                        if (o == "few clouds") {
                                            d = 'Few Clouds'
                                            tem = i.main.temp;
                                            d = 'https://www.clipartmax.com/png/middle/163-1632248_gnome-weather-few-clouds-scattered-clouds-weather-symbol.png'
                                        }
                                        if (o == "scattered clouds") {
                                            d = 'https://en.protothema.gr/wp-content/uploads/2014/11/clouds_10_5_6_tonemapped-870x418.jpg'
                                            tem = i.main.temp;
                                            v = "Scattered Clouds"
                                        }
                                        else if (o == "light rain") {
                                            d = 'https://images.blogthings.com/whatsyouridealweatherquiz/light-rain.png'
                                            tem = i.main.temp;
                                            v = "Light Rain"
                                        }
                                        else if (o == "clear sky") {
                                            tem = i.main.temp;
                                            v = "Clear Sky"
                                            d = 'https://thumbs.dreamstime.com/b/clear-sky-sun-sunrays-daytime-good-weather-138115265.jpg'
                                        }
                                        else if (o == "broken clouds") {
                                            tem = i.main.temp;
                                            v = "Broken Clouds"
                                            d = 'https://cdn3.iconfinder.com/data/icons/stylized-weather-icons/745/803BrokenClouds.png'
                                        }
                                        else if (o == 'overcast clouds') {
                                            tem = i.main.temp;
                                            v = 'Overcast Clouds'
                                            d = 'https://ak.picdn.net/shutterstock/videos/3803567/thumb/3.jpg'
                                        }
                                        tempD = tempDate;
                                        tem = tem - 273.15;
                                        return <><TableCell><img className="images" onClick={() => handleClick(city, j)} src={d} alt={v} title={v}></img><label><b>Temp</b> {tem.toFixed(2)} C</label></TableCell></>
                                    }
                                }
                            })}
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
            </div>
            <div>
                <h2 className="head">Per Day data { }</h2>
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow >
                                <TableCell style={{ fontWeight: "bold" }}>Hours</TableCell>
                                <TableCell style={{ fontWeight: "bold" }}>Tem</TableCell>
                                <TableCell style={{ fontWeight: "bold" }}>Clouds</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {filterData && filterData.map((i, j) => {
                                let tempd = i.main.temp
                                tempd = tempd - 273.15
                                return <><TableRow><TableCell>{moment(i.dt_txt).format('h:mm:ss a')}</TableCell><TableCell>{tempd.toFixed(2)} C</TableCell><TableCell>{i.weather[0].description}</TableCell></TableRow></>
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </div>
    )
}
export default Clouds
