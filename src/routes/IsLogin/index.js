/**
 * Created by Administrator on 2017/8/23.
 */
import React from "react";
import {Redirect} from "react-router-dom"
export class IsLogin extends React.Component{
    render(){
        return (
            <Redirect from="/react/" to="/login"/>
        )
    }
}
export default IsLogin;