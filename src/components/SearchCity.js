import React, { useContext, useRef } from "react";
import { WeatherContext } from "../context/WeatherContext";
import classes from "./SearchCity.module.css";
import arrow from "../img/arrow.png";

const SearchCity = () => {
  const value = useContext(WeatherContext).getData;
  let cityNameRef = useRef();

  const findWeatherByCityName = (e) => {
    e.preventDefault();

    if (cityNameRef.current.value.trim().length > 0) {
      value(cityNameRef.current.value);
      cityNameRef.current.value = "";
    }
  };

  return (
    <form onSubmit={findWeatherByCityName} className={classes.searchForm}>
      <input ref={cityNameRef} placeholder="Enter city name..." type="text" />
      <button type="submit">
        <img src={arrow} alt="arrow icon" />
      </button>
    </form>
  );
};

export default SearchCity;
