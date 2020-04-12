import React, { useState } from "react";
import axios from "../../../axios-order.js";
import { connect } from "react-redux";
import { purchaseBurgerStart } from "../../../store/action/index";
import { useForm } from "react-hook-form";
import TextField from "@material-ui/core/TextField";

import Spinner from "../../../components/UI/Spinner/Spinner.js";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import useErrorHandlerForm from '../../../hooks/errorHandlerForm'

import css from "./ContactData.module.css";
import withErrorHandler from "../../../hoc/withErrorHandler/withErrorHandler.js";

const ContactData = (props) => {
  console.log("render contact data")

  const { register, handleSubmit, errors } = useForm();
  const [deleveryMethod, setDeleveryMethod] = useState("cheapest");

  const errorName = useErrorHandlerForm(errors, "name", [{ type: "required", msg: "Name Required" }, { type: "minLength", msg: "Name Required at least 5 char" }])

  const continuContactDataHandler = async (data) => {
    const order = {
      orderData: {
        ...data,
        deleveryMethod: deleveryMethod
      },
      ingredients: props.bahan,
      totalPrice: props.harga,
      userId: props.userId
    };

    props.purchaseBurger(order, props.token);
  };

  const handleChange = (event) => {
    setDeleveryMethod(event.target.value)

  };

  let form = <Spinner />;
  if (!props.loading)
    form = (
      <form onSubmit={handleSubmit(continuContactDataHandler)}>
        <TextField
          label="Name"
          name="name"
          inputRef={register({ required: true, minLength: 5 })}
          fullWidth
          margin="dense"
          variant="outlined"
          {...errorName}
        />
        <TextField label="Email" name="email" inputRef={register({ required: true })} fullWidth margin="dense" variant="outlined" />
        <TextField label="Street" name="street" inputRef={register({ required: true })} fullWidth margin="dense" variant="outlined" />
        <TextField label="Zipcode" name="zipcode" type="number" inputRef={register({ required: true })} fullWidth margin="dense" variant="outlined" />
        <FormControl fullWidth variant="outlined" margin="dense">
          <InputLabel id="label-select">Delevery Methode</InputLabel>
          <Select label="Delevery Methode" labelId="label-select" value={deleveryMethod} onChange={handleChange} margin="dense" >
            <MenuItem value="cheapest">Cheapest</MenuItem>
            <MenuItem value="fastest">Fastest</MenuItem>
          </Select>
        </FormControl>

        <button type="submit">Tes</button>
      </form >
    );

  return (
    <div className={css.ContactData}>
      <h2>Enter Your Contact Data</h2>
      {form}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    bahan: state.burgerBuilder.bahan,
    harga: state.burgerBuilder.totalPrice,
    loading: state.order.loading,
    token: state.auth.token,
    userId: state.auth.id,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    purchaseBurger: (orderData, token) => dispatch(purchaseBurgerStart(orderData, token)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(ContactData, axios));
