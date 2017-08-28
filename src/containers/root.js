/**
 *
 * Created by Administrator on 2017/8/26.
 */
import React from "react";
import {Provider} from "react-redux";
import App from "./app";
import store from "../redux/store";

export class Root extends React.Component{
    render(){
        return(
            <Provider store={store}>
                <App />
            </Provider>
        )
    }
}

export default Root;