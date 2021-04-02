import React,{useState,useEffect,useReducer} from "react"
import {changePersonal} from "../../../Redux/actions"
import {DashbdPersonalReducer} from "../../../Redux/Reducers"
// import {mapStateToProps,mapDispatchToProps} from "../../utility/mapRedux"
import { connect } from "react-redux";
import {store} from "../../../App/App"
import "./view_activity.css"
import moment from "moment"
import "react-dates/initialize"
import "react-dates/lib/css/_datepicker.css"
import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';

const ViewActivity=(props)=>{ 
    // const [state,dispatch]= useReducer(DashbdPersonalReducer,false)
    const [check,setCheck]=useState(false)
    const [startdate,setStartDate] =useState(moment())
    const [startcalenderfoc,setStartCalenderfoc]=useState(false)
    const [enddate,setEndDate] =useState(moment())
    const [endcalenderfoc,setEndCalenderfoc]=useState(false)
    useEffect(()=>{
        console.log("runningv")
    },[])
    const handleSelect=(ranges)=>{
        console.log(ranges);
        // {
        //   selection: {
        //     startDate: [native Date Object],
        //     endDate: [native Date Object],
        //   }
        // }
      }
      const selectionRange = {
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection',
      }
     const onDateChange=(date)=>{
        if(date){
        // this.setState(()=>({
        //   date
        // }))
        setStartDate(date)
        }
       }

    const onFocusChange=( {focused} )=>{
        // console.log(focused)
           setStartCalenderfoc(focused)
      }
    return(
        <div className="his-container">
            <div className="h-title">
            <i class="fa fa-history" aria-hidden="true"></i>
               <h2>History</h2>
            </div>
            <SingleDatePicker
            date={startdate}
            // isOutsideRange={true}
            onDateChange={(date)=>onDateChange(date)}
            focused={startcalenderfoc}
            onFocusChange={({focused})=>onFocusChange({focused})}
            numberOfMonths={1}
            // renderMonthElement={this.renderMonthElement}
            displayFormat="DD/MM/YYYY"
        />
   <SingleDatePicker
            date={enddate}
            // isOutsideRange={()=>false}
            onDateChange={(date)=>onDateChange(date)}
            focused={endcalenderfoc}
            onFocusChange={({focused})=>setEndCalenderfoc(focused)}
            numberOfMonths={1}
            // renderMonthElement={this.renderMonthElement}
            displayFormat="DD/MM/YYYY"
        />
        <h1>!On Development</h1>
        </div>
    )
}


export default connect()(ViewActivity)