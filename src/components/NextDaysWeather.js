import React, { useContext } from "react";
import { WeatherContext } from "../context/WeatherContext";
import classes from "./NextDaysWeather.module.css";
import SingleNextDay from "./SingleNextDay";

const NextDaysWeather = () => {
  const value = useContext(WeatherContext).weatherInfo;

  return (
    <div className={classes.infoHolder}>
      <SingleNextDay
        date={value.first.date}
        icon={value.first.icon}
        max={value.first.max}
        min={value.first.min}
      />
      <SingleNextDay
        date={value.second.date}
        icon={value.second.icon}
        max={value.second.max}
        min={value.second.min}
      />
      <SingleNextDay
        date={value.third.date}
        icon={value.third.icon}
        max={value.third.max}
        min={value.third.min}
      />
      <SingleNextDay
        date={value.fourth.date}
        icon={value.fourth.icon}
        max={value.fourth.max}
        min={value.fourth.min}
      />
      <SingleNextDay
        date={value.fifth.date}
        icon={value.fifth.icon}
        max={value.fifth.max}
        min={value.fifth.min}
      />
    </div>
  );
};

export default NextDaysWeather;
