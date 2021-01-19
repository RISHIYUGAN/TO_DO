import React,{Fragment} from "react"
import "./dashboard.css"
import axios from "axios"

export const Dashboard=()=>{
   const submitting=(e)=>{
       e.preventDefault();
     console.log(e.target.test.value);
     const value=e.target.test.value
     axios.post('http://localhost:3000/todo-list',{todo:value})
     .then((res)=>{
       console.log("response:",res.data)
     })
     .catch((error)=>{
       console.log(error) 
     })
   }
    return(
      <div className="Parent-Div">
        <div className="Dashboard-container">
            <div className="titleDiv">
            <h2 className="D-title">Today's Works
            <div style={{display:"flex",padding:"0px 8px 0px 8px"}}>
            <div style={{borderRadius:"10px",marginRight:"3px",width:"100%",height:"5px",backgroundColor:"red"}}></div>
            <div style={{borderRadius:"10px",marginRight:"2px",width:"50%",height:"5px",backgroundColor:"red"}}></div>
            <div style={{borderRadius:"10px",marginRight:"1px",width:"15%",height:"5px",backgroundColor:"red"}}></div>
            </div>
            </h2>
            </div>
            <div className="AddButtonDiv">
            <button className="AddWorkButton" onClick={()=>{
               var container=document.querySelector(".inputContainer")
               container.style.top="0px"
            }}>+Add Works</button>
            </div>
            
            <form onSubmit={(e)=>{submitting(e)}}>
            <div className="inputContainer">
            <div className="exitDiv">
        <div className="exit" onClick={()=>{
          var container=document.querySelector(".inputContainer")
          container.style.top="-200px"
        }}>
        <div className="ediv_1"></div>
        <div className="ediv_2"></div>
        </div>
        </div>
        <div className="input-wrapper">
              <div className="inputDiv" onFocus={()=>{
                var inputDiv=document.querySelector(".inputDiv")
                inputDiv.style.boxShadow="0 0 15px rgba(0, 0, 0, 0.513)"
              }} onBlur={()=>{
                var inputDiv=document.querySelector(".inputDiv")
                inputDiv.style.boxShadow="none"
              }}>
              <i class="fa fa-tasks fa-lg"></i>
                <input name="test" className="input" type="text" placeholder="Enter work" />
                </div>
                <button className="Add-Button">Add +</button>
                </div>
                </div>
            </form>
            
        </div>
        </div>
    )
}