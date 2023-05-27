import React, { useState } from 'react'
import axios from "axios"
import { useDispatch } from 'react-redux';
import { getTempOfCity } from "./Redux/Actions"
import { useSelector } from 'react-redux';

function Data() {
    const [city, setCity] = useState("");
    const [flag,setFlag] = useState(false);
    const [mytemp ,setTemp]= useState("");
    const[myfeels,setFeels] = useState("");
    const[mycountry,setCountry]=useState("");

    const dispatch = useDispatch();
    const DataApi = useSelector(state => state.Temprature);
         console.log("ReduxData"+DataApi);
    const HandleChange = (event) => {
        setCity(event.target.value);
    }

    const HandleClick = async () => {

        try {
            setFlag(true);
            const data = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=6450a159b75b1665aa53bb27312c259c`)
            // console.log(data.data);
            console.log(data.data.main);
            let degreeSymbol = '&deg;'
            console.log(degreeSymbol)
            const tempKel = data.data.main.temp;
            const fellsLikeKel = data.data.main.feels_like;
            const temp = Math.floor(tempKel - 273.15);
            const feelsLike = Math.floor(fellsLikeKel - 273.15);
            const country = data.data.sys.country;
            // console.log(temp);
            // console.log(feelsLike);
            // console.log(country);
            setTemp(temp)
            setFeels(feelsLike)
            setCountry(country)
            const AllData = {
                temp: `${temp,degreeSymbol}`,
                feels: `${feelsLike}${degreeSymbol}C`,
                country: country
            }
            
            
            // console.log(data);
            dispatch(getTempOfCity(AllData));
           
         
        } catch (error) {
            console.log(error);
        }
    }

    
    

    return (

        <div className="container" style={{ width: "1200px", margin: "100px auto", textAlign: "center", color: "white" }}>

            <h1>Enter the city below to get its weather updates:</h1>
            <input type='text' name='city' style={{ width: "200px", height: "30px", fontSize: "20px" }} value={city} onChange={HandleChange} />

            <button style={{ marginLeft: "10px", height: "35px", cursor: "pointer" }} onClick={HandleClick} >Check</button>
            <h3>
                <span>Temprature:{mytemp} </span>

            </h3>
            <h3>
                <span>Feels Like:{myfeels}</span>

            </h3>
            <h3>
                <span>Country: {mycountry} </span>

            </h3>
        </div>
    )
}

export default Data