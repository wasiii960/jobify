import { useState, useEffect } from "react";
import { Logo, FormRow, Alert } from "../components";
import Wrapper from "../assets/wrappers/RegisterPage";
import { useAppContext } from "../context/appContext";
const initialState = {
  name: "",
  email: "",
  password: "",
  isMember: false,
};
const Register = () => {
  const [value, setValue] = useState(initialState);
  const {isLoading,showAlert,displayAlert} = useAppContext();
  const toggleMember = () => {
    setValue({ ...value, isMember: !value.isMember });
  };
  const handleChange = (e) => {
    setValue({...value,[e.target.name]:e.target.value})
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const{email,password,name,isMember} = value;
    if(!email || !password ||(!isMember && !name)){
      displayAlert();
      return;
    }
    console.log(e);
  };
  return (
    <Wrapper className="full-page">
      <form className="form" onSubmit={onSubmit}>
        <Logo />
        <h3>{value.isMember ? "login" : "register"}</h3>
        {showAlert && <Alert />}
        {!value.isMember && (
          <FormRow
            type="text"
            name="name"
            value={value.name}
            handleChange={handleChange}
          />
        )}
        <FormRow
          type="email"
          name="email"
          value={value.email}
          handleChange={handleChange}
        />
        <FormRow
          type="password"
          name="password"
          value={value.password}
          handleChange={handleChange}
        />
        <button type="submit" className="btn btn-block">
          submit
        </button>
        <p>
          {value.isMember?'Not a member yet':'Already a member?'}
          <button type="button" className="member-btn" onClick={toggleMember}>
            {value.isMember ? "Register" : "Login"}
          </button>
        </p>
      </form>
    </Wrapper>
  );
};
export default Register;
