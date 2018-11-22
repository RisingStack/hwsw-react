import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Expense from "../components/Expense";

function mapStateToProps(state) {
  return {
    expense: state.expense
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getExpense: id => dispatch({ id, type: "GET_EXPENSE" })
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Expense));
