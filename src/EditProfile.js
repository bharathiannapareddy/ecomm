import { ErrorMessage, Field, Formik,Form } from "formik"
import { useDispatch, useSelector } from "react-redux"
import {  useNavigate } from "react-router"
import * as Yup from 'yup'
import * as actions from './state/action-creator/actions'
// import {  toast } from 'material-react-toastify';
// import 'material-react-toastify/dist/ReactToastify.css';
import { useState,useEffect } from "react"
import 'yup-phone'
import useDocTitle from './useDocTitle'

export default function EditProfile(){
    useDocTitle("MyProfile/EditProfile")
// const initialValues={email:'',password:'',fname:'',lname:'',loc:'',phone:''}
const profiledetails=useSelector(state => state.userReducer.user)
const [initialValues,setInitialValues]=useState({email:'',password:'',fname:'',lname:'',loc:'',phone:''})


const validationSchema =Yup.object({
    email:Yup.string().email('Email must be a valid email').required('Required field'),
    password:Yup.string().matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,"Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character").required('Required field'),
    fname:Yup.string().required('Required field'),
    lname:Yup.string().required('Required field'),
    loc:Yup.string().required('Required field'),
    phone:Yup.string().phone(null,true,'Invalid phone number').required('Required field')
}
)

useEffect(()=>{
    window.onpopstate = (event) => {
        if (window.confirm('Do u want to leave the page with out saving the data?')) {
            navigate('/profile')
        }
        else{
            navigate('/editprofile')
        }
    }
})


const navigate=useNavigate()
    const dispatch=useDispatch()

    const onSubmit=(val)=>{
       
        dispatch(actions.UpdateProfile(val,profiledetails.id))
       // toast.success("Profile changed successfully")
       alert("Profile changed successfully")
        navigate('/profile')
       
    }

    return(
       
        <div>
            <h2 style={{textAlign:'center'}}>Edit Profile</h2>
        <Formik
        enableReinitialize={true}
        initialValues={profiledetails}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
        >
        <Form style={{marginLeft:'35%',marginRight:'35%',borderRadius:'10px',backgroundColor:'lightcyan',padding:'2%'}} >
            <div className="form-group row">
                <div className="col-xs-3">
                 <label htmlFor="email" className="form-label">Email<sup style={{color:'red'}}>*</sup></label>
                 </div>
                <div className="col-auto">
                 <Field type="email" id='email' value={profiledetails.email} autocomplete="new-password"  className="form-control" name='email' placeholder='Enter your Email' />
                 </div>
                <div className="col-auto" style={{color:'red'}}>
                 <ErrorMessage name="email" />
                 </div>
            </div>

            <div className="form-group row">
                <div className="col-xs-3">
                 <label htmlFor="password" className="form-label">Password<sup style={{color:'red'}}>*</sup></label>
                 </div>
                <div className="col-auto">
                 <Field type="text" id='password' autocomplete="new-password" className="form-control" name='password' placeholder='Enter your password' />
                 </div>
                <div className="col-auto" style={{color:'red'}}>
                 <ErrorMessage name="password" />
                 </div>
            </div>

            <div className="form-group row">
                <div className="col-xs-3">
                 <label htmlFor="fname" className="form-label">First Name<sup style={{color:'red'}}>*</sup></label>
                 </div>
                <div className="col-auto">
                 <Field type="text" id='fname' autocomplete="new-password" className="form-control" name='fname' placeholder='Enter your first name' />
                 </div>
                <div className="col-auto" style={{color:'red'}}>
                 <ErrorMessage name="fname" />
                 </div>
            </div>

            <div className="form-group row">
                <div className="col-xs-3">
                 <label htmlFor="lname" className="form-label">Last Name<sup style={{color:'red'}}>*</sup></label>
                 </div>
                <div className="col-auto">
                 <Field type="text" id='lname' autocomplete="new-password" className="form-control" name='lname' placeholder='Enter your last name' />
                 </div>
                <div className="col-auto" style={{color:'red'}}>
                 <ErrorMessage name="lname" />
                 </div>
            </div>

            <div className="form-group row">
                <div className="col-xs-3">
                 <label htmlFor="loc" className="form-label">Location<sup style={{color:'red'}}>*</sup></label>
                 </div>
                <div className="col-auto">
                 <Field type="text" id='loc' autocomplete="new-password" className="form-control" name='loc' placeholder='Enter your location' />
                 </div>
                <div className="col-auto" style={{color:'red'}}>
                 <ErrorMessage name="loc" />
                 </div>
            </div>

            <div className="form-group row ">
                <div className="col-xs-3">
                 <label htmlFor="phone" className="form-label">Phone Number<sup style={{color:'red'}}>*</sup></label>
                 </div>
                <div className="col-auto">
                 <Field type="string" id='phone' autocomplete="new-password" className="form-control" name='phone' placeholder='Enter your phone number' />
                 </div>
                <div className="col-auto" style={{color:'red'}}>
                 <ErrorMessage name="phone"  />
                 </div>
            </div>
           
        <button type="submit" className="btn btn-primary " style={{marginTop:'3%',borderRadius:'10px'}} >Submit</button>
        </Form>
        </Formik>
        </div>
    )
}
