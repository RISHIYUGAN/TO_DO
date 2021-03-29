import React, { useState, useEffect } from "react";
import "./Header.css";
import pencil from "../../Assets/images/pencil.png";
import { NavLink } from "react-router-dom";
import {connect} from "react-redux"
import { AuthChange,Authfalse,changePersonal } from "../../Redux/actions"

const Header = (props) => {
  const [dashboardCnt, setDashboardCnt] = useState(false);
  const [ActivityCnt, setActivityCnt] = useState(false);
  const [i, setI] = useState(0);
  useEffect(() => {
    console.log("running");
    var active = document.getElementsByClassName("navActive")[0].parentElement;
    active.style.background = "linear-gradient(90deg,rgba(4, 216, 253, 0.466),rgb(68, 68, 248))";
  }, []);
  const personal = () => {
    if(!props.personal){
      props.changePersonal()
    }
  };
  const profession=()=>{
    if(props.personal){
      props.changePersonal()
    }
  }
  return (
    <div className="Sidebar">
      {console.log("act",ActivityCnt)}
      <div className="Title">
        <h1>Todo</h1>
        <img src={pencil} className="pencil" />
      </div>
      <div className="NavContainer">
        <div className="eachNav">
          <div className="iconDiv">
            <div className="sideIcon">
              <i class="fas fa-tasks"></i>
            </div>
            <text id="Dashboard" className="sidebarText">
              <NavLink
                to="Dashboard"
                className="navClass"
                activeClassName="navActive"
              >
                Dashboard
              </NavLink>
              <i
                class="fas fa-caret-down"
                onClick={(e) => {
                  if (dashboardCnt) {
                    console.log("entering")
                    setDashboardCnt(false);
                    e.target.style.transform = "rotate(0deg)";
                  } else {
                    console.log("entering")
                    setDashboardCnt(true);
                    e.target.style.transform = "rotate(180deg)";
                  }
                }}
              ></i>
            </text>
          </div>
          {dashboardCnt && (
            <div className="dropDown">
              {props.personal? <text onClick={()=>{
              personal()
              }} className="highlight">Personal</text>:
               <text onClick={()=>{
                personal()
                }} >Personal</text>}
             
              <br />
              <br />
              {!props.personal?
              <text onClick={()=>{
                profession()
              }} className="highlight">Profession</text>:<text onClick={()=>{
                profession()
              }}>Profession</text>}
            </div>
          )}
        </div>
       {console.log(dashboardCnt)}
        <div className="eachNav">
          <div className="iconDiv">
            <div className="sideIcon">
              <i class="fa fa-history" aria-hidden="true"></i>
            </div>
            <text id="View_Activity" className="sidebarText">
              <NavLink
                to="/View_Activity"
                className="navClass"
                activeClassName="navActive"
              >
                View Activity
              </NavLink>
              <i
                class="fas fa-caret-down"
                onClick={(e) => {
                  if (ActivityCnt) {
                    setActivityCnt(false);
                    e.target.style.transform = "rotate(0deg)";
                  } else {
                    setActivityCnt(true);
                    e.target.style.transform = "rotate(180deg)";
                  }
                }}
              ></i>
            </text>
            <div></div>
          </div>
          {ActivityCnt && (
            <div className="dropDown">
              
              <text>Personal</text>
              <br />
              <br />
              <text>Profession</text>
            </div>
          )}
        </div>
        <div className="eachNav">
          <div className="iconDiv">
            <div className="sideIcon">
              <i class="fa fa-user-circle" aria-hidden="true"></i>
            </div>
            <text className="sidebarText"> <NavLink
                to="Profile"
                className="navClass"
                activeClassName="navActive"
              >Profile</NavLink></text>
            <div></div>
          </div>
        </div>
        <div className="eachNav">
          <div className="iconDiv">
            <div className="sideIcon">
              <i class="fa fa-power-off" aria-hidden="true"></i>
            </div>
            <text className="sidebarText">Logout</text>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};
 const mapStateToProps = (state) => ({
  isAuthenticated: state.Auth,
  personal: state.Dasbd,
});

 const mapDispatchToProps=(dispatch)=>({
  AuthChange:()=>dispatch(AuthChange()),
  Authfalse:()=>dispatch(Authfalse()),
  changePersonal:()=>dispatch(changePersonal())
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);
