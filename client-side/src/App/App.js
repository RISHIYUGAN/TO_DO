import './App.css';
import axios from "axios"
import {Header} from "../header/header"
import {Dashboard} from "../pages/dashboard/dashboard"
import {useEffect} from "react"

function App() {
useEffect(()=>{
  axios.post('http://localhost:3000/hai',{hai:"hai"})
  .then((res)=>{
    console.log(res.data)
  })
  .catch((error)=>{
    console.log(error)
  })
},[])
 
  return (
    <div className="App-container">
      <Header/>
      <Dashboard/>
    </div>
  );
}

export default App;