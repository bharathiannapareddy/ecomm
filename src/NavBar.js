import { useDispatch, useSelector } from 'react-redux'
import {Link} from 'react-router-dom'
// import { toast } from 'material-react-toastify'
// import 'material-react-toastify/dist/ReactToastify.css';
import * as actions from './state/action-creator/actions'
import Cookies from 'js-cookie';
import 'bootstrap/dist/css/bootstrap.min.css';
import'bootstrap/js/dist/collapse';
import Detail from './Detail'


export default function NavBar(){
    const loggedin = useSelector(state => state.userReducer.loggedin)
    const dispatch=useDispatch()
    const Logout=()=>{
      if(window.confirm('Are you sure you want to log out?'))
      {
        dispatch(actions.setStatus(false))
        Cookies.remove('currentUser')
        //toast.success('Logged out successfully')
        alert("Logged out successfully")
      }
    }
     const RenderMenu=()=>{
      if(loggedin){
        return(
     
          <ul className="navbar-nav "style={{marginLeft:'auto'}}>
            <li className="nav-item"  >
          <Link className="fa fa-user-circle" aria-hidden="true" style={{color:'white',marginTop:"14px"}} to="/profile"></Link>
        </li>
        <li className="nav-item"  >
          <Link className="nav-link active" aria-hidden="true" style={{color:'white'}} to="/profile">MyProfile</Link>
        </li>
        <li className="nav-item"  >
        <Link className="nav-link active" to="/" style={{color:'white'}} onClick={Logout}>Logout</Link>
      </li>
      </ul>
     
        )
      }else{
        return(
         
          <ul className="navbar-nav "style={{marginLeft:'auto'}} >
        <li className="nav-item">
          <Link className="nav-link active" style={{color:'gold'}} aria-current="page" to="/detail">Check Highly Viewed Products</Link>
        </li>
        <li className="nav-item"  >
          <Link  className="nav-link active" style={{color:'gold'}} to="/register">Register</Link>
        </li>
        <li className="nav-item"  >
          <Link className="nav-link active" style={{color:'gold'}} to="/signin">Sign in</Link>
        </li>
        </ul>
       
        )
      }
     }

    return(
      <div>
      <nav class="navbar navbar-expand-lg navbar-light bg">
       
      <Link class="navbar-brand fw-bold fs-4"  to="/" style={{color:'goldenrod'}} >
      <img src="/assets/demo.jpg" alt="" width="60" height="60" class="d-inline-block align-text-top"/>
        <b> Reddy's Collections</b> </Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button> 
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                                <Link class="nav-link" aria-current="page" to="/">
                                    Home </Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/products">
                                    Products</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/aboutus">
                                    About</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/contact">
                                    Contact</Link>
                            </li>
                           
                        </ul>
                      </div>
                 <div className="collapse navbar-collapse" id="navbarSupportedContent">
                 
     
          <RenderMenu/>
         
      </div> 
      </nav>
      </div>
    )
  }
