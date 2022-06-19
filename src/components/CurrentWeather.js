import React, { useContext } from "react";
import { WeatherContext } from "../context/WeatherContext";
import classes from "./CurrentWeather.module.css";

const CurrentWeather = () => {
  let value = useContext(WeatherContext).weatherInfo.current;
  return (
    <div className={classes.current}>
      <div className={classes.city}>
        <h3>{value.city}</h3>
        <h5>{value.date}</h5>
        <p>
          Timezone <br />
          <span>{value.timezone}</span>
        </p>
      </div>

      <div className={classes.mainInfo}>
        <img src={value.icon} alt="weather icon" />
        <h1> {value.temp} C</h1>

        <div>
          <h4>{value.main}</h4>
          <span>{value.desc}</span>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
