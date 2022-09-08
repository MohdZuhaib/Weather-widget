import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { SetDay, SetdisplayTemp, SetUnit } from "../Redux/actions";
import { mainSelector } from "../Redux/selectors";
import Sunny from '../Assets/sunny.png'

const TemperatureMini = ({
  max_temp,
  min_temp,
  day,
  index
}) => {

  const dispatch = useDispatch();
  const storeState = useSelector(mainSelector);
  console.log('Temp state', storeState);
  const [dayName, setDay] = useState();
  const setDayText = (index) => {
    switch (index) {
      case 0:
        setDay('Sun')
        break;
      case 1:
        setDay('Mon')
        break;
      case 2:
        setDay('Tue')
        break;
      case 3:
        setDay('Wed')
        break;
      case 4:
        setDay('Thu')
        break;
      case 5:
        setDay('Fri')
        break;
      case 6:
        setDay('Sat')
        break;

      default:
        break;
    }
  };

  const setCurrent = (day) => {
    dispatch(SetUnit('C'));
    dispatch(SetDay(day));
    dispatch(SetdisplayTemp(day.temp))
  }
  useEffect(() => setDayText(index), [])

  return (
    <Box
      ml={2}
      onClick={() => setCurrent(day)}
      className={storeState?.currentDay?.day?.valid_date === day.valid_date ? "hover selected-day" : "hover"}
    >
      <Typography varoiant="h4">{dayName}</Typography>
      <img src={Sunny} alt="weather" />
      <Box display="flex">
        <Typography variant="body1">{max_temp}&#176;</Typography>
        <Typography variant="body1" sx={{ ml: 1, color: '#707070' }}>
          {min_temp}&#176;
        </Typography>
      </Box>
    </Box>
  );
};

export default TemperatureMini;
