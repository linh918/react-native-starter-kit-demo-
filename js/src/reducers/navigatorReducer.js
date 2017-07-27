import { NavigationActions, StackNavigator } from "react-navigation";
import Navigator from "../config/routes";

const intialState = Navigator.router.getStateForAction(
  NavigationActions.init()
);

export default (state = intialState, action) => {
  const nextState = Navigator.router.getStateForAction(action, state);
  return nextState || state;
};
