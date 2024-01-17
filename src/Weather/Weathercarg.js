import React, { useEffect, useState } from 'react';
import "./style.css";

const Weathercarg = (props) => {
  const [weatherState, setWeatherState] = useState("");


 //Destructuring API
  const  {
    temp,
    pressure,
    humidity,
    weathermood,
    name,
    speed,
    sunset,
    country,
  }= props.tempinfo;


  useEffect(()=>{
    if(weathermood){
      switch (weathermood) {
          case "Clouds":
          setWeatherState("wi-day-cloudy");
          break;
      
          case "Haze":
            setWeatherState("wi-fog");
            break;

            case "sunny":
              setWeatherState("wi-day-sunny");
              break;
            
              case "Mist":
                setWeatherState("wi-dust");
                break;
        
                case "rain":
                setWeatherState("wi-wi-rain");
                break;
        
              default:
          setWeatherState("wi-day-sunny");
              break;
       
      }
    }
  }, [weathermood])

    //concerting
    let sec = sunset;
    let date = new Date (sec * 1000);
    let timestr = `${date.getHours()}:${date.getMinutes()}`

  return (
    <>
            <article className="widget">
        <div className="weatherIcon">
          <i className={`wi ${weatherState}`}></i>
        </div>

        <div className="getWeatherInfo">
          <div className="temperature">
            <span>{temp}&deg;</span>
          </div>
          <div className="description">
            <div className="weatherCondition" >{weathermood}</div>
           
            <div className="place"> {name} , {country}</div>
          </div>
          <div className="date">{new Date().toLocaleString()}</div>
        </div>

        <div className="extra-temp">
          <div className="temp-info-minmax">
            <div className="two-sided-section">
              <p>
                <i className={"wi wi-sunset"}></i>
              </p>
              <p className="extra-info-leftside">
                {timestr} <br />
                Sunset
              </p>
            </div>

            <div className="two-sided-section">
              <p>
                <i className={"wi wi-humidity"}></i>
              </p>
              <p className="extra-info-leftside">
               {humidity} <br />
                Humidity
              </p>
            </div>
          </div>

          <div className="weather-extra-info">
            <div className="two-sided-section">
              <p>
                <i className={"wi wi-rain"}></i>
              </p>
              <p className="extra-info-leftside">
                {pressure} <br />
                Pressure
              </p>
            </div>

            <div className="two-sided-section">
              <p>
                <i className={"wi wi-strong-wind"}></i>
              </p>
              <p className="extra-info-leftside">
             { speed }<br />
                Speed
              </p>
            </div>
          </div>
        </div>
      </article>
    </>
  )
}

export default Weathercarg;
