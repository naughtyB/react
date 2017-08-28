/**
 * Created by Administrator on 2017/8/24.
 */
import React from "react";
export class Password extends React.Component{
    constructor(props){
        super(props);
        this.handleChangePassword=this.handleChangePassword.bind(this);
        this.handleDeletePassword=this.handleDeletePassword.bind(this);
    }

    handleChangePassword(e){
        this.props.onChangePassword(e.target.value);
    }

    handleDeletePassword(){
        this.props.onChangePassword("");
        this.refs["password"].focus();
    }

    render(){
        return (
            <div className="app-layout-form-item">
                <div className="app-layout-form-item-content">
                    <label>
                        <i className="fa fa-lock" aria-hidden="true"></i>
                        <input name="password" type="password" placeholder="请输入密码" value={this.props.password} onChange={this.handleChangePassword} ref="password"/>
                        <span className="app-layout-form-item-content-outline"></span>
                    </label>
                    <i onClick={this.handleDeletePassword} style={{transform:this.props.password?"scale(1)":"scale(0)"}} className="fa fa-times-circle app-layout-form-item-content-clean"></i>
                </div>
                <p className="app-layout-form-item-error" ref="error"></p>
            </div>
        )
    }
}
export default Password;