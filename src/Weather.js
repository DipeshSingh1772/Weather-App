import React, { useEffect, useState } from 'react'

const Weather = () => {

    const[Place, setPlace] = useState([])
    const[Search, setSearch] = useState("Rewa")


    useEffect( () => {
            const fetchApi = async () => {
                const url = `http://api.openweathermap.org/data/2.5/weather?q=${Search} &units=metric&appid=9387b505ab406a1385a351d9653d39c4`
                const response = await fetch(url);
                const resjson = await response.json()
                console.log(resjson);
                setPlace(resjson.main);
            }

            fetchApi();
        },[Search])

    const handlechange = (event) => {
        setSearch(event.target.value)
    }

    return(
        <div className="main_class">
            <div className="sub_class">

                <h1>Weather Report</h1>

                <input type="search" id="search_place" value={Search} onChange={handlechange}/>

                { !Place ? <p>Data Not Found</p> :
                    <div>
                        <h2>{Search}</h2>
                        <p className="tempreture">{Place.temp}°Cel</p>
                        <font>Min Temp : {Place.temp_min}°C || Max Temp : {Place.temp_max}°C</font>
                    </div>
                }
            </div>
        </div>
    )
}

export default Weather 