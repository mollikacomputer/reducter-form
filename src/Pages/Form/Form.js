import React, { useReducer } from "react";

const Form = () => {
  const initialState={
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
  const reducer = (state, action) =>{
    console.log(action);
    switch(action.type){
      case "INPUT":
        return {
          ...state,
          [action.payload.name]: action.payload.value,
        };
        case "TEXTARIA":
          return {
            ...state,
            [action.payload.name]: action.payload.value,
          };
      case "TOGGLE":
        return {
          ...state,
          terms: !state.terms,
        };
        default:
      return state;
    }
  }
  const [state, dispatch] = useReducer(reducer, initialState);
  const submit = (event) =>{
    event.preventDefault();
    console.log(state);
  }

  return (
    <div className="grid justify-items-center">
      
      <form onSubmit={submit}>
        <div className="">
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Write your first name?</span>
            </label>
            <input
              type="text"
              name="firstName"
              placeholder="Write First Name"
              className="input input-bordered w-full max-w-xs"
              onBlur={(e)=>dispatch({type:"INPUT", payload:{name: e.target.name, value:e.target.value}})}
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Write your last name?</span>
            </label>
            <input
              type="text"
              name="lastName"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
              onBlur={(e)=>dispatch({type:"INPUT", payload:{name: e.target.name, value:e.target.value}})}
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
              onBlur={(e)=>dispatch({type:"INPUT", payload:{name: e.target.name, value:e.target.value}})}
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Password?</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
              onBlur={(e)=>dispatch({type:"INPUT", payload:{name: e.target.name, value:e.target.value}})}
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Comment?</span>
            </label>
            <textarea
              type="text"
              name="textaria"
              class="textarea textarea-bordered"
              placeholder="comment"
              onBlur={(e)=>dispatch({type:"TEXTARIA", payload:{name: e.target.name, value:e.target.value}})}
            ></textarea>
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Education</span>
            </label>
            <select
              name="education"
              class="select select-primary w-full max-w-xs"
              onChange={(e)=>dispatch({type:"INPUT", payload:{name: e.target.name, value:e.target.value}})}
            >
              <option disabled selected>
                Select Your Last Education Level
              </option>
              <option>SSC</option>
              <option>HSC</option>
              <option>BA</option>
              <option>MA</option>
            </select>
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Number of PC's</span>
            </label>
            <input
              type="text"
              name="quantity"
              placeholder="Type Pc Quantity"
              className="input input-bordered w-full max-w-xs"
              onBlur={(e)=>dispatch({type:"INPUT", payload:{name: e.target.name, value:e.target.value}})}
              />
          </div>
          <div className="form-control w-full max-w-xs">
          <label className="label">
              <span className="label-text">Male Female</span>
            </label>
          <input
              type="radio"
              name="gender"
              value="Male"
              onClick={(e)=>dispatch({type:"INPUT", payload:{name: e.target.name, value:e.target.value}})}
            />
            <input
            type="radio"
            name="gender"
            value="Female"
            onClick={(e)=>dispatch({type:"INPUT", payload:{name: e.target.name, value:e.target.value}})}
          />
          </div>
          <div className="form-control w-full max-w-xs">
          <input 
          type="checkbox" 
          onClick={()=> dispatch({type:"TOGGLE"})}
          />
          <label for="terms" >I agree Terms and condition </label>
        </div>
          <button 
          type="submit"
          className="btn mt-2"
          disabled={!state.terms}
          >Submit</button>
        </div>
      </form>

    </div>
  );
};

export default Form;
