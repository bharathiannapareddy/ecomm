import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/js/dist/collapse';
import 'bootstrap/js/dist/dropdown';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import * as actions from './state/action-creator/actions'
import { Link } from "react-router-dom";
import useDocTitle from './useDocTitle'


export default function ProductsPage() {
    useDocTitle("Products")
    const products = useSelector(state => state.ProductReducer.products)
    const loggedin = useSelector(state => state.userReducer.loggedin)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [pros, setpros] = useState(products)
    const [filter, setFilter] = useState(pros);
    const [isChecked, setisChecked] = useState([])
    const [isSorted, setisSorted] = useState([])
    let componentMounted = true;
    const [coun, setCount] = useState(10);
    let product = useSelector(state => state.ProductReducer.product)
    useEffect(() => {

        dispatch(actions.FetchData())
    }, [])



    useEffect(() => {
        setpros(products)
        console.log(pros)
    }, [products])

    useEffect(() => {
        setFilter(pros)
        console.log(pros)
    }, [products])


    const navigateAddProduct = () => {
        if (loggedin) {
            navigate('/addproduct')
        } else {
            if (window.confirm('Please Login to add a product.Do you want to sign in?')) {
                navigate('/signin')
            }
        }

    }
    const deleteProduct = (pro) => {
        if (loggedin) {
            window.confirm("Are you Sure You want to delete the product")
            dispatch(actions.DeleteData(pro))
            console.log("err" + " " + pro)
            alert("Product Deleted")
            dispatch(actions.FetchData())

        } else {
            if (window.confirm('Please Login to Delete Products.Do you want to sign in?')) {
                navigate('/signin')
            }
        }

    }
    const updateProduct = (pro) => {
        if (loggedin) {
            let pathLink = '/updateform/' + ' ' + pro
            navigate(pathLink)
        } else {
            if (window.confirm('You can only update if you are logged in.Do you want to sign in?')) {
                navigate('/signin')
            }
        }
    }
    const searchChanged = (value) => {
        let filteredValues = products.filter(post => {
            if (value === '') return post
            else if (post.name.toLowerCase().includes(value.toLowerCase())) return post
        })
        setpros(filteredValues)
    }



    const handleCheckbox = (e) => {
        const { value, checked } = e.target
        if (checked) {
            setisChecked([...isChecked, value])
        } else {
            setisChecked(isChecked.filter(c => c !== value))
        }
    }

    const deleteMultiple = () => {
        if (loggedin) {
            if (window.confirm('Are you sure you want to delete the selected products?')) {
                for (let i = 0; i < isChecked.length; i++) {
                    dispatch(actions.DeleteData(isChecked[i]))
                }
                let dels = document.getElementsByName('del')
                for (let i = 0; i < dels.length; i++) {
                    dels[i].checked = false;
                }
                setisChecked([])
                alert("Products deleted successfully")
                dispatch(actions.FetchData())
            }
        } else {
            if (window.confirm('You can only delete if you are logged in.Do you want to sign in?')) {
                navigate('/signin')
            }
        }
    }
    const handleCheckbox1 = (e) => {
        let filteredValue = [...products].sort((a, b) => a.price - b.price)
        setpros(filteredValue)
    }
    const handleCheckbox2 = (e) => {
        let filteredValu = [...products].sort((a, b) => b.price - a.price)
        setpros(filteredValu)
    }
    const handleCheckbox3 = (e) => {
        let filteredVal = [...products].sort((a, b) => a.quantity - b.quantity)
        setpros(filteredVal)
    }
    const handleCheckbox4 = (e) => {
        let filteredVa = [...products].sort((a, b) => b.quantity - a.quantity)
        setpros(filteredVa)
    }


    const filterProduct = (cat) => {
        const updatedList = pros.filter((x) => x.catergory === cat);
        setFilter(updatedList);
    }
    const [isCheck, setisCheck] = useState([])
    const handleCheck = (e) => {
        console.log(e.target.checked)
        const { value, checked } = e.target
        if (checked) {
            setisCheck([...isCheck, value])
        }else if(checked=false) {
            setisChecked(0)
        }
    }
    const [selected, setSelected] = useState();
    const customisation = (event) => {
        setSelected(event.target.value)

    }
    const [r, setR] = useState([])
    const Name = (id, quantity, manufacturer, viewcount, description, nam) => {
        let t=','
        const [ar, setAr] = useState([id, quantity, manufacturer, viewcount, description, nam])
        if (isCheck.length == 1 && [isCheck] == 'quantity') {
            return [ar[0].quantity]
        }
        else if (isCheck.length == 1 && [isCheck] == 'manufacturer') {
            return [ar[0].manufacturer]
        }
        else if (isCheck.length == 1 && [isCheck] == 'viewcount') {
            return [ar[0].viewcount]
        }
        else if (isCheck.length == 1 && [isCheck] == 'description') {
            return [ar[0].description]
        }
        else if (isCheck.length == 2 && [isCheck[0]] == 'quantity'&& [isCheck[1]] == 'manufacturer' ) {
            return [ar[0].quantity,t,ar[0].manufacturer]
        }
        else if (isCheck.length == 2 && [isCheck[0]] == 'quantity'&& [isCheck[1]] == 'viewcount' ) {
           
            return [ar[0].quantity,t,ar[0].viewcount]
        }
        else if (isCheck.length == 2 && [isCheck[0]] == 'quantity'&& [isCheck[1]] == 'description' ) {
            return [ar[0].quantity,t,ar[0].description]
        }
        else if (isCheck.length == 2 && [isCheck[0]] == 'manufacturer'&& [isCheck[1]] == 'description' ) {
            return [ar[0].manufacturer,t,ar[0].description]
        }
        else if (isCheck.length == 2 && [isCheck[0]] == 'manufacturer'&& [isCheck[1]] == 'viewcount' ) {
            return [ar[0].manufacturer,t,ar[0].viewcount]
        }
        else if (isCheck.length == 3 && [isCheck[0]] == 'quantity'&& [isCheck[1]] == 'manufacturer'&& [isCheck[2]] == 'viewcount') {
            return [ar[0].quantity,t, ar[0].manufacturer,t, ar[0].viewcount]
        }
        else if (isCheck.length == 3 && [isCheck[0]] == 'manufacturer'&& [isCheck[1]] == 'viewcount'&& [isCheck[2]] == 'description') {
            return [ar[0].quantity,t, ar[0].manufacturer,t, ar[0].viewcount,t,ar[0].description]
        }
        else if (isCheck.length == 3 &&[isCheck[0]] == 'quantity'&& [isCheck[1]] == 'viewcount'&& [isCheck[2]] == 'description') {
            return [ar[0].quantity,t, ar[0].viewcount,t,ar[0].description ]
        }
        else if (isCheck.length == 4 && [isCheck[0]] == 'quantity'&& [isCheck[1]] == 'viewcount'&& [isCheck[2]] == 'description'&& [isCheck[3]] == 'manufacturer') {
            return [ar[0].quantity, t, ar[0].viewcount,t, ar[0].description,t,ar[0].manufacturer,]
        }
        else if (isCheck.length == 4) {
            return [ar[0].quantity, t,ar[0].manufacturer,t, ar[0].viewcount,t, ar[0].description]
        }

        else {
            return ar[0].nam
        }




    }


    return (
        <>
            <input type="search" class="form-control rounded" placeholder="Search here" style={{ width: '200px', float: 'right', marginRight: '10px', marginTop: '20px' }} onChange={(e) => searchChanged(e.target.value)} />
            <button type="button" class="btn btn-primary btn-sm" onClick={deleteMultiple} style={{ float: 'left', marginLeft: '10px', marginTop: '30px' }}>Delete Multiple</button>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button type="button" class="btn btn-primary btn-sm" onClick={navigateAddProduct} style={{ float: 'left', marginLeft: '10px', marginTop: '30px' }}>Add Product</button>

            <div className="filter-area" style={{ width: '100px', float: 'right', marginRight: '10px', marginTop: '20px', marginBottom: '0px' }}>
                    Quantity<br></br>Manufacturer<br></br>Viewcount<br></br>description
               </div>
            <div className="filter-area" style={{ width: '10px', float: 'right', marginRight: '10px', marginTop: '30px', marginBottom: '0px' }}>
             
                    <input type="checkbox" style={{ float: 'left' }} name="q" onChange={(e) => handleCheck(e)} key='quantity' value='quantity'></input><br></br>
                    <input type="checkbox" style={{ float: 'left' }} name="m" onChange={(e) => handleCheck(e)} key='manufacturer' value='manufacturer' ></input><br></br>
                    <input type="checkbox" style={{ float: 'left'}} name="v" onChange={(e) => handleCheck(e)} key='viewcount' value='viewcount'></input><br></br>
                    <input type="checkbox" style={{ float: 'left' }} name="d" onChange={(e) => handleCheck(e)} key='description' value='description' ></input><br></br>
                    </div>

            <div className="buttons d-flex justify-content-center mb-5 pb-5">
                <div className="but">
                    <button className="btn btn-outline-dark me-2" onClick={() => setFilter(pros)} >All</button>
                    <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("Women")}>Women</button>
                    <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("Men")}>Men</button>
                    <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("Jwellery")}>Jewelry</button>
                    <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("Elect")} >Electronics</button>

                </div>
            </div>




            <br></br><br />
            {
                <div class='card-group'>
                    {
                        filter.map(
                            product => (
                                <div className="col-md-3 mb-4">
                                    <div class="cardcard h-100 text-center p-4" key={product.id}>
                                        <Link to={product.name + ' ' + product.id}><img src={product.img} class="card-img-top" alt={product.title} height="250px" /></Link>
                                        <div class="card-body">
                                            <input type="checkbox" style={{ float: 'left', alignItems: 'center' }} name="del" onChange={(e) => handleCheckbox(e)} value={product.id} checked={product.isChecked} ></input>
                                            <h5 class='card-title' style={{ float: 'left' }}><Link to={product.name + ' ' + product.id}>{product.name}</Link></h5>
                                            <p class="card-text">RS.{product.price}</p>
                                            <p class='card-text' style={{ float: 'left', marginLeft: '10px', borderRadius: '5px', padding: '3px' }}>{product.name}</p>
                                            <button type="button" class="btn btn-primary btn-sm" onClick={() => deleteProduct(product.id)} style={{ float: 'right', marginRight: '10px' }} >Delete</button>
                                            <button type="button" class="btn btn-primary btn-sm" onClick={() => updateProduct(product.id)} style={{ float: 'right', marginRight: '10px' }} >Edit</button>&nbsp;

                                        </div>
                                    </div>
                                </div>))}
                </div>
            }

            {
                <div class='card-group'>
                    {
                        pros.map(

                            product => (
                                <div className="col-md-3 mb-4">
                                    <div class="cardcard h-100 text-center p-4" key={product.id}>

                                        <Link to={product.name + ' ' + product.id}  >
                                            <img src={product.img} class="card-img-top" alt={product.title} height="250px" /></Link>

                                        <div class="card-body">
                                            <input type="checkbox" style={{ float: 'left', alignItems: 'center' }} name="del" onChange={(e) => handleCheckbox(e)} value={product.id} checked={product.isChecked} ></input>
                                            <p class='card-title' style={{ float: 'left', marginLeft: '10px', borderRadius: '5px', padding: '3px', marginTop: '60px' }}>{

                                                selected
                                            }
                                                <Name id={product.id}
                                                    quantity={product.quantity}
                                                    manufacturer={product.manufacturer}
                                                    viewcount={product.viewcount}
                                                    description={product.description}
                                                    nam={product.name}
                                                >{r}<br></br>
                                                </Name> </p>
                                            <p class="card-text">RS.{product.price}</p>
                                            <button type="button" class="btn btn-primary btn-sm" onClick={() => deleteProduct(product.id)} style={{ float: 'right', marginRight: '10px' }} >Delete</button>
                                            <button type="button" class="btn btn-primary btn-sm" onClick={() => updateProduct(product.id)} style={{ float: 'right', marginRight: '10px' }} >Edit</button>&nbsp;

                                        </div>
                                    </div>
                                </div>))}

                </div>
            }


           

        </>)

}


