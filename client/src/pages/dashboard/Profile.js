import React, { useState } from "react";
import Wrapper from "../../assets/wrappers/DashboardFormPage";
import { FormRow, Alert } from "../../components";
import { useAppContext } from "../../context/appContext";
const Profile = () => {
  const {
    user,
    showAlert,
    displayAlert,
    updateUser,
    isLoading,
  } = useAppContext();
  const [name, setName] = useState(user.name);
  const [lastName, setLastName] = useState(user.lastName);
  const [email, setEmail] = useState(user.email);
  const [location, setLocation] = useState(user.location);
  const handleSubmit = (e) => {
    e.preventDefault();
    if(!name || !lastName || ! email || !location){
      displayAlert();
      return;
    }
    updateUser({name,email,location,lastName});
  };
  return (
    <Wrapper>
      <form className="for," onSubmit={handleSubmit}>
        <h3>profile</h3>
        {showAlert && <Alert />}
        <div className="form-center">
          <FormRow
            type="text"
            name="name"
            value={name}
            handleChange={(e)=>setName(e.target.value)}
          />
          <FormRow
            type="lastName"
            name="lastName"
            value={lastName}
            labelText="last name"
            handleChange={(e)=>setLastName(e.target.value)}
          />
          <FormRow
            type="email"
            name="email"
            value={email}
            handleChange={(e)=>setEmail(e.target.value)}
          />
          <FormRow
            type="location"
            name="location"
            value={location}
            handleChange={(e)=>setLocation(e.target.value)}
          />
          <button className="btn btn-block" type="submit" disabled={isLoading}>
            {isLoading?'Please Wait...':'Save Changes'}
          </button>
        </div>
      </form>
    </Wrapper>
  );
};

export default Profile;
