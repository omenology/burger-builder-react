import React, { useEffect } from "react";
import { Route, Switch, withRouter, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import * as action from "./store/action/index";

import Layout from "./hoc/Layout/Layout";
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";
import Checkout from "./containers/Checkout/Checkout.js";
import Orders from "./containers/Orders/Orders.js";
import Auth from "./containers/Auth/Auth";
import Logout from "./containers/Auth/Logout/Logout";

const App = props => {
  const { tryAutoLogin } = props
  useEffect(() => {
    tryAutoLogin();
  }, [tryAutoLogin])

  let route = (
    <Switch>
      <Route path="/auth" component={Auth} />
      <Route path="/" exact component={BurgerBuilder} />
      <Redirect to="/" />
    </Switch>
  );
  if (props.isAuth) {
    route = (
      <Switch>
        <Route path="/auth" component={Auth} />
        <Route path="/logout" component={Logout} />
        <Route path="/checkout" component={Checkout} />
        <Route path="/Orders" component={Orders} />
        <Route path="/" exact component={BurgerBuilder} />
        <Redirect to="/" />
      </Switch>
    );
  }
  return (
    <div>
      <Layout>
        <Switch>{route}</Switch>
      </Layout>
    </div>
  );

}

const mapStateTopProps = state => {
  return {
    isAuth: state.auth.token !== null
  };
};

const mapDispatchToProps = dispatch => {
  return {
    tryAutoLogin: () => dispatch(action.checkAuthState())
  };
};

export default withRouter(connect(mapStateTopProps, mapDispatchToProps)(App));
