import axios from "axios"

export function FetchData(){
    return(dispatch) =>{
        axios.get('http://localhost:8000/products')
        .then(val => dispatch({type:'getData',payload:val.data}))
        .catch(err => console.log("Error:"+err))
    }
}

export function AddData(val){
    return(dispatch) =>{
        dispatch({type:'addData',payload:val})
    }
}

export function UpdateData(user,val){
    let pathLink="http://localhost:8000/products/"+''+val
    return(dispatch) =>{
        axios.put(pathLink,user)
        dispatch({type:'uptData',payload:val})
    }
}

export function GetSingleData(val){
   
    let pathLink="http://localhost:8000/products/"+''+val
   
    return(dispatch) =>{
        axios.get(pathLink)
    .then(res =>{ dispatch({type:'getsingle',payload:res.data})})
    .catch(err => console.log(err))
    }
}

export function DeleteData(val){
   
    let pathLink="http://localhost:8000/products/"+''+val
   
    return(dispatch) =>{
        axios.delete(pathLink)
    .then(res =>dispatch({type:'delData',payload:res.data}))
    .catch(err => console.log(err))
    }
}

export function FetchUsers(){
    return(dispatch) =>{
        axios.get('http://localhost:8000/users')
        .then(val => dispatch({type:'getusers',payload:val.data}))
        .catch(err => console.log("Error:"+err))
    }
}

export function AddUser(val){
    return(dispatch)=>{
        dispatch({type:"adduser",payload:val})
    }
}

export function setUser(val){
    let pathLink="http://localhost:8000/users/"+''+val
    return(dispatch)=>{
        axios.get(pathLink)
        .then(res => dispatch({type:"setuser",payload:res.data}) )
        .catch(err => console.log("Error:"+err))
    }
}

export function setStatus(val){
    return(dispatch)=>{
        dispatch({type:'setstatus',payload:val})
    }
}
export function UpdateProfile(user,val){
    let pathLink="http://localhost:8000/users/"+''+val
    return(dispatch) =>{
        axios.put(pathLink,user)
        dispatch({type:'uptuser',payload:user})
    }
}

//For Adding Item To cart

export const addCart = (product) => {
    return{
        type:"ADDITEM",
        payload:product
    }
}

//for Delete an item from cart
export const delCart = (product) => {
    return{
        type:"DELITEM",
        payload:product
    }
}