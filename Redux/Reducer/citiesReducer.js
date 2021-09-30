const initState={
    allCitiesArr: [],
  filterCitArr: [],
}

const citiesReducer=(state= initState,action) => {
    switch (action.type) {
        case "GET_ALL_CITIES":
          return {
            ...state,
            allCitiesArr: action.payload,
            filterCitArr: action.payload,
          };
        case "FILTER_CITIES":
          return {
            ...state,
            filterCitArr: state.allCitiesArr.filter((city) =>
              city.name
                .toLowerCase()
                .startsWith(action.payload.trim().toLowerCase())
            ),
          }
        default:
          return state;
      }
} 
export default citiesReducer