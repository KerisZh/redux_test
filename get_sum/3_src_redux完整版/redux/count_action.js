import { INCREMENT, DECREMENT } from "./constant";


// 为Count组件生成action对象

export const createIncrementAction = data => ({type: INCREMENT, data: data})
export const createDecrementAction = data => ({type: DECREMENT, data: data})

// function createDecrementAction(data) {
//   return { type: "decrement", data: data };
// }
