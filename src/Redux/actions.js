export const GetWeather = (list) => {
    console.log('success weather data', list);
    return {
        type: 'GET_WEATHER',
        list
    };
}
export const SetDay = (day) => {
    console.log('success Temperature', day);
    return {
        type: 'SET_DAY',
        day
    };
}
export const SetUnit = (unit) => {
    console.log('unit', unit);
    return {
        type: 'SET_UNIT',
        unit
    };
}



