import React from 'react';
import Typical from 'react-typical';
import ScrollService from '../../../utilities/ScrollService';
import "./Profile.css";

export default function Profile() {
    return (
        <div className='profile-container'>
            <div className='profile-parent'>
                <div className='profile-details'>
                    <div className='colz'>
                        <div className='colz-icon'>
                            <a href='https://www.facebook.com/profile.php?id=100076119481163'>
                                <i className='fa fa-facebook-square'></i>
                            </a>
                            <a href='https://www.instagram.com/nabilasarvari2001/'>
                                <i className='fa fa-instagram'></i>
                            </a>
                        </div>
                    </div>
                    <div className='profile-details-name'>
                        <span className='primary-text'>
                            {" "}
                            Hello, I'm <span className='highlighted-text'>Nabila</span>
                        </span>
                    </div>
                    <div className='profile-details-role'>
                        <span className='primary-text'>
                            {" "}
                            <h1>
                                {" "}
                                <Typical
                                    loop={Infinity}
                                    steps={[
                                        "FrontEnd Developer 💻",
                                        1000,
                                        ".NET Developer 👩‍💻",
                                        1000,
                                        "Lecturer 👩‍🏫",
                                        1000,
                                    ]}
                                />
                            </h1>
                            <span className='profile-role-tagline'>
                                In love with building and designing of the websites with interesting technologies.
                            </span>
                        </span>
                    </div>
                    <div className='profile-options'>
                        <button className='btn primary-btn' onClick={() => ScrollService.scrollHandler.scrollToHireMe()}>
                            {""}
                            Hire Me{" "}
                        </button>
                        <a href='Nabila-Sarvari.pdf' download="Nabila Sarvari.pdf">
                            <button className='btn highlighted-btn'>Get Resume</button>
                        </a>
                    </div>
                </div>
                <div className='profile-picture'>
                    <div className='profile-picture-background'></div>
                </div>
            </div>
        </div>
    )
}