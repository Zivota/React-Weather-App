import classes from "./NextDaysWeather.module.css";
import arrow from "../img/arrow.png";

const SingleNextDay = ({ date, icon, max, min }) => {
  return (
    <div className={classes.dayWeather}>
      <h5>{date}</h5>
      <img src={icon} alt="weather icon" />
      <div>
        <div className={classes.tempInfo}>
          <img src={arrow} alt="arrow up" /> <p>{max} C</p>
        </div>
        <div className={classes.tempInfo}>
          <img src={arrow} alt="arrow up" id={classes.arrowDown} />{" "}
          <p>{min} C</p>
        </div>
      </div>
    </div>
  );
};

export default SingleNextDay;
