/**
 *
 * Created by Administrator on 2017/8/24.
 */
import React from "react";
export class Identify extends React.Component{
    render(){
        return (
            <div className="app-layout-form-item">
                <div id="app-layout-form-item-content-mobile-test" className="app-layout-form-item-content">
                    <label>
                        <i className="fa fa-mobile" aria-hidden="true"></i>
                        <input name="password" type="text" placeholder="请输入验证码"/>
                        <span className="app-layout-form-item-content-outline"></span>
                    </label>
                    <input type="button" value="获取验证码" disabled="disabled"/>
                </div>
                <p className="app-layout-form-item-error"></p>
            </div>
        )
    }
}
export default Identify;
