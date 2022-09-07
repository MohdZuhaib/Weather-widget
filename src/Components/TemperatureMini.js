import React from "react";
import { Box, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { SetDay } from "../Redux/actions";
import { store } from "../Redux/store";

const TemperatureMini = ({
  // id,
  name,
  max,
  min,
  weather,
  day,
  currentDay,
  // currentUnit,
  // setCurrentUnit,
}) => {
  // const setActive = (day) => {
  //   setCurrentUnit({ ...currentUnit, unit: "C", temp: day.currentTemp });
  //   setCurrentDay(day);
  // };
  const listState = (state) => state;
  const storeState = useSelector(listState);

  console.log("Store state fetched", storeState);
  return (
    <Box
      ml={2}
      onClick={() => store.dispatch(SetDay(day))}
      className={storeState?.day?.name === day ? "hover selected-day" : "hover"}
    >
      <Typography varoiant="h4">{name}</Typography>
      <img src={weather} alt="weather" />
      <Box display="flex">
        <Typography variant="body1">{max}&#176;</Typography>
        <Typography variant="body1" sx={{ ml: 1 }}>
          {min}&#176;
        </Typography>
      </Box>
    </Box>
  );
};

export default TemperatureMini;
