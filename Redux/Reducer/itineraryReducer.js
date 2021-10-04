const initState = {
  itinerary: [],
}

const itineraryReducer = (state = initState, action) => {
  switch (action.type) {
    case "GET_ITINERARIES":
      return {
        ...state,
        itinerary: action.payload,
      }
    default:
      return state
  }
}

export default itineraryReducer
