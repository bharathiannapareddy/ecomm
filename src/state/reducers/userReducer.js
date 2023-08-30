import axios from "axios";

const userReducer =(state={users:[{}],loggedin:false,user:{}},action)=>{

    switch(action.type){
        case 'getusers':    
        return {...state,users:action.payload}
       
        case 'adduser':
            axios.post("http://localhost:8000/users",action.payload)
            .then(console.log('success'))
            .catch(err => console.log("Err"+err))
            return state

        case 'setuser':
            return {...state,user:action.payload,loggedin:true}

        case 'setstatus':
            return {...state,user:{},loggedin:action.payload}

        case 'uptuser':
            return {...state,user:action.payload}    

        default: return state
    }
}
export default userReducer;