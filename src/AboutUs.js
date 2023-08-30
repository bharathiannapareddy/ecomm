import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import'bootstrap/js/dist/collapse';
import'bootstrap/js/dist/carousel';
import { Link } from 'react-router-dom';

import useDocTitle from './useDocTitle'
const AboutUs = () => {
    useDocTitle("About")
    return (
        <div>
         

            <div class="container">
                <h2>AboutUs</h2>
                <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active"style={{height:"400px"}}>
                            <img src="/assets/about3.jpg" class="d-block w-100" alt="..." />
                            <div class="carousel-caption d-none d-md-block" style={{color:"black", marginBottom: '100px'}}>
                                <h5><b>We are very happy to see here</b></h5>
                                <p><b>We will ensure that you will be having a great experience evry time.</b></p>
                            </div>
                        </div>
                        <div class="carousel-item" style={{height:"400px"}}>
                            <img src="/assets/about1.jpg" class="d-block w-100" alt="..." />
                            <div class="carousel-caption d-none d-md-block">
                                <h5>We are very happy to see here</h5>
                                <p>We will ensure that you will be having a great experience evry time.</p>
                            </div>
                        </div>
                        <div class="carousel-item" style={{height:"400px"}}>
                            <img src="/assets/about2.jpg" class="d-block w-100" alt="..." />
                            <div class="carousel-caption d-none d-md-block">
                                <h5>We are very happy to see here</h5>
                                <p>We will ensure that you will be having a great experience evry time.</p>
                            </div>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>

            <div class="row">
  <div class="col-sm-6">
    <div style={{  width: "500px",marginTop: '40px' }}>
     
      <img src="/assets/team.jpg" class="card-img-top" alt="Abd" height="300" style={{  width: "500px",marginTop: '40px' }}/>
     
    </div>
  </div>
  <div class="col-sm-6">
    <div class="card"style={{  width: "600px",marginTop: '40px' }}>
      <div class="card-body">
        <h5 class="card-title"><h1>Leave a Mark</h1></h5>
        <p class="card-text"><h5>We're known more by the impact we create
                    than the titles we hold. Impact that is brought by
                    working together on audacious challenges at scale
                    with an aim to revolutionize for the Indian customer.
                    We believe great ideas can emerge from anywhere
                    and must be backed. Our people - backed by our
                    culture of end-to-end ownership - have revolutionised
                    India's e-commerce sector - several times over!</h5>
                   
                    <h5 >Flipkart users can choose between
                    English and 11 Indian<br /> languages. Our
                    teams built vernacular support in <br />just
                    2.5 years, most of it while working
                    remotely!</h5></p>
      </div>
    </div>
  </div>
</div>

            {/* <div class="container" style={{ float: 'right', marginTop: '100px', marginRight: '200px', width: "600px" }}>
                <h1>Leave a Mark</h1>
                <h5>We're known more by the impact we create
                    than the titles we hold. Impact that is brought by
                    working together on audacious challenges at scale
                    with an aim to revolutionize for the Indian customer.
                    We believe great ideas can emerge from anywhere
                    and must be backed. Our people - backed by our
                    culture of end-to-end ownership - have revolutionised
                    India's e-commerce sector - several times over!</h5>


                <h5 >Flipkart users can choose between
                    English and 11 Indian<br /> languages. Our
                    teams built vernacular support in <br />just
                    2.5 years, most of it while working
                    remotely!</h5>

            </div> */}


            {/* <div className="col-md-3 mb-4" >
                <div class="cardcard h-100 text-center p-4">
                    <img src="/assets/team.jpg" class="card-img-top" alt="Abd" height="300" />
                </div>

            </div> */}
<div class="row">
 
  <div class="col-sm-6">
    <div class="card"style={{  width: "600px",marginTop: '40px' }}>
      <div class="card-body">
        <h5 class="card-title"><h1>Experiment Learn Grow</h1></h5>
        <p class="card-text"><h5>Our journey of building India's biggest unicorn
                    start-up has been full of successes, but also failures
                    and learning from them. That's why there's calculated
                    risk-taking, a high willingness to learn and improvise,
                    and a growth orientation built into everything we do.
                    Whether it be opening a new warehouse, or making
                    our mobile app a bit more consumer friendly, we're
                    always experimenting, learning and growing!</h5>
                    <h5 style={{ width: '500px', marginLeft: '30px', marginTop: '10px' }}>
                        We take pride in being an employee-centric organization
                        which keeps the best interest of its employees at the heart.</h5>
                   
                    </p>
                    <h5 style={{ width: '50px', marginTop: '10px' }}><img src="/assets/l1.png" class="d-block w-100" alt="..." height="60" />
                </h5>
                <h5 style={{  marginTop: '0px' }}><a href="#">-Krishna Raghavan, Chief People Officer</a></h5>
           
      </div>
    </div>
  </div>
  <div class="col-sm-6">
    <div style={{  width: "500px",marginTop: '40px' }}>
     
      <img src="/assets/team.jpg" class="card-img-top" alt="Abd" height="300" style={{  width: "500px",marginTop: '40px' }}/>
     
    </div>
  </div>
</div>


            {/* <div className="col-md-3 mb-4" style={{ float: 'right', marginTop: '10px', marginRight: '50px', width: "500px" }}>
                <div class="cardcard h-100 text-center p-4">
                    <img src="/assets/team1.jpg" class="card-img-top" alt="Abd" height="300" />
                </div>

            </div> */}

            {/* <div class="container" style={{ float: 'left', marginTop: '100px', marginLeft: '50px', width: "600px" }}>
                <h1>Experiment Learn Grow</h1>
                <h5>Our journey of building India's biggest unicorn
                    start-up has been full of successes, but also failures
                    and learning from them. That's why there's calculated
                    risk-taking, a high willingness to learn and improvise,
                    and a growth orientation built into everything we do.
                    Whether it be opening a new warehouse, or making
                    our mobile app a bit more consumer friendly, we're
                    always experimenting, learning and growing!</h5>



                <h5 style={{ width: '500px', marginLeft: '30px', marginTop: '10px' }}>We take pride in being an employee-centric organization which keeps the best interest of its employees at the heart.</h5>
                <h5 style={{ width: '50px', marginTop: '10px' }}><img src="/assets/l1.png" class="d-block w-100" alt="..." height="60" />
                </h5>
            </div>
            <h5 style={{  marginRight: '500px', marginTop: '0px' }}><a href="#">Krishna Raghavan, Chief People Officer</a></h5> */}
           
            <div class="ficon i">
                  <a href="#" class="btn btn-link">Know More AboutUs</a>
              </div>
 

        <footer>
        <div class="inner-footer">
            <div class="container">
                <div class="row">
                    <div class="col-md-4 l-posts">
                        <h3 class="widget-heading">Our Base Rules</h3>
                        <ul>
                            <li> <a href="#">Supplying product in huge quantity.</a></li>
                            <li> <a href="#">Maintaining product quality.</a></li>
                            <li> <a href="#">No preservatives usage</a></li>
                            <li> <a href="#">Making quality Bi-products.</a></li>
                        </ul>
                    </div>
                    <div class="col-md-4 f-contact">
                        <h3 class="widget-heading">Contact</h3>
                        <a href="#">
                            <p><i class="fa fa-envelope"></i> DairyFarm@gmail.com</p>
                        </a>
                        <p><i class="fa fa-phone"></i> +91 9875677416</p>
                        <p><i class="fa fa-home"></i> USA | NewJersey
                            Loyola St, New York <br></br>
                                USA</p>
   
                    </div>
                </div>
            </div>
            </div>
   
            <div class="last-div">
                <div class="container">
                    <div class="row">
                        <div class="copyright">
                            &#169;copyright All Rights Reserved<br></br>
                            Designed by Bootstrap.
                        </div>
                    </div>
                </div>
                <div class="container">
                    <div class="row">
                        <ul class="social-network">
                            <li><a href="#" data-placement="top" title="Facebook"><i class="fa fa-facebook fa-1x"></i></a>
                            </li>
                            <li><a href="#" data-placement="top" title="Twitter"><i class="fa fa-twitter fa-1x"></i></a>
                            </li>
                            <li><a href="#" data-placement="top" title="Linkedin"><i class="fa fa-linkedin fa-1x"></i></a>
                            </li>
                            <li><a href="#" data-placement="top" title="Pinterest"><i class="fa fa-pinterest fa-1x"></i></a>
                            </li>
                            <li><a href="#" data-placement="top" title="Google plus"><i
                                        class="fa fa-google-plus fa-1x"></i></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
    </footer>
   
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-u1OknCvxWvY5kfmNBILK2hRnQC3Pr17a+RTT6rIHI7NnikvbZlHgTPOOmMi466C8" crossorigin="anonymous"></script>




        </div>


    );
}
export default AboutUs;