import React from 'react';
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div>
      <footer className="ftco-footer ftco-bg-dark ftco-section">
        <div className="container">
          <div className="row mb-5">
            <div className="col-md-6 col-lg-3">
              <div className="ftco-footer-widget mb-5">
                <div className="block-23 mb-3">
                  <div className="row">
                    <div className="col-md-6">
                      <h2 className="ftco-heading-2">Head Office</h2>
                      <ul style={{ paddingLeft: 0 }}>
                        <li><a href="#"><span className="text">302, Balaji Corporate House, Above ICICI Bank,</span></a></li>
                        <li><a href="#"><span className="text">Zanzeerwala Square, New Palasia, Indore,</span></a></li>
                        <li><a href="#"><span className="text">Madhya Pradesh</span></a></li>
                        <li><a href="#"><span className="icon icon-phone" /><span className="text">Phone: 0731-4904343,</span></a></li>
                        <li><a href="#"><span className="icon icon-phone" /><span className="text">Mobile: +91 9770501606</span></a></li>
                        {/* <li><a href="#"><span className="icon icon-envelope" /><span className="text">info@yourdomain.com</span></a></li> */}
                        {/* <li><span className="icon icon-map-marker" /><span className="text">203 Fake St. Mountain
                    View, San Francisco, California, USA</span></li> */}
                      </ul>
                    </div>
                    <div className="col-md-6">

                      <h2 className="ftco-heading-2">Branch Office</h2>

                      <ul style={{ paddingLeft: 0 }}>
                        <li><a href="#"><span className="text">F -2 R-18, Aastha Square, Yudhishter Marg,</span></a></li>
                        <li><a href="#"><span className="text">C- Scheme, Jaipur,</span></a></li>
                        <li><a href="#"><span className="text">Rajasthan</span></a></li>
                        <li><a href="#"><span className="icon icon-phone" /><span className="text">Contact Person: Reema Jain</span></a></li>
                        <li><a href="#"><span className="icon icon-phone" /><span className="text">Mobile: +91 7737080773</span></a></li>
                        {/* <li><a href="#"><span className="icon icon-envelope" /><span className="text">info@yourdomain.com</span></a></li> */}
                        {/* <li><span className="icon icon-map-marker" /><span className="text">203 Fake St. Mountain
                    View, San Francisco, California, USA</span></li> */}
                      </ul>
                    </div>
                  </div>

                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="ftco-footer-widget mb-5">
                <h2 className="ftco-heading-2">Recent Blog</h2>
                <div className="block-21 mb-4 d-flex">
                  <a className="blog-img mr-4" style={{ "backgroundImage": "url(images/image_1.jpg)" }} />
                  <div className="text">
                    <h3 className="heading"><a href="#">Even the all-powerful Pointing has no control about</a>
                    </h3>
                    <div className="meta">
                      <div><a href="#"><span className="icon-calendar" /> June 27, 2019</a></div>
                      <div><a href="#"><span className="icon-person" /> Admin</a></div>
                      <div><a href="#"><span className="icon-chat" /> 19</a></div>
                    </div>
                  </div>
                </div>
                <div className="block-21 mb-5 d-flex">
                  <a className="blog-img mr-4" style={{ "backgroundImage": "url(images/image_2.jpg)" }} />
                  <div className="text">
                    <h3 className="heading"><a href="#">Even the all-powerful Pointing has no control about</a>
                    </h3>
                    <div className="meta">
                      <div><a href="#"><span className="icon-calendar" /> June 27, 2019</a></div>
                      <div><a href="#"><span className="icon-person" /> Admin</a></div>
                      <div><a href="#"><span className="icon-chat" /> 19</a></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="ftco-footer-widget mb-5 ml-md-4">
                <h2 className="ftco-heading-2">Quick Links</h2>
                <ul className="list-unstyled">
                  <li><Link to="/"><span className="ion-ios-arrow-round-forward mr-2" />Home</Link></li>
                  <li><Link to="/about"><span className="ion-ios-arrow-round-forward mr-2" />About</Link></li>
                  <li><Link to="/college"><span className="ion-ios-arrow-round-forward mr-2" />College</Link></li>
                  <li><Link to="/exams"><span className="ion-ios-arrow-round-forward mr-2" />Exams</Link></li>
                  <li><Link to="/gdpi"><span className="ion-ios-arrow-round-forward mr-2" />GDPI</Link></li>
                  <li><Link to="/blog"><span className="ion-ios-arrow-round-forward mr-2" />Blog</Link></li>
                  <li><Link to="/careers"><span className="ion-ios-arrow-round-forward mr-2" />Careers</Link></li>
                  <li><Link to="/contact"><span className="ion-ios-arrow-round-forward mr-2" />Contact Us</Link></li>
                  <li><Link to="/pp"><span className="ion-ios-arrow-round-forward mr-2" />Privacy policy</Link></li>
                  <li><Link to="/terms"><span className="ion-ios-arrow-round-forward mr-2" />Terms</Link></li>
                </ul>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="ftco-footer-widget mb-5">
                <h2 className="ftco-heading-2">Subscribe Us!</h2>
                <form action="#" className="subscribe-form">
                  <div className="form-group">
                    <input type="text" className="form-control mb-2 text-center" placeholder="Enter email address" />
                    <input type="submit" defaultValue="Subscribe" className="form-control submit px-3" />
                  </div>
                </form>
              </div>
              <div className="ftco-footer-widget mb-5">
                <h2 className="  mb-0">Connect With Us</h2>
                <ul className="ftco-footer-social list-unstyled float-md-left float-lft mt-3">
                  <li className="ftco-animate fadeInUp ftco-animated"><a href="#"><span className="icon-twitter" /> <i className="fa-brands fa-twitter"></i></a></li>
                  <li className="ftco-animate fadeInUp ftco-animated"><a href="#"><span className="icon-facebook" /> <i className="fa-brands fa-facebook"></i></a></li>
                  <li className="ftco-animate fadeInUp ftco-animated"><a href="#"><span className="icon-instagram" /> <i className="fa-brands fa-instagram"></i></a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 text-center">
              <p>
                {/* a back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                Get Your College © 2022 All rights reserved |
                Made with <i className="icon-heart" aria-hidden="true" /> <i className="fa-solid fa-heart"></i> by <a href="https://www.aurasoftsolutions.com/" target="_blank">Aurasoft</a>
                {/* a back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer