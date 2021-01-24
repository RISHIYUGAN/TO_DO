export const AuthReducer=(state=localStorage.getItem("tok")||false,action)=>{
    switch(action.type){
      case "AuthChange":
          return action.token
          
    case "Authfalse":
        return !state

      case "LocalChange":
          return action.local
     
          default:
         return state
    }
}