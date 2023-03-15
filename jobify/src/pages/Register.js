import { useState, useEffect } from "react";
import { Logo, FormRow, Alert } from "../components";
import Wrapper from "../assets/wrappers/RegisterPage";
const initialState = {
  name: "",
  email: "",
  password: "",
  isMember: true,
  showAlert: true,
};
const Register = () => {
  const [value, setValue] = useState(initialState);
  const toggleMember = () => {
    setValue({ ...value, isMember: !value.isMember });
  };
  const handleChange = (e) => {
    console.log(e.targe);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(e);
  };
  return (
    <Wrapper className="full-page">
      <form className="form" onSubmit={onSubmit}>
        <Logo />
        <h3>{value.isMember ? "login" : "register"}</h3>
        {value.showAlert && <Alert />}
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
