import React, {useReducer } from "react";
import { fetchAPI, submitAPI } from "../fackeAPI";
import {useNavigate} from 'react-router-dom';

const updateTimes = (state, action) => {
  console.log(action);
  return {
    availableTimes: fetchAPI(action.date)};
}

const initializeTimes = () =>{
  return {
    availableTimes: fetchAPI(new Date()),
  }
}

function Main({children}){

  const [state, dispatch] = useReducer(updateTimes, new Date(), initializeTimes);
  const navigate = useNavigate();

  const submitForm = (formData)=>{
    if(submitAPI(formData)){
      navigate('/confirmedBooking')
    }
  }

  const newElements = React.Children.map(children, (child)=>{
    return React.cloneElement(child, {availableTimes: state.availableTimes, dispatch, submitForm});
  })

  return (
  <main>
    {newElements}
  </main>
  )
}

export default Main;