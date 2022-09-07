import partly from "./Assets/partly.png";
import sunny from "./Assets/sunny.png";
import prec1 from "./Assets/prec1.png";
import prec2 from "./Assets/prec2.png";
import prec3 from "./Assets/prec3.png";
import prec4 from "./Assets/prec4.png";
import temp1 from "./Assets/temp1.png";
import temp2 from "./Assets/temp4.png";
import temp4 from "./Assets/temp2.png";
import temp3 from "./Assets/temp3.png";
import temp5 from "./Assets/temp5.png";
import wind1 from "./Assets/wind1.png";
import wind2 from "./Assets/wind2.png";
import wind3 from "./Assets/wind3.png";
import wind4 from "./Assets/wind4.png";

const days = [
  {
    id: 1,
    name: "Mon",
    currentTemp: 35,
    max: 23,
    min: 17,
    precipitation: 10,
    humidity: 54,
    wind: 10,
    weather: partly,
    temperature: temp1,
    precipitationImage: prec1,
    windImage: wind1,
  },
  {
    id: 2,
    name: "Tue",
    currentTemp: 39,
    max: 25,
    min: 19,
    precipitation: 25,
    humidity: 63,
    wind: 20,
    weather: partly,
    temperature: temp2,
    precipitationImage: prec2,
    windImage: wind2,
  },
  {
    id: 3,
    name: "Wed",
    currentTemp: 40,
    max: 33,
    min: 22,
    precipitation: 19,
    humidity: 98,
    wind: 32,
    weather: sunny,
    temperature: temp3,
    precipitationImage: prec3,
    windImage: wind3,
  },
  {
    id: 4,
    name: "Thu",
    currentTemp: 45,
    max: 44,
    min: 12,
    precipitation: 67,
    humidity: 34,
    wind: 10,
    weather: sunny,
    temperature: temp4,
    precipitationImage: prec4,
    windImage: wind4,
  },
  {
    id: 5,
    name: "Fri",
    currentTemp: 31,
    max: 41,
    min: 19,
    precipitation: 55,
    humidity: 11,
    wind: 21,
    weather: partly,
    temperature: temp5,
    precipitationImage: prec1,
    windImage: wind1,
  },
  {
    id: 6,
    name: "Sat",
    currentTemp: 29,
    max: 50,
    min: 20,
    precipitation: 95,
    humidity: 55,
    wind: 33,
    weather: partly,
    temperature: temp1,
    precipitationImage: prec2,
    windImage: wind2,
  },
];

export default days;
