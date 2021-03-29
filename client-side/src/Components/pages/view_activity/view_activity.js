import React,{useState,useEffect,useReducer} from "react"
import {changePersonal} from "../../../Redux/actions"
import {DashbdPersonalReducer} from "../../../Redux/Reducers"
// import {mapStateToProps,mapDispatchToProps} from "../../utility/mapRedux"
import { connect } from "react-redux";
import {store} from "../../../App/App"


const ViewActivity=(props)=>{
    // const [state,dispatch]= useReducer(DashbdPersonalReducer,false)
    const [check,setCheck]=useState(false)
    useEffect(()=>{
        console.log("runningv")
    },[])

    return(
        
        <div>ViewActivity</div>
    )
}


export default connect()(ViewActivity)