/**
 *
 * Created by Administrator on 2017/8/24.
 */
import React from "react";


export class Identify extends React.Component{
    constructor(props){
        super(props);
        this.handleSendCode=this.handleSendCode.bind(this);
        this.handleChangeIdentifyCode=this.handleChangeIdentifyCode.bind(this);
        this.handleDeleteIdentifyCode=this.handleDeleteIdentifyCode.bind(this);
    }

    handleChangeIdentifyCode(e){
        this.props.onChangeIdentifyCode(e.target.value)
    }

    //componentWillUpdate的nextProps是即将接收到的props
    //componentDidUpdate的preProps是之前的props，我也真不知道为何这么设定
    //很有意思,disabled取消了点击事件
    componentWillUpdate(nextProps,nextState){
        //如果有倒计时就不可能激活验证码按钮
        if(!nextProps.countdown){
            /^[0-9]{11}$/.test(nextProps.username)?this.refs["identify_button"].removeAttribute("disabled"):this.refs["identify_button"].setAttribute("disabled","disabled");
            this.refs["identify_button"].onclick=this.handleSendCode;
        }
        else{
            this.refs["identify_button"].setAttribute("disabled","disabled");
        }
    }

    handleSendCode(){
        //这里我曾经纠结于用state来管理还是只单纯用变量保存倒计时
        let time=60;
        this.props.onChangeCountdown(time);
        let timer=setInterval(()=>{
            time--;
            this.props.onChangeCountdown(time);
            if(time==0){
                clearInterval(timer);
            }
        },1000)
    }

    handleDeleteIdentifyCode(){
        this.props.onChangeIdentifyCode("");
        this.refs["identify_code"].focus();
    }

    render(){
        //检验手机号码
        return (
            <div className="app-layout-form-item">
                <div id="app-layout-form-item-content-mobile-test" className="app-layout-form-item-content">
                    <label>
                        <i className="fa fa-mobile" aria-hidden="true"></i>
                        <input name="identify_code" type="text" value={this.props.identify_code} onChange={this.handleChangeIdentifyCode} placeholder="请输入验证码" ref="identify_code"/>
                        <span className="app-layout-form-item-content-outline"></span>
                    </label>
                    <i className="fa fa-times-circle app-layout-form-item-content-clean" style={{transform:this.props.identify_code?"scale(1)":"scale(0)"}} onClick={this.handleDeleteIdentifyCode}></i>
                    <input ref="identify_button" type="button" value={this.props.countdown?"请稍候("+this.props.countdown+"s)":"获取验证码"} disabled="disabled"/>
                </div>
                <p className="app-layout-form-item-error"></p>
            </div>
        )
    }
}
export default Identify;
