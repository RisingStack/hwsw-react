import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { getExpense } from "../actions/expenseActions";
import Expense from "../components/Expense";

function mapStateToProps(state) {
  return {
    expense: state.expense
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getExpense: id => dispatch(getExpense(id))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Expense));
