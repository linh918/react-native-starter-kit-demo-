import * as types from ''
export function ActionIng(){
  return {
    type:types.ACTION_ING
  };
}

export function ActionSuccess(){
  return {
    type:types.ACTION_SUCCESS
  };
}

export function ActionFailure(){
  return {
    type:types.ACTION_FAILURE
  };
}

export function ActionWithMiddleware(){
  return dispatch=>{
  };
}