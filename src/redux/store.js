/**
 *
 * Created by Administrator on 2017/8/26.
 */
import {createStore} from "redux";
import reducer from "./reducer";

export const store=createStore(reducer);

export default store;