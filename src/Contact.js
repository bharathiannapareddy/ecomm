import React from 'react';
import useDocTitle from './useDocTitle'

const Contact = () => {
    useDocTitle("Contact")
    return (
        <div className="hero">
            <div class="card bg-dark text-white border-0">
                <img src="/assets/demooo.png" class="card-img" alt="Background" height="450px" />
                <div class="card-img-overlay d-flex flex-column justify-content-center">
                    <div className="container">
                        <h4 class="card-title display-3 fw-bolder mb-0" style={{color:"black"}}>Contact Us</h4>
                        <p class="card-text lead fs-2" style={{color:"black"}}>
                            <h5>24/7 services are Available</h5> <br></br>
                            ContactUsOn       : reddystore@gmail.com<br></br>
                            Follow Us On Twitter: reddyproductsinventory@1<br></br>
                            Customer Care No    : 1234567878.

                        </p>

                    </div>

                </div>
            </div>

        </div>
    );
}
export default Contact;
