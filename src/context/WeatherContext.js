import React, { useState, useEffect, createContext } from "react";

export const WeatherContext = createContext();

const WeatherProvider = ({ children }) => {
  const [weatherInfo, setWeatherInfo] = useState({
    current: {
      temp: "",
      main: "",
      desc: "",
      icon: "",
      city: "",
      timezone: "",
      date: "",
    },
    first: {
      temp: "",
      min: "",
      max: "",
      main: "",
      desc: "",
      icon: "",
      date: "",
    },
    second: {
      temp: "",
      min: "",
      max: "",
      main: "",
      desc: "",
      icon: "",
      date: "",
    },
    third: {
      temp: "",
      min: "",
      max: "",
      main: "",
      desc: "",
      icon: "",
      date: "",
    },
    fourth: {
      temp: "",
      min: "",
      max: "",
      main: "",
      desc: "",
      icon: "",
      date: "",
    },
    fifth: {
      temp: "",
      min: "",
      max: "",
      main: "",
      desc: "",
      icon: "",
      date: "",
    },
  });

  const apiKey = "e2a7a20dd6db7ce156f94bc93ea58810";
  let lat = "";
  let lon = "";

  const defaultCity = async () => {
    const response = await fetch("http://ipwho.is/");
    const data = await response.json();
    lat = data.latitude;
    lon = data.longitude;
    let city = data.city;
    getWeatherData(city);
  };

  const getCityByName = async (city) => {
    const response =
      await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${apiKey}
    `);
    const data = await response.json();
    lat = data[0].lat;
    lon = data[0].lon;
    getWeatherData(city);
  };

  const getWeatherData = async (city) => {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly,minutely&appid=${apiKey}&units=metric`
    );
    let data = await response.json();

    const options = { weekday: "short", month: "short", day: "numeric" };

    const today = new Date();
    const first = new Date(today);
    const second = new Date(today);
    const third = new Date(today);
    const fourth = new Date(today);
    const fifth = new Date(today);

    first.setDate(today.getDate() + 1);
    second.setDate(today.getDate() + 2);
    third.setDate(today.getDate() + 3);
    fourth.setDate(today.getDate() + 4);
    fifth.setDate(today.getDate() + 5);

    setWeatherInfo({
      current: {
        temp: data.current.temp.toFixed(1),
        main: data.current.weather[0].main,
        desc: data.current.weather[0].description,
        icon: `http://openweathermap.org/img/wn/${data.current.weather[0].icon}@2x.png`,
        city: city,
        timezone: data.timezone,
        date: today.toLocaleDateString("en-US", options),
      },
      first: {
        temp: data.daily[0].temp.day,
        min: data.daily[0].temp.min.toFixed(1),
        max: data.daily[0].temp.max.toFixed(1),
        main: data.daily[0].weather[0].main,
        desc: data.daily[0].weather[0].description,
        icon: `http://openweathermap.org/img/wn/${data.daily[0].weather[0].icon}@2x.png`,
        date: first.toLocaleDateString("en-US", options),
      },
      second: {
        temp: data.daily[1].temp.day,
        min: data.daily[1].temp.min.toFixed(1),
        max: data.daily[1].temp.max.toFixed(1),
        main: data.daily[1].weather[0].main,
        desc: data.daily[1].weather[0].description,
        icon: `http://openweathermap.org/img/wn/${data.daily[1].weather[0].icon}@2x.png`,
        date: second.toLocaleDateString("en-US", options),
      },
      third: {
        temp: data.daily[2].temp.day,
        min: data.daily[2].temp.min.toFixed(1),
        max: data.daily[2].temp.max.toFixed(1),
        main: data.daily[2].weather[0].main,
        desc: data.daily[2].weather[0].description,
        icon: `http://openweathermap.org/img/wn/${data.daily[2].weather[0].icon}@2x.png`,
        date: third.toLocaleDateString("en-US", options),
      },
      fourth: {
        temp: data.daily[3].temp.day,
        min: data.daily[3].temp.min.toFixed(1),
        max: data.daily[3].temp.max.toFixed(1),
        main: data.daily[3].weather[0].main,
        desc: data.daily[3].weather[0].description,
        icon: `http://openweathermap.org/img/wn/${data.daily[3].weather[0].icon}@2x.png`,
        date: fourth.toLocaleDateString("en-US", options),
      },
      fifth: {
        temp: data.daily[4].temp.day,
        min: data.daily[4].temp.min.toFixed(1),
        max: data.daily[4].temp.max.toFixed(1),
        main: data.daily[4].weather[0].main,
        desc: data.daily[4].weather[0].description,
        icon: `http://openweathermap.org/img/wn/${data.daily[4].weather[0].icon}@2x.png`,
        date: fifth.toLocaleDateString("en-US", options),
      },
    });
  };

  const getData = (city) => {
    if (city) {
      getCityByName(city);
    } else {
      defaultCity();
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <WeatherContext.Provider value={{ weatherInfo, getData }}>
      {children}
    </WeatherContext.Provider>
  );
};

const WeatherData = (Child) => (props) => {
  <WeatherContext.Consumer>
    {(context) => <Child {...props} {...context} />}
  </WeatherContext.Consumer>;
};

export { WeatherProvider, WeatherData };
