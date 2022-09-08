export const mainSelector = (state) => state;
export const listState = (state) => state?.tempReducer.list;
export const currentDaySelector = (state) => state?.currentDay?.day;
export const unitState = (state) => state?.currentUnit?.unit;
export const displayTempSelector = (state) => state?.displayTemp?.displayTemp;