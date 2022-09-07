const initialState = [
  {
    list: [],
    day: "Monday",
    unit: "C",
  },
];

// const  = {
//     weather: 'testReducer'
// };

export const tempReducer = (state = initialState, { type, list } = {}) => {
  console.log("payload list", list);
  switch (type) {
    case "GET_WEATHER":
      return {
        // ...state,
        list,
      };

    default:
      return state;
  }
};
export const currentDay = (state = initialState, { type, day } = {}) => {
  console.log("payload");
  switch (type) {
    case "SET_DAY":
      return {
        // ...state,
        day,
      };

    default:
      return state;
  }
};
export const currentUnit = (state = initialState, { type, unit } = {}) => {
  console.log("payload");
  switch (type) {
    case "SET_UNIT":
      return {
        // ...state,
        unit: unit,
      };

    default:
      return state;
  }
};
