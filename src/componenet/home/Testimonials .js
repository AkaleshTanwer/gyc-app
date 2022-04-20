import React from 'react'
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SI1 from "../../assets/image/home/SI1.png"
import SI2 from "../../assets/image/home/SI2.png"
import SI3 from "../../assets/image/home/SI3.png"
import SI4 from "../../assets/image/home/SI4.png"
const Testimonials = () => {
    const testimonialsSettings = {
        centerPadding: "60px",
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
    };
    const Data = [
        {
            image: SI1,
            name: "John Due",
            position: "position",
            text: "The Counselors at Get Your College are very approachable and are available to answer any question at any time."
        },
        {
            image: SI2,
            name: "John Due",
            position: "position",
            text: "The Director and the entire team is best in class. They were so accessible, proficient, polished and patient."
        },
        {
            image: SI3,
            name: "John Due",
            position: "position",
            text: "Get Your college is just so amazing. The easy and standardised process to guide students yet suites to each different case. Fantastic staff and great results."
        },
        {
            image: SI4,
            name: "John Due",
            position: "position",
            text: "Such a great place to get your career a proper direction. The entire team is soo dedicated to providing you with what is best for you."
        },
        {
            image: SI1,
            name: "John Due",
            position: "position",
            text: "Worried about which college is best for you? Get Your College is the answer you are looking for. Excellent service. Thank you Atul sir."
        },
        {
            image: SI2,
            name: "John Due",
            position: "position",
            text: "I had a really good experience at Get Your College. Alisha maam is really helpful and supported me at every step. I would recommend GYC to students worried about college admissions."
        },
        {
            image: SI3,
            name: "John Due",
            position: "position",
            text: "The ease of communication and clarity at Get Your College are of a high standard, the overall experience is excellent."
        },
        {
            image: SI4,
            name: "John Due",
            position: "position",
            text: "Thank you so much for helping me in this tedious process and special thanks to Reema maam for giving such personalised guidance."
        },
        {
            image: SI1,
            name: "John Due",
            position: "position",
            text: "Atul sir really is one of a kind counsellor who knows the pros & cons of each option. Got each of my doubts answered in detail."
        },
        {
            image: SI2,
            name: "John Due",
            position: "position",
            text: "Simply the best place for your complete admission process. These guys guide you in each step."
        }
    ]
    return (
        <>
            <section className='testimonial-slider bg-light p-4'>
                <div className="container" data-aos="zoom-in">
                    <h1 className='main-heading m-4'>Testimonials</h1>
                    <Slider {...testimonialsSettings}>
                        {Data.map((item, index) => {
                            return <div key={index + 1} className="testimonialSlider text-center bg-white d-flex  align-items-center justify-content-center  shadow-lg mx-auto my-4"  >
                                <div className="row d-flex  align-items-center justify-content-center  mx-auto">
                                    <div className="col-md-4">
                                        <div className='left-content '>
                                            <div className='testimonial-image mx-auto'>
                                                <img src={item.image} className="card-img-top img-fluid  shadow-lg" alt="..." />
                                            </div>
                                            <h5 className="text-success my-4 fw-bold">{item.name}</h5>
                                            <h6 className="text-success mt-2">{item.position}</h6>
                                        </div>
                                    </div>
                                    <div className="col-md-8">
                                        <div className='right-content px-lg-4 '>
                                            <div className='quote-left  text-start'><i className="fa-solid fa-quote-left"></i></div>
                                            <div className='p-lg-4'>
                                                <p className="card-text">{item.text}</p>
                                            </div>
                                            <div className='quote-right  text-end mb-2 '><i className="fa-solid fa-quote-right "></i></div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        })}

                    </Slider>
                </div>
            </section>

        </>
    )
}


export default Testimonials
