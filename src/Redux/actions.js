import Axios from 'axios';
export const setWeather = (list) => ({
    type: 'SET_WEATHER',
    list
})



export const SetDay = (day) => {
    return {
        type: 'SET_DAY',
        day
    };
}
export const SetUnit = (unit) => {
    return {
        type: 'SET_UNIT',
        unit
    };
}
export const SetdisplayTemp = (temp) => {
    return {
        type: 'SET_DISPLAY_TEMPERATURE',
        displayTemp: temp
    };
}



export const GetWeather = () => async (dispatch) => {
    // const response = await Axios.get('https://api.openweathermap.org/data/2.5/forecast?lat=28.7041&lon=77.1025&appid=0d08a881856684c32aacd5113d76cb38');
    const response = await Axios.get('https://api.weatherbit.io/v2.0/forecast/daily?city=Delhi&key=2f639d7611c34cdba992901ff3fa8879&country=India');
    dispatch(setWeather(response.data.data));
    dispatch(SetDay(response.data.data[0]))
    dispatch(SetdisplayTemp(response.data.data[0].temp))

}



