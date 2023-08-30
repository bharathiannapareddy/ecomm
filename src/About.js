import { useSelector } from "react-redux";

import useDocTitle from './useDocTitle'

export default function Home(){
 // const loggedin = useSelector(state => state.userReducer.loggedin)
  const fff=useSelector(state => state.userReducer.user)
//change the title using customHook n useEffect
 useDocTitle("Home")
//   const Output =() =>{
//     if(loggedin){
//       <div><br></br>
//       <h3 style={{color:'gold'}}>Hello {fff.fname} {fff.lname} Welcome to Product Inventory Application</h3>
//       <img src="/assets/demoo.png" class="card-img" alt="Background" height="450px"/>
//       <h5 class="card-title display-3 fw-bolder mb-3" >NEW  SEASON  ARRIVALS</h5>
//                       <p class="card-text lead fs-2" >
//                         Login And Ceckout All The Trends
//                         </p>
                       
     
//       </div>
//     }
//     else{
// <div><br></br>
//     <h3 style={{color:'gold'}}>Hello {fff.fname} {fff.lname} Welcome to Product Inventory Application</h3>
//     <img src="/assets/demoo.png" class="card-img" alt="Background" height="450px"/>
//     <h5 class="card-title display-3 fw-bolder mb-3" >NEW  SEASON  ARRIVALS</h5>
//                     <p class="card-text lead fs-2" >
//                       Login And Ceckout All The Trends
//                       </p>
                     
   
//     </div>
//     }
//   }
  return (
    <div><br></br>
    <h3 style={{color:'gold'}}>Hello {fff.fname} {fff.lname} Welcome to Product Inventory Application</h3>
    <img src="/assets/About-Us.jpg" class="card-img" alt="Background" height="450px"/>
    <h5 class="card-title display-3 fw-bolder mb-3" >NEW  SEASON  ARRIVALS</h5>
                    <p class="card-text lead fs-2" >
                      Login And Ceckout All The Trends
                      </p>
                     
   
    </div>
  )
}
