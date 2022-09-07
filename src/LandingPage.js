import React, { useEffect, useState } from "react";
import Container from "@mui/material/Container";
import Axios from 'axios';
import { store } from './Redux/store';
import Header from "./Components/Header";
import Body from "./Components/Body";
import days from "./staticData";
import { GetWeather } from './Redux/actions'

const LandingPage = () => {
  const monday = days[0];
  // const [currentDay, setCurrentDay] = useState(monday);
  const [currentUnit, setCurrentUnit] = useState({
    unit: "C",
    // temp: currentDay.currentTemp,
  });
  // console.log(currentDay);


  useEffect(() => {
    Axios.get('https://api.openweathermap.org/data/2.5/forecast?lat=28.7041&lon=77.1025&appid=0d08a881856684c32aacd5113d76cb38').then((response) => {
      console.log('Store', store)
      store.dispatch(GetWeather(response.data))
    });


  }, [])

  return (
    <Container maxWidth="xl" sx={{ pt: 2 }}>
      <Header
        // currentDay={currentDay}
        currentUnit={currentUnit}
        setCurrentUnit={setCurrentUnit}
      />
      <Body
        // currentDay={currentDay}
        // setCurrentDay={setCurrentDay}
        setCurrentUnit={setCurrentUnit}
        currentUnit={currentUnit}
      />
    </Container>
  );
};

export default LandingPage;
