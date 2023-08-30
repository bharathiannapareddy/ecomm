import { ErrorMessage, Field, Formik,Form } from "formik"
import { useDispatch } from "react-redux"
import {  useNavigate } from "react-router"
import * as Yup from 'yup'
import {useEffect} from 'react'
import * as actions from './state/action-creator/actions'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useDocTitle from './useDocTitle'



const initialValues={
    name:'',description:'',manufacturer:'',quantity:0,price:0
}


const validationSchema =Yup.object({
    name:Yup.string().required('Required field'),
    description:Yup.string().required('Required field'),
    manufacturer:Yup.string().required('Required field'),
    quantity:Yup.number().required('Required field').min(1,'Quantity cannot be 0'),
    price:Yup.number().required('Required field').min(1,'Price cannot be 0')
}
)

export default function AddProduct (){
    useDocTitle("Products/AddProduct")
    const navigate=useNavigate()
    const dispatch=useDispatch()

    const onSubmit=(val)=>{
        // alert(JSON.stringify(val))
        dispatch(actions.AddData(val))
        toast.success("Product Added")
        navigate('/products')
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
    <div >
        <h2 style={{textAlign:'center'}}>Add a Product</h2>
        <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
        >
        <Form style={{marginLeft:'35%',marginRight:'35%',borderRadius:'10px',backgroundColor:'lightcyan',padding:'2%'}}>
            <div className="form-group row">
                <div className="col-xs-3">
                 <label htmlFor="name" className="form-label">Name</label>
                 </div>
                <div className="col-auto">
                 <Field type="text" id='name' autocomplete="new-password" className="form-control" name='name' placeholder='Enter product name' />
                 </div>
                <div className="col-auto" style={{color:'red'}}>
                 <ErrorMessage name="name" />
                 </div>
            </div>

            <div className="form-group row">
                <div className="col-xs-3">
                 <label htmlFor="description" className="form-label">Description</label>
                 </div>
                <div className="col-auto">
                 <Field as="textarea" id='description' autocomplete="new-password" className="form-control" name='description' placeholder='Enter description' />
                 </div>
                <div className="col-auto" style={{color:'red'}}>
                 <ErrorMessage name="description" />
                 </div>
            </div>

            <div className="form-group row">
                <div className="col-xs-3">
                 <label htmlFor="manufacturer" className="form-label">Manufacturer</label>
                 </div>
                <div className="col-auto">
                 <Field type="text" id='manufacturer' autocomplete="new-password" className="form-control" name='manufacturer' placeholder='Enter manufactured country' />
                 </div>
                <div className="col-auto" style={{color:'red'}}>
                 <ErrorMessage name="manufacturer" />
                 </div>
            </div>

            <div className="form-group row">
                <div className="col-xs-3">
                 <label htmlFor="quantity" className="form-label">Quantity</label>
                 </div>
                <div className="col-auto">
                 <Field type="number" id='quantity' autocomplete="new-password" className="form-control" name='quantity' placeholder='Enter quantity' />
                 </div>
                <div className="col-auto" style={{color:'red'}}>
                 <ErrorMessage name="quantity" />
                 </div>
            </div>

            <div className="form-group row">
                <div className="col-xs-3">
                 <label htmlFor="price" className="form-label">Price</label>
                 </div>
                <div className="col-auto">
                 <Field type="number" id='price' autocomplete="new-password" className="form-control" name='price' placeholder='Enter product name' />
                 </div>
                <div className="col-auto" style={{color:'red'}}>
                 <ErrorMessage name="price" />
                 </div>
            </div>
           

        <button type="submit" className="btn btn-primary" style={{marginTop:'3%',borderRadius:'10px'}}>Submit</button>
        </Form>
        </Formik>
       
        </div>
    )
}