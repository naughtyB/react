/**
 *
 * Created by Administrator on 2017/8/26.
 */
import {CHANGE_REGISTER_USERNAME,CHANGE_REGISTER_PASSWORD,CHANGE_REGISTER_AGREEMENT,CHANGE_REGISTER_COUNTDOWN,CHANGE_REGISTER_IDENTIFY_CODE,INITIAL_REGISTER} from "./action";
import {CHANGE_LOGIN_USERNAME,CHANGE_LOGIN_PASSWORD,INITIAL_LOGIN} from"./action"
import {combineReducers} from "redux";

//注册组件
const initialRegister={
    username:"",
    password:"",
    //这是用户输入的验证码
    identify_code:"",
    countdown:0,
    agreement:false
};
const register=(state=initialRegister,action)=>{
    switch(action.type){
        case CHANGE_REGISTER_USERNAME:
            return {...state,username:action.username.replace(/[^0-9]/g,"")};
        case CHANGE_REGISTER_PASSWORD:
            return {...state,password:action.password};
        case CHANGE_REGISTER_AGREEMENT:
            return {...state,agreement:!state.agreement};
        case INITIAL_REGISTER:
            //不更新验证码倒计时，防止用户疯狂刷验证码
            return {...initialRegister,countdown:state.countdown};
        case CHANGE_REGISTER_COUNTDOWN:
            return {...state,countdown:action.countdown};
        case CHANGE_REGISTER_IDENTIFY_CODE:
            return {...state,identify_code:action.identify_code.replace(/[^0-9]/g,"").replace(/(\d{0,6})\d{0,}/,function($0,$1){return $1})};
        default :
            return state;
    }
};

//登录组件
const initialLogin={
    username:"",
    password:""
};

const login=(state=initialLogin,action)=>{
    switch(action.type){
        case CHANGE_LOGIN_USERNAME:
            return {...state,username:action.username.replace(/[^0-9]/g,"")};
        case CHANGE_LOGIN_PASSWORD:
            return {...state,password:action.password};
        case INITIAL_LOGIN:
            return {...initialLogin,"username":""};
        default:
            return state;
    }
};



//reducer
export const reducer=combineReducers({
    register,
    login
});

export default reducer;