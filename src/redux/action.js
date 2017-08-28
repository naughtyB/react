/**
 *
 * Created by Administrator on 2017/8/25.
 */
//横向拆分,就等于类别区分
//考虑到bug，用户可以跳到登录界面回到注册界面，输入之前的验证码，输入另外个手机号进行注册，这里要注意
/*const obj={
    register:{
        username:"",
        password:"",
        identify_code:""
    }
};*/

//注册组件
export const CHANGE_REGISTER_USERNAME="CHANGE_REGISTER_USERNAME";
export const CHANGE_REGISTER_PASSWORD="CHANGE_REGISTER_PASSWORD";
export const CHANGE_REGISTER_AGREEMENT="CHANGE_REGISTER_AGREEMENT";
export const INITIAL_REGISTER="INITIAL_REGISTER";
export const CHANGE_REGISTER_COUNTDOWN="CHANGE_REGISTER_COUNTDOWN";
export const CHANGE_REGISTER_IDENTIFY_CODE="CHANGE_REGISTER_IDENTIFY_CODE";



export const doChangeRegisterUsername=(username)=>{
    return {
        type:CHANGE_REGISTER_USERNAME,
        username
    }
};

export const doChangeRegisterPassword=(password)=>{
    return {
        type:CHANGE_REGISTER_PASSWORD,
        password
    }
};


export const doChangeRegisterAgreement=()=>{
    return {
        type:CHANGE_REGISTER_AGREEMENT
    }
};

export const doInitialRegister=()=>{
    return {
        type:INITIAL_REGISTER
    }
};

export const doChangeRegisterCountdown=(countdown)=>{
    return {
        type:CHANGE_REGISTER_COUNTDOWN,
        countdown
    }
};

export const doChangeRegisterIdentifyCode=(identify_code)=>{
    return {
        type:CHANGE_REGISTER_IDENTIFY_CODE,
        identify_code
    }
};


//登录组件

export const CHANGE_LOGIN_USERNAME="CHANGE_LOGIN_USERNAME";
export const CHANGE_LOGIN_PASSWORD="CHANGE_LOGIN_PASSWORD";
export const INITIAL_LOGIN="INITIAL_LOGIN";

export const doChangeLoginUsername=(username)=>{
      return {
          type:CHANGE_LOGIN_USERNAME,
          username
      }
};

export const doChangeLoginPassword=(password)=>{
    return {
        type:CHANGE_LOGIN_PASSWORD,
        password
    }
};

export const doInitialLogin=()=>{
    return {
        type:INITIAL_LOGIN
    }
};



