import React, { useState } from "react";
import { Tabs, Tab, Box } from "@mui/material";
// import Temperature from "../Assets/temp1.png";
// import PrecMon from "../Assets/prec1.png";
// import WindMon from "../Assets/wind1.png";
import TemperatureMini from "./TemperatureMini";
import days from "../staticData";

const Body = ({ currentUnit, currentDay, setCurrentDay, setCurrentUnit }) => {
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

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
      {value === 0 && (
        <img
          src={currentDay?.temperature}
          alt="temperature"
          width={600}
        />
      )}
      {value === 1 && (
        <img
          src={currentDay?.precipitationImage}
          alt="precipitation"
          width={600}
        />
      )}
      {value === 2 && <img src={currentDay?.windImage} alt="wind" width={600} />}
      <Box display="flex" mt={3}>
        {days.map((day) => (
          <TemperatureMini
            {...day}
            // setCurrentDay={setCurrentDay}
            day={day}
            currentDay={currentDay}
            setCurrentUnit={setCurrentUnit}
            currentUnit={currentUnit}
          />
        ))}
      </Box>
    </>
  );
};

export default Body;
