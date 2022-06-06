import { INCREMENT, DECREMENT } from "./constant";
// import store from "./store";


// 为Count组件生成action对象

// 同步action action的值为对象
export const createIncrementAction = data => ({type: INCREMENT, data: data})
export const createDecrementAction = data => ({type: DECREMENT, data: data})

// 异步action action的值为函数
// 异步action中一般会调用同步action
export const createIncrementAsyncAction = (data, time) => {
    return (dispatch)=>{
        setTimeout(()=>{
            dispatch(createIncrementAction(data))
        }, time)
    }
}


// function createDecrementAction(data) {
//   return { type: "decrement", data: data };
// }
