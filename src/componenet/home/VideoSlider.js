import React from 'react'
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';

const VideoSlider = () => {
    const settings = {
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,

    };
    return (
        <>
            <section className="video-slider bg-light p-4">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <h4 className='main-heading m-4'>Latest at GYC</h4>

                            <div className="exam-container lhs">
                                <div className="marquee-box">
                                    <ul className='marquee'>
                                        <li>
                                            <p>
                                                <Link to={"/exams"}>
                                                    Exam title - Lorem ipsum dolor sit amet consectetur.
                                                </Link>
                                            </p>

                                        </li>
                                        <hr style={{ color: "#ffa500", height: "2px" }} />
                                        <li>
                                            <p>
                                                <Link to={"/exams"}>
                                                    Exam title - Lorem ipsum dolor sit amet consectetur.
                                                </Link>
                                            </p>

                                        </li>
                                        <hr style={{ color: "#ffa500", height: "2px" }} />

                                        <li>
                                            <p>
                                                <Link to={"/exams"}>
                                                    Exam title - Lorem ipsum dolor sit amet consectetur.
                                                </Link>
                                            </p>

                                        </li>
                                        <hr style={{ color: "#ffa500", height: "2px" }} />

                                        <li>
                                            <p>
                                                <Link to={"/exams"}>
                                                    Exam title - Lorem ipsum dolor sit amet consectetur.
                                                </Link>
                                            </p>

                                        </li>
                                        <hr style={{ color: "#ffa500", height: "2px" }} />

                                        <li>
                                            <p>
                                                <Link to={"/exams"}>
                                                    Exam title - Lorem ipsum dolor sit amet consectetur.
                                                </Link>
                                            </p>

                                        </li>
                                        <hr style={{ color: "#ffa500", height: "2px" }} />

                                        <li>
                                            <p>
                                                <Link to={"/exams"}>
                                                    Exam title - Lorem ipsum dolor sit amet consectetur.
                                                </Link>
                                            </p>

                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-1"></div>
                        <div className="col-lg-7 rhs">
                            <h4 className='main-heading m-4'>Video</h4>

                            <div>
                                <Slider {...settings} className="shadow-lg">
                                    <div >
                                        <div className="row" style={{ padding: "20px" }}>

                                            <div className="col-sm-6">
                                                <h3 className='main-heading'>Video Heading</h3>
                                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores veritatis quis architecto dolorem distinctio ipsam cupiditate deleniti. Magnam error alias rem ullam magni aliquam deleniti.</p>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className='video-container'>
                                                    <iframe className='video' src="https://www.youtube.com/embed/kT7KU1dM6Ps" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div >
                                        <div className="row" style={{ padding: "20px" }}>

                                            <div className="col-sm-6 ">
                                                <h3 className='main-heading'>Video Heading</h3>
                                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores veritatis quis architecto dolorem distinctio ipsam cupiditate deleniti. Magnam error alias rem ullam magni aliquam deleniti.</p>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className='video-container'>
                                                    <iframe className='video' src="https://www.youtube.com/embed/kT7KU1dM6Ps" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div >
                                        <div className="row" style={{ padding: "20px" }}>

                                            <div className="col-sm-6">
                                                <h3 className='main-heading'>Video Heading</h3>
                                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores veritatis quis architecto dolorem distinctio ipsam cupiditate deleniti. Magnam error alias rem ullam magni aliquam deleniti.</p>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className='video-container'>
                                                    <iframe className='video' src="https://www.youtube.com/embed/kT7KU1dM6Ps" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                                </div>
                                            </div>
                                        </div>
                                    </div>



                                </Slider>
                            </div>
                        </div>
                    </div>


                </div>
            </section >
        </>
    )
}

export default VideoSlider;
