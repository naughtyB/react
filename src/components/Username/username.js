/**
 * Created by Administrator on 2017/8/24.
 */
import React from "react";
export class Username extends React.Component{
    constructor(props){
        super(props);
        this.handleUsernameChange=this.handleUsernameChange.bind(this);
        this.handleDeleteUsername=this.handleDeleteUsername.bind(this);
    }

    handleUsernameChange(e){
        this.props.onChangeUsername(e.target.value);
    }

    handleDeleteUsername(){
        this.props.onChangeUsername("");
        this.refs["username"].focus();
    }

    render(){
        return (
            <div className="app-layout-form-item">
                <div className="app-layout-form-item-content">
                    <label>
                        <i className="fa fa-user" aria-hidden="true"></i>
                        <input name="username" type="text" placeholder="请输入手机号" value={this.props.username} onChange={this.handleUsernameChange} ref="username"/>
                        <span className="app-layout-form-item-content-outline"></span>
                    </label>
                    <i style={{transform:this.props.username?"scale(1)":"scale(0)"}} className="fa fa-times-circle app-layout-form-item-content-clean" onClick={this.handleDeleteUsername}></i>
                </div>
                <p className="app-layout-form-item-error" ref="error"></p>
            </div>
        )
    }
}
export default Username;