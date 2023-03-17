import { useAppContext } from "../context/appContext";
import React from 'react'
import ReactDOM from 'react-dom'
const Alert = () => {
  const{alertType,alertText}=useAppContext();
  return <div className={`alert alert-${alertType}`}>{alertText}</div>
};
export default Alert;
