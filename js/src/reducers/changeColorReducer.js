import * as types from '../constant/actionTypes'

const initialState={
  color:'red'
}

export default function changer(state=initialState,action={}){
  switch(action.type){
    case types.CHANGE_COLOR:
      return{ 
        ...state,
        color:action.color
      };

  
    default:return state;


  }
}