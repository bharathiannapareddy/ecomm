import { useEffect,useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import * as actions from './state/action-creator/actions'
import {Tooltip,BarChart,XAxis,YAxis,Legend,CartesianGrid,Bar,Line,LineChart} from "recharts"
 import { useNavigate } from "react-router";
 import useDocTitle from './useDocTitle'
 import axios from 'axios'
 


export default function ProductDetails(props) {
    useDocTitle("Products/ProductDetails")
    const params = useParams()
    const dispatch = useDispatch()
    let paramdata = params.id.split('');
    let id = parseInt(paramdata[paramdata.length - 1])
    let product = useSelector(state => state.ProductReducer.product)

    const[coun,setCount]=useState(10);

    useEffect(() => {
        dispatch(actions.GetSingleData(id))
        console.log(product)
    }, [])
    const data=[
        {name : "Jan", value:241},
        {name : "Feb", value:123},
        {name : "Mar", value:12},
        {name : "Apr", value:product.viewcount},
        {name : "May", value:0}
    ]

   
        const viewcount = (id)=>{
            axios({
                method:'put',
                url:`http://localhost:8000/products/${id}`,
                data:{
                    name: product.name,
                    description : product.description,
                    manufacturer:product.manufacturer,
                    viewcount: product.viewcount++,
                    quantity: product.quantity,
                    price: product.price,
                    img : product.img,
                    catergory : product.catergory
                }
            })
             }

   


   
    const Value = ()=> {
        return(
            <div style={{textAlign:"left",marginLeft: '900px',marginTop:'10px'}}>
            <div className="PB">  
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          barSize={20}
        >
          <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey="value" fill="#8884d8" background={{ fill: '#eee' }} />
        </BarChart>
</div>
</div>
        )
       
}
const [showPrice,setShowPrice] = useState(true)  
    const handleCheckboxChange = () => {setShowPrice(!showPrice)}
    const dataa=[
        {id:1,price:10,quantity:20,viewcount:100},
        {id:1,price:10,quantity:20,viewcount:100},
        {id:1,price:10,quantity:20,viewcount:100}
    ];


    return (<>
        <h3>Product Details</h3>
       
        <figure class="figure"style={{ float: 'left', marginLeft: '30px', width:"400px",marginTop:"50px"}}>
            <div id="inc">
               
            <button type=" button"  onClick={()=>viewcount(product.id)}><input type="image" src={product.img} class="figure-img img-fluid rounded" alt="..."/></button>
            </div>
            <div id="total-count"></div>
                <figcaption class="figure-caption">{product.description}.</figcaption>
        </figure>
        <div style={{top:"250px",  position:"absolute",right:"550px",width:"25%",height:"280px"}}>
        <p>Product Name:   {product.name}</p>
        <p>Description:    {product.description}</p>
        <p>Manufacturer:    {product.manufacturer}</p>
        <p>Quantity:       {product.quantity}</p>
        <p>Price:        {product.price}</p>
        <p>ViewCount:        {product.viewcount}</p>
        <button type="button" class="btn btn-primary btn-sm" >Add To Cart</button>&nbsp;&nbsp;
        <button type="button" class="btn btn-primary btn-sm">View Cart</button>
            </div>
           
<Value></Value>
           
    </>

    );
}


