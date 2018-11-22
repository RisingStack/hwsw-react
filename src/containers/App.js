import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import ExpensesPage from "./ExpensesPage";
import ExpensePage from "./ExpensePage";

export default function App() {
  return (
    <Switch>
      <Route path="/expenses/:id" component={ExpensePage} />
      <Route path="/expenses" component={ExpensesPage} />
      <Redirect to="/expenses" />
    </Switch>
  );
}
