const initialState = {
  list: [],
  day: {},
  unit: "C",
  loading: true
}

export const tempReducer = (state = initialState, { type, list } = {}) => {
  console.log("payload list", list);
  switch (type) {
    case "SET_WEATHER":
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
export const displayTemp = (state = initialState, { type, displayTemp } = {}) => {
  console.log("payload");
  switch (type) {
    case "SET_DISPLAY_TEMPERATURE":
      return {
        // ...state,
        displayTemp,
      };

    default:
      return state;
  }
};
export const setLoading = (state = initialState, { type, loading } = {}) => {
  console.log("payload");
  switch (type) {
    case "SET_DISPLAY_TEMPERATURE":
      return {
        // ...state,
        loading,
      };

    default:
      return state;
  }
};
