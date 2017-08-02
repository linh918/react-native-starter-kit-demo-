import * as types from '../constant/actionTypes'
export function changeColor(color){
  console.log("change action"+color)
  return {
    type:types.CHANGE_COLOR,
    color
  };
}



