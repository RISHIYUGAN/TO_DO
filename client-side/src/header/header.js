import React from "react"
import "./header.css"
import logo from "../images/todo_logo.png"
import pencil from "../images/pencil.png"

export const Header=()=>{
    return(
        <div className="header-container">
          <img src={logo} className="todo-logo"/>
          <span><h1 className="header-title"><span className="To">To</span><span className="Do">Do</span></h1></span>
          <img src={pencil} className="pencil"/>
          <div style={{float:"right"}}></div>
        </div>
    )
}