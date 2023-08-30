import useDocTitle from './useDocTitle'
import { ErrorMessage, Field, Formik,Form } from "formik"
import { useDispatch, useSelector } from "react-redux"
import {  useNavigate } from "react-router"
import * as Yup from 'yup'
import * as actions from './state/action-creator/actions'
import { useParams } from "react-router"
import { useEffect, useState } from "react"
import {toast} from 'react-toastify'


const validationSchema =Yup.object({
    name:Yup.string().required('Required field'),
    description:Yup.string().required('Required field'),
    manufacturer:Yup.string().required('Required field'),
    quantity:Yup.number().required('Required field').min(1,'Quantity cannot be 0'),
    price:Yup.number().required('Required field').min(1,'Price cannot be 0')
}
)

export default function UpdateForm (){
    useDocTitle("Products/EditProduct")
    const navigate=useNavigate()
    const dispatch=useDispatch()
    const params=useParams()
    let id=parseInt(params.id)
    // let isDirty=false;
    const [initialValues,setValues] = useState({name:'',description:'',manufacturer:'',quantity:'',price:''})
   

    const product = useSelector(state => state.ProductReducer.product)

    useEffect(()=>{
       dispatch(actions.GetSingleData(id))
    },[])
    useEffect(()=>{
     setValues(product)
    },[product])

    useEffect(()=>{
        // window.onpopstate = (event) => {
        //     isDirty=true;
        // }
        // <prompt when={isDirty} message={"Do u want"}></prompt>
        window.onpopstate = (event) => {
            if (window.confirm('Do u want to leave the page with out saving the data?')) {
                navigate('/products')
            }
            else{
                navigate('/addproduct')
            }
        }
    })
    const onSubmit=(val)=>{
         //alert(JSON.stringify(val))
       dispatch(actions.UpdateData(val,id))
       //dispatch(actions.AddData(val,id))
        toast.success("Product Updated")
        navigate('/products')
    }
    return(
        <div >
        <h2 style={{textAlign:'center'}} >Update Product</h2>
        <Formik
        enableReinitialize={true}
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
       
        >
        <Form style={{marginLeft:'35%',marginRight:'35%',borderColor:"black",borderRadius:'40px',backgroundColor:'#e2e5eb',padding:'2%'}}>
            <div className="form-group row">
                <div className="col-xs-3">
                 <label htmlFor="name" className="form-label" >Name</label>
                 </div>
                <div className="col-auto" style={{alignItems:'center',marginLeft:'70px'}}>
                 <Field type="text" id='name' className="form-control" name='name' placeholder='Enter product name' />
                 </div>
                <div className="col-auto">
                 <ErrorMessage name="name" />
                 </div>
            </div>

            <div className="form-group row">
                <div className="col-xs-3">
                 <label htmlFor="description" className="form-label">Description</label>
                 </div>
                <div className="col-auto" style={{alignItems:'center',marginLeft:'70px'}}>
                 <Field as="textarea" id='description' className="form-control" name='description' placeholder='Enter description' />
                 </div>
                <div className="col-auto">
                 <ErrorMessage name="description" />
                 </div>
            </div>

            <div className="form-group row" >
                <div className="col-xs-3"   >
                 <label htmlFor="manufacturer" className="form-label">Manufacturer</label>
                 </div>
                <div className="col-auto" style={{alignItems:'center',marginLeft:'70px'}} >
                 <Field type="text" id='manufacturer' className="form-control" name='manufacturer' placeholder='Enter manufacturer name' />
                 </div>
                <div className="col-auto">
                 <ErrorMessage name="manufacturer" />
                 </div>
            </div>

            <div className="form-group row" style={{alignItems:'center',marginLeft:'60px'}}>
                <div className="col-xs-3" style={{alignItems:'center',marginLeft:'-40px'}}>
                 <label htmlFor="quantity" className="form-label" style={{marginLeft:'1px'}}>Quantity</label>
                 </div>
                <div className="col-auto"  >
                 <Field type="number" id='quantity' className="form-control" name='quantity' placeholder='Enter quantity' />
                 </div>
                <div className="col-auto">
                 <ErrorMessage name="quantity" />
                 </div>
            </div>

            <div className="form-group row" style={{alignItems:'center',marginLeft:'60px'}}>
                <div className="col-xs-3" style={{alignItems:'center',marginLeft:'-50px'}}>
                 <label htmlFor="price" className="form-label">Price</label>
                 </div>
                <div className="col-auto" >
                 <Field type="number" id='price' className="form-control" name='price' placeholder='Enter product name' />
                 </div>
                <div className="col-auto">
                 <ErrorMessage name="price" />
                 </div>
            </div>
            <br />
        <button type="submit" className="btn btn-primary" onClick={onSubmit}>Update</button>
        </Form>
        </Formik>
        </div>
    )
}