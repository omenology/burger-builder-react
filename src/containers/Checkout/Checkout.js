import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary.js";
import ContactData from "./ContactData/ContactData.js";

const Checkout = props => {
  const checkoutCancelHandler = () => {
    props.history.goBack();
  };

  const checkoutContinueHandler = () => {
    props.history.replace("/checkout/contact-data");
  };

  let summary = <Redirect to="/" />;
  const purchasedRedirect = props.purchased ? <Redirect to="/" /> : null;
  if (props.bahan.length > 0)
    summary = (
      <div>
        {purchasedRedirect}
        <CheckoutSummary bahan={props.bahan} clickSucess={checkoutContinueHandler} clickCancel={checkoutCancelHandler} />
        <Route path={props.match.path + "/contact-data"} component={ContactData} />
      </div>
    );
  return summary;
};

const mapStateToProps = state => {
  return {
    bahan: state.burgerBuilder.bahan,
    purchased: state.order.purchased
  };
};

export default connect(mapStateToProps)(Checkout);
