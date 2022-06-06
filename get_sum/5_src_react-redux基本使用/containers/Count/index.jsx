import CountUI from "../../component/Count";
import {
  createIncrementAction,
  createDecrementAction,
  createIncrementAsyncAction,
} from "../../redux/count_action";
// import store from "../../redux/store";
import { connect } from "react-redux";

// 传递状态
function mapStateToProps(state) {
  return { count: state };
}

//传递操作状态的方法
function mapDispatchToProps(dispatch) {
  return {
    jia: (number) => {
      dispatch(createIncrementAction(number));
    },
    jian: (number) => {
      dispatch(createDecrementAction(number));
    },
    jiaAsync: (number, time) => {
      dispatch(createIncrementAsyncAction(number, time));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CountUI);

// const CountContainer = connect()(CountUI);

// export default CountContainer;
