/**
 * Created by Administrator on 2017/8/26.
 */
import React from "react"
import AppRouter from "../routes/index";
export class App extends React.Component{
    render(){
        return (
            <div className="app-layout">
                <header className="app-layout-header">
                    <img className="app-layout-header-logo" src="src/img/logo.png" alt="" />
                    <span>Happy People</span>
                </header>
                <AppRouter />
            </div>
        )
    }
}
export default App;