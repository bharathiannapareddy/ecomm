import {Tooltip,BarChart,XAxis,YAxis,Legend,CartesianGrid,Bar} from "recharts"
 import { useEffect,useState } from "react";
 import * as actions from './state/action-creator/actions'
 import { useDispatch, useSelector } from "react-redux";
// import { useParams } from "react-router-dom";
import axios from 'axios'

export default function Detail(){
  const dispatch = useDispatch()
  const products = useSelector(state => state.ProductReducer.products)

  useEffect(() => {
    //const response =  fetch("http://localhost:8000/products");
    dispatch(actions.FetchData())
}, [])
  console.log(products)
    const data=[
      {name : "Jan", value:241},
      {name : "Feb", value:123},
      {name : "Mar", value:12},
      {name : "Apr", value:6},
      {name : "May", value:0}
  ]





   
        return(
            <div style={{textAlign:"center",marginLeft: '600px'}}>
            <div className="PB">  
        <BarChart
          width={1100}
          height={400}
          // data={data}
          data={products.map(
            product=>(
              {name : product.name,
                ViewCount:product.viewcount,
                Quantity:product.quantity,
              price: product.price}
            )
          )}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          barSize={20}
        >
          <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
          <YAxis>
          <YAxis.Label value="Quantity" angle={-90} position="insideLeft"/>
                    <YAxis.Label value="price" angle={-90} position="insideLeft"/>
          </YAxis>
          <Tooltip />
          <Legend />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey="ViewCount" fill="#8884d8" background={{ fill: '#eee' }} />
        </BarChart>
</div>
</div>
        )
       

}