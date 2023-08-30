import { useDispatch, useSelector } from "react-redux";
import {Tooltip,BarChart,XAxis,YAxis,Legend,CartesianGrid,Bar} from "recharts"


export default function Drop(){

  const dispatch = useDispatch()
  let product = useSelector(state => state.ProductReducer.product)
  const data=[product]
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
        <XAxis dataKey={data.name} scale="point" padding={{ left: 10, right: 10 }} />
        <YAxis />
        <Tooltip />
        <Legend />
        <CartesianGrid strokeDasharray="3 3" />
        <Bar dataKey={data.viewcount} fill="#8884d8" background={{ fill: '#eee' }} />
      </BarChart>
</div>
</div>
      )
}

