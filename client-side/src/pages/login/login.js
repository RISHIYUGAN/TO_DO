import React,{useState} from "react"
import "./login.css"
import axios from "axios" 
import login_image from "../../images/login-image.jpg"
export const Login=()=>{
    const [signup, setSignup] = useState(true);
    const [signupDetails,setSignupDetails]=useState({
        name:"",
        email:"",
        password:""
      })
      const [loginDetails,setLoginDetails]=useState({
        email:"",
        password:""
      })
      const LoginbuttonDisable=()=>{
        if(loginDetails.email&&loginDetails.password){
          var loginButton=document.querySelector("#loginButton")
          loginButton.disabled=false
         }
         else{
           var loginButton=document.querySelector("#loginButton")
           loginButton.disabled=true
         }
      }
      const SignupbuttonDisable=()=>{
        console.log("running")
        if(signupDetails.name&&signupDetails.email&&signupDetails.password){
         var submitButton=document.querySelector("#submitButton")
         submitButton.disabled=false
        }
        else{
          var submitButton=document.querySelector("#submitButton")
          submitButton.disabled=true
        }
      }
      
  const newUser=(e)=>{
//     if(document.querySelector("#Sign_upMessage").innerHTML="! Email already exists"){
//       document.querySelector("#Sign_upMessage").innerHTML=""
//  }
//     document.querySelector("#Sign_upMessage").innerHTML=""
//     e.preventDefault();
axios.post("http://localhost:3000/signup",{signup:signupDetails}) 
.then((res)=>{
  console.log(res.data)
})
  }
  const logging=()=>{
    axios.post("http://localhost:3000/login",{login:loginDetails})
    .then((res)=>{
      console.log(res.data)
    })
  }

    return(
        <div>
            <div className="login-image"></div>
            <div className="Login-Container">
                {signup?
                <div className="Login">
                    <div className="Login-text">
                    <h2>LOGIN</h2>
                    </div>
                    <div>
                    <form onSubmit={()=>{logging()}}  autoComplete="on">
            <div  className="division_1">
            <input name="email" onChange={(e)=>{setLoginDetails({...loginDetails,email:e.target.value})}}   type="email" className="input" placeholder="*Email-id" />
            </div>
            <br />
            <br />
            <br/>
            <div className="division_2" >
            <input onChange={(e)=>{setLoginDetails({...loginDetails,password:e.target.value})}} type="password" placeholder="*Password" className="input" />
            </div>
            <br />
            <br />
            <div style={{textAlign:"center"}}>
            <button className="Submitbutton" id="loginButton" disabled={true} >
            <b>Log-in</b>
            </button>
            {document.querySelector("#loginButton")&&LoginbuttonDisable()}
            </div>
            </form>
            <br/>
            <br/> 
            <div style={{ textAlign:"center",color:"white"}}>
              New user?
              <text
                href=""
                className="Register"
                onClick={() => {
                  setSignup(!signup);
                }}
              >
                &nbsp;&nbsp;
                <b>
                  Register
                </b>
              </text>
            </div>
                    </div>
                </div>:
                <div className="Login">
                   
            <h4
              className="ExitButton"
              onClick={() => {
                setSignup(!signup);
              }}
            >
              x
            </h4>
           
            <div>
              <h2 className="Login-text">SIGN UP</h2>
              <p id="Sign_upMessage" style={{color:"red",textAlign:"center",fontWeight:"bold"}}></p>

              <form onSubmit={(e)=>{
                  newUser(e)
                }}>
                <div>
              <div className="division_3">
              <input name="signup_name" onChange={(e)=>{setSignupDetails({...signupDetails,name:e.target.value});}}  type="text" name="User_name" className="input" placeholder="*User-name" />
             </div>
              <br />
              <br />
            
              <div className="division_4" >
               
              <input name="signup_email" onChange={(e)=>{setSignupDetails({...signupDetails,email:e.target.value});}}  type="email" name="Email_id" className="input" placeholder="*Email-id" />
              
              </div>
              <br />
              <br />
           
              <div className="division_5" >
              <input
              onChange={(e)=>{setSignupDetails({...signupDetails,password:e.target.value});
              }}
                type="password"
                name="password"
                placeholder="*Password"
                className="input"
              />
              </div>
              <br />
              <br />
            {document.querySelector("#submitButton")&&SignupbuttonDisable()}
              <div style={{ textAlign: "center" }}>
              <button
                  className="Submitbutton"
                  id="submitButton"
                  disabled={true}
                >
                  <b>Sign-up</b>
                </button>
              </div>
              </div>
              </form>
            </div>
          </div>
}
            </div>
        </div>
    )
}