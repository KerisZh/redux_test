import CountUI from "../../component/Count";
import {
  createIncrementAction,
  createDecrementAction,
  createIncrementAsyncAction,
} from "../../redux/count_action";
// import store from "../../redux/store";
import { connect } from "react-redux";

// 传递状态

//传递操作状态的方法

export default connect(
  (state) => ({ count: state }),
  (dispatch) => ({
    jia: (number) => {
      dispatch(createIncrementAction(number));
    },
    jian: (number) => {
      dispatch(createDecrementAction(number));
    },
    jiaAsync: (number, time) => {
      dispatch(createIncrementAsyncAction(number, time));
    },
  })
)(CountUI);

// const CountContainer = connect()(CountUI);

// export default CountContainer;
