import { ErrorMessage, Field, Formik,Form } from "formik"
import { useDispatch, useSelector } from "react-redux"
import {  useNavigate } from "react-router"
import * as Yup from 'yup'
import * as actions from './state/action-creator/actions'
// import {  toast } from 'material-react-toastify';
// import 'material-react-toastify/dist/ReactToastify.css';
import { useState,useEffect } from "react"
import 'yup-phone'
import { Link } from "react-router-dom"
import useDocTitle from './useDocTitle'

export default function RegistrationForm(){
    const users=useSelector(state => state.userReducer.users)
    useDocTitle("Registration")
const initialValues={
    email:'',password:'',fname:'',lname:'',loc:'',phone:''
}
   const [errtext,seterrtext]=useState('')

const validationSchema =Yup.object({
    email:Yup.string().email('Email must be a valid email').required('Required field'),
    password:Yup.string().matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,"Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character").required('Required field'),
    fname:Yup.string().required('Required field'),
    lname:Yup.string().required('Required field'),
    loc:Yup.string().required('Required field'),
    phone:Yup.string().phone(null,true,'Invalid phone number').required('Required field')
}
)
const navigate=useNavigate()
    const dispatch=useDispatch()

    const onSubmit=(val)=>{
        let userdata =  {email:'',password:''}
      users.map(
        user =>{
          if(user.email == val.email)
          {  
              userdata=user
          }
        }
       )
       if(userdata.email === ''){
        dispatch(actions.AddUser(val))
        // toast.success("User Added")
        alert("user added")
        navigate('/')
       }else{
          seterrtext('Email already registered')
       }
    }

    useEffect(()=>{
        window.onpopstate = (event) => {
            if (window.confirm('Do u want to leave the page with out saving the data?')) {
                navigate('/products')
            }
            else{
                navigate('/addproduct')
            }
        }
    })

    return(
        <div>
           <br />
        <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
        >
        <Form style={{marginLeft:'10%',marginRight:'10%',borderRadius:'50px',backgroundColor:"gray",padding:'2%'}} >
        <h2 style={{textAlign:'center'}}>RegistrationForm</h2>
               <p style={{color:'red'}} >{errtext}</p>
            <div className="form-group row">
               
                <div className="col-xs-3">
                 <label htmlFor="email" className="form-label" style={{marginRight:'80%'}} >Email<sup style={{color:'red'}}>*</sup></label>
                 </div>
                <div className="col-auto" style={{alignItems:'left',marginLeft:'200px'}}>
                 <Field type="email" id='email' autocomplete="new-password"  className="form-control" name='email' placeholder='Enter your Email' />
                 </div>
                <div className="col-auto" style={{alignItems:'left',marginLeft:'85px',color:'red'}}>
                 <ErrorMessage name="email" />
                 </div>
            </div>

            <div className="form-group row">
                <div className="col-xs-3">
                 <label htmlFor="password" className="form-label" style={{marginRight:'80%'}}>Password<sup style={{color:'red'}}>*</sup></label>
                 </div>
                <div className="col-auto" style={{alignItems:'center',marginLeft:'200px'}}>
                 <Field type="text" id='password' autocomplete="new-password" className="form-control" name='password' placeholder='Enter your password' />
                 </div>
                <div className="col-auto" style={{alignItems:'center',marginLeft:'80px',color:'red'}}>
                 <ErrorMessage name="password" />
                 </div>
            </div>

            <div className="form-group row">
                <div className="col-xs-3">
                 <label htmlFor="fname" className="form-label" style={{marginRight:'80%'}}>First Name<sup style={{color:'red'}}>*</sup></label>
                 </div>
                <div className="col-auto" style={{alignItems:'center',marginLeft:'200px'}}>
                 <Field type="text" id='fname' autocomplete="new-password" className="form-control" name='fname' placeholder='Enter your first name' />
                 </div>
                <div className="col-auto" style={{alignItems:'center',marginLeft:'80px',color:'red'}}>
                 <ErrorMessage name="fname" />
                 </div>
            </div>

            <div className="form-group row">
                <div className="col-xs-3">
                 <label htmlFor="lname" className="form-label" style={{marginRight:'80%'}}>Last Name<sup style={{color:'red'}}>*</sup></label>
                 </div>
                <div className="col-auto" style={{alignItems:'center',marginLeft:'200px'}}>
                 <Field type="text" id='lname' autocomplete="new-password" className="form-control" name='lname' placeholder='Enter your last name' />
                 </div>
                <div className="col-auto" style={{alignItems:'center',marginLeft:'80px',color:'red'}}>
                 <ErrorMessage name="lname" />
                 </div>
            </div>

            <div className="form-group row">
                <div className="col-xs-3">
                 <label htmlFor="loc" className="form-label" style={{marginRight:'80%'}}>Location<sup style={{color:'red'}}>*</sup></label>
                 </div>
                <div className="col-auto" style={{alignItems:'center',marginLeft:'200px'}}>
                 <Field type="text" id='loc' autocomplete="new-password" className="form-control" name='loc' placeholder='Enter your location' />
                 </div>
                <div className="col-auto" style={{alignItems:'center',marginLeft:'80px',color:'red'}}>
                 <ErrorMessage name="loc" />
                 </div>
            </div>

            <div className="form-group row ">
                <div className="col-xs-3">
                 <label htmlFor="phone" className="form-label" style={{marginRight:'80%'}}>Phone Number<sup style={{color:'red'}}>*</sup></label>
                 </div>
                <div className="col-auto" style={{alignItems:'center',marginLeft:'200px'}}>
                 <Field type="string" id='phone' autocomplete="new-password" className="form-control" name='phone' placeholder='Enter your phone number' />
                 </div>
                <div className="col-auto" style={{alignItems:'center',marginLeft:'80px',color:'red'}}>
                 <ErrorMessage name="phone"  />
                 </div>
            </div>
           
        <button type="submit" className="btn btn-primary " style={{marginTop:'3%',borderRadius:'10px'}} >Submit</button>
        <p style={{fontSize:'larger'}}>Already a Member ?<Link to='/signin'>Sign in</Link></p>
        </Form>
        </Formik>
        </div>
    )
}
