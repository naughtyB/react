/**
 * Created by Administrator on 2017/8/23.
 */
import React from "react";
import {BrowserRouter as Router,Link,Route,Redirect} from "react-router-dom";
import Login from "./Login/index";
import Register from "./Register/index"
import IsLogin from"./IsLogin/index";

export class AppRouter extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <Router>
                <div className="app-layout-content">
                    <Route exact path="/react/" component={IsLogin}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/register" component={Register}/>
                </div>
            </Router>
        )
    }
}
export default AppRouter;