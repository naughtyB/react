/**
 * Created by Administrator on 2017/8/24.
 */
//reducer的子组件在加载时候调用dispatch不会造成循环加载，只加载一次
import React from "react";
export class NewUsername extends React.Component{
    constructor(props){
        super(props);
        this.handleBlur=this.handleBlur.bind(this);
        this.handleFocus=this.handleFocus.bind(this);
        this.handleDelete=this.handleDelete.bind(this);
        this.handleChangeUsername=this.handleChangeUsername.bind(this);
        this.timer=null;
    }
    handleChangeUsername(e){
        this.props.onChangeUsername(e.target.value)
    }
    handleBlur(){
        //手机号不为空的情况下输错了才会显示提示信息
        //又要解决bug又要这个东西灵活快速，所以延时还是设置少点吧
        //如果你设置的太低，比如0，你那个鼠标抬起时间也不可能达到0，到时blur还是正常执行，你拦也拦不住
        this.timer=setTimeout(()=>{
            //万一我直接跳路由，那不就找不到this.refs["error"]
            if(this.refs["error"]){
                if(this.props.username!="" &&!/^[0-9]{11}$/.test(this.props.username)){
                    this.refs["error"].innerHTML="请输入正确的手机号";
                }
                else{
                    this.refs["error"].innerHTML="";
                }
                this.refs["error"].style.color="red";
            }
        },100)
    }

    handleFocus(){
        this.refs["error"].innerHTML="请输入11位手机号";
        this.refs["error"].style.color="#5f5f5f";
        clearTimeout(this.timer);
    }

    //历史残留问题，click和blur的冲突问题
    handleDelete(){
        this.props.onChangeUsername("");
        setTimeout(()=>{
            this.refs["newUsername"].focus();
        },10);
    }
    //我先来分析下这个bug产生的原因
    //其实这里可以发现，onblur跟onclick的冲突在于，你onclick必须是鼠标在目标上点击，目标上抬起后才起效，接下来很关键，你刚在别的目标点击onclick,那么在你鼠标按下去的那一刻，blur已经发生了，所以当时我们点击将手机号消除，blur事件先发生，导致我们先看到了blur效果，再看到onclick效果，如果你不给onblur时间里添加定时器什么的，那么你的点击事件是绝对不可能可以去控制onblur事件的
    //因此通过给blur事件设置一个全局的定时器很有必要了，通过这样你可以愉快地进行控制，当然，用户也有很恶劣的操作，例如用户，他就干脆按着鼠标不放手了,在本例中，用户在按钮X上按着鼠标不放手，你会看到那几个红字“请输入正确的手机号”，知道用户双手离开鼠标（对了，是在X按钮上），你才能看到你的focus效果
    //在解决本bug的时候同样发现了一些东西，当时我的handleDelete是这样的
    /*handleDelete(){
        this.refs["newUsername"].focus();
        this.props.onDeleteUsername();
    }*/
    //当时的执行顺序是:blur>handleDelete>focus>willUpdate>didUpdate
    //我给this.refs["newUsername"].focus()放到最后面，顺序还是没变
    //即执行顺序仍然是:blur>handleDelete>focus>willUpdate>didUpdate
    //这说明redux的状态更新是异步
    //然后我给了this.refs["newUsername"].focus()设置了个延时定时器，时间为10ms
    //不管放在前面还是后面，最后执行顺序是:blur>handleDelete>willUpdate>didUpdate>focus
    //这说明你可以把redux的状态更新看成是一个延时定时器，时间为0ms
    render(){
        return (
            <div className="app-layout-form-item">
                <div className="app-layout-form-item-content">
                    <label>
                        <i className="fa fa-user" aria-hidden="true"></i>
                        <input name="username" type="text" placeholder="请输入您的手机号" value={this.props.username} onChange={this.handleChangeUsername} onFocus={this.handleFocus} onBlur={this.handleBlur} ref="newUsername"/>
                        <span className="app-layout-form-item-content-outline"></span>
                    </label>
                    <i style={{transform:this.props.username?"scale(1)":"scale(0)"}} className="fa fa-times-circle app-layout-form-item-content-clean" onClick={this.handleDelete}></i>
                </div>
                <p className="app-layout-form-item-error" ref="error"></p>
            </div>
        )
    }
}
export default NewUsername;