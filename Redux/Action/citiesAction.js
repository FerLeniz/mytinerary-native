import axios from 'axios'

const citiesAction={
    getAllCities: () => {
        return async (dispatch) => {
          let resp = await axios.get("https://mytineraryleniz.herokuapp.com/api/datacities")
          if (!resp.data.success) {
            throw new Error("Backend and Database problem")
          }
          let status = resp.data.response
          dispatch({ type: "GET_ALL_CITIES", payload: status })
        };
      },
      filterCities: (e) => {
        let inputName = e
        return (dispatch) => {
          dispatch({ type: "FILTER_CITIES", payload: inputName })
        }
      }
}

export default citiesAction