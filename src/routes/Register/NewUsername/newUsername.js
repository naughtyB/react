/**
 * Created by Administrator on 2017/8/24.
 */
import React from "react";
export class NewUsername extends React.Component{
    render(){
        return (
            <div className="app-layout-form-item">
                <div className="app-layout-form-item-content">
                    <label>
                        <i className="fa fa-user" aria-hidden="true"></i>
                        <input name="username" type="text" placeholder="请输入您的手机号"/>
                        <span className="app-layout-form-item-content-outline"></span>
                    </label>
                </div>
                <p className="app-layout-form-item-error"></p>
            </div>
        )
    }
}
export default NewUsername;