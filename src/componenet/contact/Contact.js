import React from 'react'
import Footer from '../Footer'
import Header from '../Header'
import ContactBanner from './ContactBanner'
import ContactForm from './ContactForm'

function Contact() {
  return (
    <>
      <Header />
      <ContactBanner />
      <section className='address-and-form'>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 address bg-light">
              <div className='head-office'>
                <h6 className="main-heading text-start">Head Office</h6>
                <ul>
                  <li><i className="fas fa-map-marker-alt"></i><span>- 302, Balaji Corporate House, Above ICICI Bank,<br /> Zanzeerwala Square, New Palasia, Indore,<br />
                    Madhya Pradesh
                  </span></li>
                  {/* <li><i className="fa-solid fa-envelope"></i><span>admin@website.com</span></li> */}
                  <li><i className="fas fa-phone"></i><span>Phone: 0731-4904343,</span></li>
                  <li><i className="fas fa-phone"></i><span>Mobile: +91 9770501606</span></li>
                </ul>
              </div>
              <div className='branch-office'>
                <h6 className="main-heading text-start">Branch Office</h6>
                <ul>
                  {/* <li><i className="fa-solid fa-envelope"></i><span>admin@website.com</span></li> */}
                  <li><i className="fas fa-map-marker-alt"></i><span>F -2 R-18, Aastha Square, Yudhishter Marg,<br />
                    C- Scheme, Jaipur,<br />
                    Rajasthan
                  </span></li>
                  <li><span>Contact Person: Reema Jain</span></li>
                  <li><i className="fas fa-phone"></i><span>Mobile: +91 7737080773</span></li>

                </ul>

              </div>
            </div>
            <div className="col-lg-6 form">
              <h6 className="main-heading">Send Your Request</h6>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Contact