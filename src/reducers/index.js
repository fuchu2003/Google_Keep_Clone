import { combineReducers } from "redux";
import listView from "./listView";
import lightDark from "./lightDark";
import barOpen from "./barOpen";

const rootReduce = combineReducers({
  listView,
  lightDark,
  barOpen,
});

export default rootReduce;
