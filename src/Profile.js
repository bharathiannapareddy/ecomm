import {useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import useDocTitle from './useDocTitle'

export default function Profile(){
    const userData=useSelector(state => state.userReducer.user)
    useDocTitle("Profile")
    return(
        <div  className="card"style={{textAlign:'center',width:'50rem',height:'50rem',borderRadius:'30px',marginTop:'5%',
        marginLeft:'300px',marginRight:'400px'}}>
            <h2><u>{userData.fname+' '+userData.lname}</u></h2>
            <p><b>Name    :&nbsp;</b>{userData.fname+' '+userData.lname}</p>
            <p><b>Email Id&nbsp;:&nbsp;</b>{userData.email}</p>
            <p><b>Lives In&nbsp;:&nbsp;</b>{userData.loc}</p>
            <p><b>Contact Info&nbsp;:&nbsp;</b>{userData.phone}</p>
            <li>
                <Link to="/editprofile"><button class="btn btn-primary btn-sm">EditProfile</button></Link>
            </li>

        </div>
    )
}