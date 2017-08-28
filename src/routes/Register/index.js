/**
 * Created by Administrator on 2017/8/23.
 */
import React from "react";
import ReactDom from "react-dom";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import NewUsername from "../../components/NewUsername/newUsername";
import NewPassword from "../../components/NewPassword/newPassword";
import Identify from "../../components/Identify/identify";
import {doChangeRegisterPassword,doChangeRegisterUsername,doChangeRegisterAgreement,doInitialRegister,doChangeRegisterCountdown,doChangeRegisterIdentifyCode} from "../../redux/action"



export class Register extends React.Component{
    constructor(props){
        super(props);
        this.handleRegisterSubmit=this.handleRegisterSubmit.bind(this);
    }

    componentWillMount(){
        this.props.onInitialRegister();
    }

    componentDidUpdate(){
        /^[0-9]{11}$/.test(this.props.username) && /^[A-Z]\S{6,15}$/.test(this.props.password) && this.props.agreement?this.refs["submit_register"].removeAttribute("disabled"):this.refs["submit_register"].setAttribute("disabled","disabled");
        this.refs["submit_register"].onclick=this.handleRegisterSubmit;
    }
    //需要个后台,暂时不做，思路:再设置一个state来保存验证码，保存的验证码格式应该为目标手机号+用户所得到的验证码，防止用户通过bug来破解
    //或者我传个验证码和用户名给后台去验证，毕竟获取验证码的时候后台会进行记录
    handleRegisterSubmit(){

    }


    render(){
        return (
            <div className="app-layout-register">
                <form className="app-layout-form">
                    <h2 className="app-layout-form-title">注册</h2>
                    <NewUsername username={this.props.username} onChangeUsername={this.props.onChangeUsername}/>
                    <NewPassword password={this.props.password} onChangePassword={this.props.onChangePassword}/>
                    <Identify username={this.props.username} identify_code={this.props.identify_code} countdown={this.props.countdown} onChangeIdentifyCode={this.props.onChangeIdentifyCode} onChangeCountdown={this.props.onChangeCountdown}/>
                    <input className="app-layout-register-form-submit" disabled ref="submit_register" type="button" value="提交" />
                    <p className="app-layout-register-form-supply">
                        <label>
                            <input type="checkbox" checked={this.props.agreement} onChange={this.props.onChangeAgreement}/>同意<a href="#" className="app-layout-register-form-supply-agreement">&lt;用户协议条款&gt;</a>
                        </label>
                        <span>已有账号,<Link to="/login" className="app-layout-register-form-supply-login">请登录</Link></span>
                    </p>
                </form>
            </div>
        )
    }
}


const mapStateToProps=(state)=>{
    return {
        username:state.register.username,
        password:state.register.password,
        identify_code:state.register.identify_code,
        agreement:state.register.agreement,
        countdown:state.register.countdown
    }
};


const mapDispatchToProps=(dispatch)=>{
    return {
        onChangeUsername:(username)=>dispatch(doChangeRegisterUsername(username)),
        onChangePassword:(password)=>dispatch(doChangeRegisterPassword(password)),
        onChangeAgreement:()=>dispatch(doChangeRegisterAgreement()),
        onInitialRegister:()=>dispatch(doInitialRegister()),
        onChangeIdentifyCode:(identify_code)=>dispatch(doChangeRegisterIdentifyCode(identify_code)),
        onChangeCountdown:(countdown)=>dispatch(doChangeRegisterCountdown(countdown))
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(Register);