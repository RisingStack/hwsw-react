import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import ExpensesPage from "./ExpensesPage";
import ExpensePage from "./ExpensePage";

function App({ isLoading }) {
  return (
    <div>
      {isLoading && <div>Loading!!!</div>}
      <Switch>
        <Route path="/expenses/:id" component={ExpensePage} />
        <Route path="/expenses" component={ExpensesPage} />
        <Redirect to="/expenses" />
      </Switch>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    isLoading: state.isLoading
  };
}

export default connect(mapStateToProps)(App);
