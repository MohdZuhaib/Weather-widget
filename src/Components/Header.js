import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Sunny from "../Assets/sunny.png";
import { Box, Typography, Divider } from "@mui/material";
import { SetUnit, SetdisplayTemp } from "../Redux/actions";
import { unitState, currentDaySelector, displayTempSelector } from "../Redux/selectors";

const Header = () => {
  const dispatch = useDispatch()
  const statetUnit = useSelector(unitState);
  const currentDay = useSelector(currentDaySelector);
  const displayTemp = parseInt(useSelector(displayTempSelector));
  console.log('state Unit', statetUnit)

  const convertTemp = (unit) => {
    const currentTemp = parseInt(displayTemp);

    if (unit === "C" && statetUnit === "F") {
      const C = parseInt(Math.floor((5 / 9) * (currentTemp - 32)));
      dispatch(SetUnit(unit));
      dispatch(SetdisplayTemp(C))
    } else if (unit === "F" && statetUnit === "C") {
      const F = parseInt(Math.floor((currentTemp * 9) / 5 + 32));
      dispatch(SetUnit(unit));
      dispatch(SetdisplayTemp(F))
    } else return;
  };
  return (
    <Box display="flex" p={2}>
      <Box
        component="img"
        src={Sunny}
        alt="weather"
        width="72px"
        height="72px"
      />
      <Typography variant="h2"> {displayTemp}</Typography>
      <Box display="flex" alignItems="center" height={23} ml={1} mr={3}>
        <Typography
          className="hover"
          variant="h6"
          onClick={() => convertTemp("C")}
          color={statetUnit === "C" ? "#fff" : "#a9abad"}
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
          onClick={() => convertTemp("F")}
          color={statetUnit === "F" ? "#fff" : "#a9abad"}
        >
          &#176;F
        </Typography>
      </Box>
      <Box>
        <Typography variant="body1">
          Precipitation : {currentDay?.precip}%
        </Typography>
        <Typography variant="body1">
          Humidity : {currentDay?.rh}%
        </Typography>
        <Typography variant="body1">Wind : {currentDay?.wind_gust_spd}Km/h</Typography>
      </Box>
    </Box>
  );
};

export default Header;
