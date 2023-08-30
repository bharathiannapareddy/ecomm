import useDocTitle from './useDocTitle'
import {  useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router"
// import { toast } from 'material-react-toastify'
import Cookies from "js-cookie"
// import 'material-react-toastify/dist/ReactToastify.css';
import * as actions from './state/action-creator/actions'
import { Link } from "react-router-dom"

export default function SigninForm(){
    const users=useSelector(state => state.userReducer.users)
    const [errText,setErrText] = useState({})
    const [formvalues,setformvalues]=useState({email:'',password:'',top:''})
    const [issubmit,setissubmit]=useState(false)
    useDocTitle("Profile")
    const navigate=useNavigate()
     
    const dispatch=useDispatch()
   
     useEffect(()=>{
       dispatch(actions.FetchUsers())
     },[])
     

     const showError=(val)=>{
         setErrText(val)
     }
     const handlechange=(e)=>{
      const {name,value}= e.target
      setformvalues({...formvalues,[name]:value})
     }
     const validate =(vals)=>{
       const errors={}
       const regex = /^[^\$@]+@[^\$@]+\.[^\$@]{2,}$/i;
       if(!vals.email){
        errors.email='Email is required!'
       }else if(!regex.test(formvalues.email)){
        errors.email='Enter a valid email format!'
       }
       if(!vals.password){
        errors.password='Password is required!'
       }
       return errors
     }
     

     const checkuser=(e)=>{
           e.preventDefault();
          setErrText( validate(formvalues) )
          setissubmit(true)
          if(Object.keys(errText).length === 0 && issubmit){
             uservalidation()
          }
       
     }
     const uservalidation=()=>{
      let userdata =  {email:'',password:''}
      users.map(
        user =>{
          if(user.email == formvalues.email)
          {  console.log('email ok')
              userdata=user
          }
        }
       )
       if(userdata.email === ''){
        console.log('email not Correct')
        setErrText({...errText,top:'Email not registered'})
       }else{
        if(userdata.password === formvalues.password){
          console.log('password ok');
            dispatch(actions.setUser(userdata.id))
            Cookies.set('currentUser', userdata.id, { expires: 365 })
            //toast.success("Signed In Successful")
            alert("Signed In Successful")
            navigate('/')
        }else{ console.log('password not ok'); setErrText({...errText,top:'Enter Correct Password'}) }
       }

     }
   
    return(
        <div style={{textAlign:'center',padding:'10px',borderRadius:'10px',backgroundColor:'lightcyan',marginTop:'100px',marginLeft:'30%',marginRight:'30%'}} >
        <p style={{color:'red'}}>{errText.top}</p>
        <h2>Sign In</h2>
        <form onSubmit={checkuser}>
            <label htmlFor="email"  >Email Id<sup style={{color:'red'}}>*</sup></label><br></br>
          <input type="email" autoComplete='false' value={ formvalues.email } onChange={handlechange} name="email" id="email"  ></input>
          <p style={{color:'red'}} >{errText.email}</p>
         
          <label htmlFor="password"  >Password<sup style={{color:'red'}}>*</sup></label><br/>
          <input type="password" name="password" value={ formvalues.password } onChange={ handlechange} autoComplete='false' id="password"  ></input>
          <p style={{color:'red'}} >{errText.password}</p>
         
          <button style={{marginTop:'10px',fontFamily:'initial'}} class="btn btn-primary btn-sm"  type="submit">Sign In</button>
          <br /><br />
          <p style={{ fontSize: 'larger',fontFamily:'initial'}}>Not a Member?<Link to='/register'>Register</Link></p>
        </form>
        </div>
    )
}