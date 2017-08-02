/**
 * Example action
 */

import * as types from "../constant/actionTypes";
import NetWorkUtils from "../../fw/utils/NetworkUtils";

export function fetching() {
  console.log("fetching action");
  return {
    type: types.FETCHING
  };
}

export function fectchSuccess(data) {
  console.log("fetch success action");
  return {
    type: types.FETCH_SUCCESS,
    data
  };
}

export function fetchFailure(error) {
  console.log("fetch failure action" + error);
  return {
    type: types.FETCH_FAILURE
  };
}

export function fetch(url) {
  return dispatch => {
    dispatch(fetching());
    NetWorkUtils.getDataFromApi(url,(data)=>dispatch(fectchSuccess(data)),(error)=>dispatch(fetchFailure(error)))
    
    
  };
}
