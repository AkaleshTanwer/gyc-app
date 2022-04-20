import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import Counsellors from './Counsellors'
import Director from './Director'
import SisterConcern from './SisterConcern'
import Our_Process from './Our_process'
import Testimonials from '../home/Testimonials '
import img from '../../assets/image/home/slider3.jpg'
function About() {
    return (
        <div>
            <Header />

            <div className="About_Top">
                <div className="background-container">
                    <div className="bg-1" data-aos="fade-right"
                        data-aos-offset="300"
                        data-aos-easing="ease-in-sine"></div>
                    <div className="bg-2" data-aos="fade-left"
                        data-aos-offset="300"
                        data-aos-easing="ease-in-sine"></div>
                </div>
                <div className="about-container" data-aos="flip-up" data-aos-duration="10000">
                    {/* <div className="image-container">
                        <img src={img} alt="" />
                    </div> */}
                    <div className="text-container">
                        <div className='hed'>
                            <h2>GET YOUR COLLEGE</h2>
                            <h3>Bridging the gap between Dream & Destiny</h3>
                        </div>
                        <h4>INTRODUCTION</h4>
                        <p>GET YOUR COLLEGE (GYC) is an initiative, steered by Mr Atul Jain & Mrs Alisha Jain who have combined experience and expertise in the field of educational consultancies, for over 11 years now. It aims to “bridge the gap between the aspirants and the institutions, which they desire and deserve.” We are young and passionate #Edupreneurs, having a base in Indore and a global mindset. With alumni from Mumbai University, Symbiosis Institute of Management and Devi Ahilya Vishwavidhyalaya as our founding members, we understand the significance of quality education and its impact on young minds and their careers. Our idea and aim is to become the leaders in the field of student counselling, in India, upholding honesty and integrity, above all. We nurture your dreams with utmost sincerity.</p>
                        <p>Through the pan-India reach we have, our objective is to provide the students, with multitudinous options to choose from, among the most prominent colleges, in India. It’s our attempt to make the distance between the aspirants and the colleges, a little shorter. We thrive to achieve this by outreaching the virtual boundaries and designing the most appropriate study programme for you, available nationally.</p>
                        <p>Like we believe and often say, “You’ve got your dreams, and we’ve got your back,” It’s our pleasure to serve the achievers in the fields of commerce and design.</p>
                        <button className=" Home_btn">Apply Now</button>
                    </div>
                </div>
            </div>
            <Director />
            <Counsellors />
            <Our_Process />
            <SisterConcern />
            <Testimonials />
            <Footer />

        </div>
    )
}

export default About
