import React,{Suspense} from 'react'
import Home from './About';
import './App.css';
import NavBar from './NavBar';
import {ToastContainer} from 'react-toastify'
import { useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import NavBaar from './NavBaar';
import AboutUs from './AboutUs';
import Contact from './Contact';
import EditProfile from './EditProfile';
import Detail from './Detail'



const ProductsPage=React.lazy(() => import('./ProductsPage'))
const RegistrationForm=React.lazy(() => import ('./Registration'))
const ProductDetails=React.lazy(() =>import('./ProductDetails'))
const AddProduct=React.lazy(() =>import('./AddProduct'))
const SigninForm=React.lazy(() => import('./Sigin'))
const UpdateForm=React.lazy(() => import('./UpdateForm'))
const Profile=React.lazy(() => import ('./Profile'))



function App(){
 
  return(
    <div className="App">
      <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/editprofile' element={<EditProfile/>}/>
        <Route path='/detail'element={<Detail/>}/>
        <Route path='/aboutus' element={<AboutUs/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/products' element={<Suspense fallback={<h1>Loading ......</h1>}><ProductsPage/></Suspense>}/>
        <Route path='/addproduct' element={<Suspense fallback={<h1>Loading ......</h1>}><AddProduct/></Suspense>}/>
        <Route path='/updateform/:id' element={<Suspense fallback={<h1>Loading ......</h1>}><UpdateForm/></Suspense>}/>
        <Route path='/signin' element={<Suspense fallback={<h1>Loading......</h1>}><SigninForm/></Suspense>}/>
        <Route path='/products/:id'element={<Suspense fallback={<h1>Loading......</h1>}><ProductDetails /></Suspense>}/>
        <Route path='/register' element={<Suspense fallback={<h1>Loading ......</h1>}><RegistrationForm/></Suspense>}/>
        <Route path='/profile'element={<Suspense fallback={<h1>Loading ......</h1>}><Profile/></Suspense>}/>
        <Route path='/detail'element={<Suspense fallback={<h1>Loading ......</h1>}><Detail/></Suspense>}/>
      </Routes>
      </BrowserRouter>
      <ToastContainer position="top-center" autoClose={3000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false}
      pauseOnFocusLoss draggable pauseOnHover />
    </div>
  )
}
export default App;
