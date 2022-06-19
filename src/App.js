import React, { useState } from "react";
import classes from "./App.module.css";
import CurrentWeather from "./components/CurrentWeather";
import NextDaysWeather from "./components/NextDaysWeather";
import SearchCity from "./components/SearchCity";

const App = () => {
  const [dark, setDark] = useState(false);

  const changeTheme = () => {
    setDark((prevState) => !prevState);
  };

  return (
    <div className={`${classes.App} ${dark ? classes.darkTheme : ""}`}>
      <button
        onClick={changeTheme}
        type="button"
        className={`${classes.themeBtn} ${dark ? classes.darkBtn : ""}`}
      >
        <span></span> <p>{dark ? "DARK" : "LIGHT"}</p>
      </button>
      <SearchCity />
      <CurrentWeather />
      <NextDaysWeather />
    </div>
  );
};

export default App;
