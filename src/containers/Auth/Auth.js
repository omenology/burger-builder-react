import React, { useState, Fragment } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { useForm } from "react-hook-form";
import TextField from "@material-ui/core/TextField";

import * as action from "../../store/action/index";
//import Input from "../../components/UI/input/Input";
import Button from "../../components/UI/Button/Button";
import Spinner from "../../components/UI/Spinner/Spinner";
import css from "./Auth.module.css";

const Auth = (props) => {
  const [signup, setSignup] = useState(false);
  const { register, handleSubmit, errors } = useForm();

  const onAuth = (data) => {
    console.log(data);
    props.auth(data.email, data.password, signup);
  };

  const switchTypeAuth = () => {
    setSignup((prevState) => !prevState);
  };

  console.log("render auth");
  let form = <Spinner />;
  let err = null
  let errP = null
  if (errors.email && errors.email.type === "required" && true) {
    err = { error: true, helperText: "email required" }
  } else if (errors.email && errors.email.type === "pattern" && true) {
    err = { error: true, helperText: "email not valid" }
  }

  if (errors.password && errors.password.type === "required" && true) {
    errP = { error: true, helperText: "required" }
  } else if (errors.password && errors.password.type === "minLength" && true) {
    errP = { error: true, helperText: "password min length 5" }
  }

  if (!props.loading) {
    form = (
      <Fragment>
        <form onSubmit={handleSubmit(onAuth)}>
          <TextField
            label="Email"
            variant="outlined"
            fullWidth name="email"
            inputRef={register({ required: true, pattern: /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/ })}
            margin="dense" {...err}
          />
          <TextField label="Password" variant="outlined" fullWidth type="password" name="password" inputRef={register({ required: true, minLength: 5 })} margin="dense" {...errP} />
          {/* <input
            type="password"
            name="password"
            ref={register({ required: true, minLength: 5 })}
            placeholder="Password"
            style={{ width: "100%", margin: "5px", boxSizing: "border-box" }}
          ></input>
          {errors.password && errors.password.type === "required" && "password required"}
          {errors.password && errors.password.type === "minLength" && "password minlengt"} */}
          <Button btnType="Success" type="submit">
            {signup ? "Signup" : "Login"}
          </Button>
        </form>
        <Button btnType="Success" clicked={switchTypeAuth}>
          Switch to {signup ? "Login" : "Signup"}
        </Button>
      </Fragment>
    );
  }
  let isAuth = null;
  if (props.isAuth && props.building) {
    isAuth = <Redirect to="/checkout" />;
  } else if (props.isAuth) {
    isAuth = <Redirect to="/" />;
  }
  return (
    <div className={css.ContactData}>
      {isAuth}
      <h2>Login</h2>
      {props.error ? <p style={{ color: "red" }}>*{props.error.message}</p> : null}
      {form}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    loading: state.auth.loading,
    error: state.auth.error,
    isAuth: state.auth.token != null,
    building: state.burgerBuilder.building,
  };
};

const maptDispatchToProps = (dispatch) => {
  return {
    auth: (email, password, signup) => dispatch(action.auth(email, password, signup)),
  };
};

export default connect(mapStateToProps, maptDispatchToProps)(Auth);
