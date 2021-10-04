 const initState = {
     token: null,
    name:null,
    url:null
   };
  
   const userReducer = (state = initState, action) => {
     switch (action.type) {
      case "LOG_USER":
         return {
           ...state,
           token: action.payload.token,
           name:action.payload.name,
           url:action.payload.url
         };
       case "LOG_OUT":
         return {
             ...state,//reveer por si sale mal !!
           token: null,
           name:null,
           url:null
         };
       default:
         return state;
     }
   };
  
   export default userReducer;
  