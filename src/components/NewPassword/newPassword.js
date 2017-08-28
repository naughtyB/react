/**
 * Created by Administrator on 2017/8/24.
 */
import React from "react";
export class NewPassword extends React.Component{
    constructor(props){
        super(props);
        this.handleBlur=this.handleBlur.bind(this);
        this.handleFocus=this.handleFocus.bind(this);
        this.handleDelete=this.handleDelete.bind(this);
        this.handleChangePassword=this.handleChangePassword.bind(this);
    }

    handleChangePassword(e){
        this.props.onChangePassword(e.target.value)
    }

    handleBlur(){
        this.timer=setTimeout(()=>{
            if(this.refs["error"]){
                if(/\s/.test(this.props.password)){
                    this.refs["error"].innerHTML="密码不能包含空格"
                }
                else if(this.props.password!="" && !/^[A-Z]\S{6,15}$/.test(this.props.password)){
                    this.refs["error"].innerHTML="密码格式应为大写字母开头且长度不低于7位"
                }
                else{
                    this.refs["error"].innerHTML="";
                }
                this.refs["error"].style.color="red";
            }
        },100)
    }

    handleFocus(){
        this.refs["error"].innerHTML="7-15个字符,大写字母开头,字母区分大小写";
        this.refs["error"].style.color="#5f5f5f";
        clearTimeout(this.timer);
    }
    handleDelete(){
        //这个地方加不加定时器都可以，但是如果以后focus进行扩展了，跟state联系起来了，就很有必要了
        //因为你加个定时器后会等状态更新完再执行你的操作
        setTimeout(()=>{
            this.refs["newPassword"].focus();
        },10);
        this.props.onChangePassword("");
    }

    render(){
        return (
            <div className="app-layout-form-item">
                <div className="app-layout-form-item-content">
                    <label>
                        <i className="fa fa-lock" aria-hidden="true"></i>
                        <input name="password" type="password" placeholder="请输入您的密码" value={this.props.password} onChange={this.handleChangePassword} onBlur={this.handleBlur} ref="newPassword" onFocus={this.handleFocus}/>
                        <span className="app-layout-form-item-content-outline"></span>
                    </label>
                    <i style={{transform:this.props.password?"scale(1)":"scale(0)"}} className="fa fa-times-circle app-layout-form-item-content-clean" onClick={this.handleDelete}></i>
                </div>
                <p className="app-layout-form-item-error" ref="error"></p>
            </div>
        )
    }
}
export default NewPassword;