/**
 * Created by Administrator on 2017/8/23.
 */
import React from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import Username from "../../components/Username/username";
import Password from "../../components/Password/password";
import {doChangeLoginUsername,doChangeLoginPassword,doInitialLogin} from "../../redux/action"
export class Login extends React.Component{
    constructor(props){
        super(props)
    }

    componentWillMount(){
        this.props.onInitialLogin();
    }

    render(){
        return (
            <div className="app-layout-login">
                <form className="app-layout-form">
                    <h2 className="app-layout-form-title">登录</h2>
                    <Username username={this.props.username} onChangeUsername={this.props.onChangeUsername}/>
                    <Password password={this.props.password} onChangePassword={this.props.onChangePassword}/>
                    <p className="app-layout-login-form-supply">
                        <Link to="password-reset" className="app-layout-login-form-supply-forget-password">忘记密码</Link>
                    </p>
                    <input className="app-layout-login-form-submit" type="button" value="登录" />
                    <p className="app-layout-login-form-supply">
                        <Link to="/register" className="app-layout-login-form-supply-register">没有账号，立即注册</Link>
                    </p>
                </form>
            </div>
        )
    }
}

const mapStateToProps=(state)=>{
    return {
        username:state.login.username,
        password:state.login.password
    }
};

const mapDispatchToProps=(dispatch)=>{
    return {
        onChangeUsername:(username)=>dispatch(doChangeLoginUsername(username)),
        onChangePassword:(password)=>dispatch(doChangeLoginPassword(password)),
        onInitialLogin:()=>dispatch(doInitialLogin())
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(Login);