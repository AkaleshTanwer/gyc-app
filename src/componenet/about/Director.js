import React from 'react';
import img1 from '../../assets/image/about/director1.jpg'
import img2 from '../../assets/image/about/director2.jpg'
function Director() {
    return (
        <div className='container-fluid p-md-5 Director'>
            <h1>ABOUT THE PROTAGONISTS</h1>
            <div className="card container " >
                <div className="row g-0 my-4 f">
                    <div className="col-md-5 " data-aos="fade-right"
                        data-aos-offset="300"
                        data-aos-easing="ease-in-sine">
                        <img src={img1} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-7 text d-flex  align-items-center" data-aos="fade-left"
                        data-aos-offset="300"
                        data-aos-easing="ease-in-sine">
                        <div className="card-body p-0 m-auto ">
                            <h4 className="card-title">ATUL JAIN <span> (CEO & Founder)</span></h4>
                            {/* <h5 className="card-title">Director Po</h5> */}
                            <p className="card-text">An educationist by heart and an edupreneur by choice. He has counselled and shaped the careers of more than 25,000 students over the years. An alumnus from Mumbai University, and a Gold Medallist in MBA, he has worked for the most renowned companies and organisations, gaining valuable experience in the field of educational consultancy and management and operation, like Dale Carnegie, EduRiser (A Videocon Group Company). He has also steered EduBirds (One of Indore’s most successful commerce and competitive exam coaching with over 2000+ students annually  in 6 Centres) for almost 8 Years and overall 15 years of Experience in coaching and counselling domain.</p>
                            {/* <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p> */}
                            <h4>
                                <ul>
                                    <li>  <a href="#"><i className="fa-brands fa-twitter"></i></a> </li>
                                    <li> <a href="#"><i className="fa-brands fa-facebook"></i></a> </li>
                                    <li> <a href="#"><i className="fa-brands fa-linkedin"></i></a> </li>
                                </ul>
                            </h4>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card container my-md-4 my-3" >
                <div className="row g-0">
                    <div className="col-md-7 d-flex  text align-items-center" data-aos="fade-right"
                        data-aos-offset="300"
                        data-aos-easing="ease-in-sine">
                        <div className="card-body p-0 m-auto ">
                            <h4 className="card-title">Alisha Jain <span>(Director)</span></h4>
                            {/* <h5 className="card-title">Director Po</h5> */}
                            <p className="card-text">A Symbiosis Alumnus with 7+ Years of Experience as a counsellor, she has been conducting training, workshops, lectures, presentations, and other events to develop career planning and employability skills for students. She plays a crucial role in providing the best-suited opportunities to students from all walks of life and has vast knowledge and passion for this field. </p>
                            {/* <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p> */}
                            <h4>
                                <ul>
                                    <li>  <a href="#"><i className="fa-brands fa-twitter"></i></a> </li>
                                    <li> <a href="#"><i className="fa-brands fa-facebook"></i></a> </li>
                                    <li> <a href="#"><i className="fa-brands fa-linkedin"></i></a> </li>
                                </ul>
                            </h4>
                        </div>
                    </div>
                    <div className="col-md-5 " data-aos="fade-left"
                        data-aos-offset="300"
                        data-aos-easing="ease-in-sine">
                        <img src={img2} className="img-fluid rounded-start" alt="..." />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Director