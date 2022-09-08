import React, { useState } from "react";
import { Tabs, Tab, Box, Typography } from "@mui/material";
import { useSelector } from "react-redux";
// import Temperature from "../Assets/temp1.png";
// import PrecMon from "../Assets/prec1.png";
// import WindMon from "../Assets/wind1.png";
import TemperatureMini from "./TemperatureMini";
import days from "../staticData";
import { listState } from "../Redux/selectors";
import { push } from "redux-first-history";


const Body = ({ currentDay, setCurrentUnit }) => {
  const [value, setValue] = useState(0);
  const dailyTempinState = useSelector(listState);
  console.log('dailyTemp', dailyTempinState)
  const dailyTemp = [];
  const pushData = () => {
    for (let i = 0; i < 7; i++) {
      dailyTemp.push(dailyTempinState[i])
    }
  }
  dailyTempinState?.length > 0 && pushData()


  console.log('Store state', dailyTemp)
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const tabView = {
    0: {
      src: currentDay?.temperature,
      alt: "temperature"
    },
    1: {
      src: currentDay?.precipitationImage,
      alt: "precipitation"
    },
    2: {
      src: currentDay?.windImage,
      alt: "wind"
    },
  }

  return (
    <>
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="#d7d7d7"
        indicatorColor="primary"
        sx={{
          "& .MuiTabs-indicator": {
            backgroundColor: "#ffe168",
            marginLeft: "20px",
            width: "90px !important",
          },
        }}
      >
        <Tab label="Temperature" />
        <Tab
          sx={{
            borderLeft: "1px solid #545454",
            borderRight: "0.5px solid #545454",
          }}
          label="Precipitation"
        />
        <Tab label="Wind" />
      </Tabs>
      <Typography variant='body1' sx={{ color: '#707070', ml: 3, mt: 2 }}>Feature not available yet</Typography>


      <Box display="flex" mt={3}>
        {dailyTemp.map((day, index) => (
          <TemperatureMini
            {...day}
            // setCurrentDay={setCurrentDay}
            day={day}
            index={index}
          // currentUnit={currentUnit}
          />
        ))}
      </Box>
    </>
  );
};

export default Body;
