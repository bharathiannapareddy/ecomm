import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {
   
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm">
                <div class="container">
                    <Link class="navbar-brand fw-bold fs-4" to="/">
                    <img src="/assets/demo.jpg" alt="" width="30" height="30" class="d-inline-block align-text-top"/>
                        Reddy's Collections</Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Link class="nav-link active" aria-current="page" to="/">
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
                        <div className="buttons">
                            <Link to="/signin" className="btn btn-outline-dark">
                               <i className="fa  fa-login"></i> Login
                            </Link>
                            <Link to="/register" className="btn btn-outline-dark">
                               <i className="fa  fa-user-plus me-2"></i> Register
                            </Link>
                            <Link to="/cart" className="btn btn-outline-dark">
                               <i className="fa  fa-shopping-cart me-2"></i> Cart(0)
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>

        </div>
    );
}
export default Navbar;
