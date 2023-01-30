import { actionTypes } from "./actionTypes";

export const initialState={
    firstName : "",
    lastName : "",
    email:"",
    password:"",
    education : "",
    quantity : 0,
    gender :"",
    textaria : "",
    terms: false,
  };
  export const reducer = (state, action) =>{
    console.log(action);
    switch(action.type){
      case actionTypes.INPUT:
        return {
          ...state,
          [action.payload.name]: action.payload.value,
        };
        case actionTypes.TEXTARIA:
          return {
            ...state,
            [action.payload.name]: action.payload.value,
          };
      case actionTypes.TOGGLE:
        return {
          ...state,
          terms: !state.terms,
        };
        default:
      return state;
    }
  }