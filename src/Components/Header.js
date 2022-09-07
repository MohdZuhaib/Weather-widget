import React, { useState } from "react";
import { useSelector } from "react-redux";
import Sunny from "../Assets/sunny.png";
import { Box, Typography, Divider } from "@mui/material";
import { SetUnit } from "../Redux/actions";
import { store } from "../Redux/store";

const Header = () => {
  const listState = (state) => state;
  const currentUnit = useSelector(listState);
  // const convertTemp = (unit) => {
  //   const currentTemp = currentUnit.currentTemp;

  //   if (unit === "C" && currentUnit.unit === "F") {
  //     const C = Math.floor((5 / 9) * (currentUnit.temp - 32));
  //     setCurrentUnit({ ...currentUnit, unit: "C", temp: C });
  //   } else if (unit === "F" && currentUnit.unit === "C") {
  //     const F = Math.floor((currentTemp * 9) / 5 + 32);
  //     setCurrentUnit({ ...currentUnit, unit: "F", temp: F });
  //   } else return;
  // };

  const setUni = (unit) => store.dispatch(SetUnit(unit));
  return (
    <Box display="flex" p={2}>
      <Box
        component="img"
        src={Sunny}
        alt="weather"
        width="72px"
        height="72px"
      />
      <Typography variant="h2"> {currentUnit.temp}</Typography>
      <Box display="flex" alignItems="center" height={23} ml={1} mr={3}>
        <Typography
          className="hover"
          variant="h6"
          onClick={() => setUni("C")}
          color={currentUnit.unit === "C" ? "#fff" : "#a9abad"}
        >
          &#176;C
        </Typography>
        <Divider
          orientation="vertical"
          flexItem
          color="#d7d7d7"
          sx={{ width: "0.5px", mx: "4px" }}
        />
        <Typography
          className="hover"
          variant="h6"
          onClick={() => setUni("F")}
          color={currentUnit.unit === "F" ? "#fff" : "#a9abad"}
        >
          &#176;F
        </Typography>
      </Box>
      <Box>
        <Typography variant="body1">
          Precipitation : {currentUnit?.precipitation}%
        </Typography>
        <Typography variant="body1">
          Humidity : {currentUnit?.humidity}%
        </Typography>
        <Typography variant="body1">Wind : {currentUnit?.wind}Km/h</Typography>
      </Box>
    </Box>
  );
};

export default Header;
