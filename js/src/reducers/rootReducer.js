import { combineReducers } from "redux";
import nav from "../reducers/navigatorReducer";
import fetcher from  '../reducers/fetchReducer'
import changer from  '../reducers/changeColorReducer'

export default combineReducers({
  nav,
  fetcher,
  changer,

});
