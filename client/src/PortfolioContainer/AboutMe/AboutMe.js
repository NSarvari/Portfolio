import React, { useEffect } from 'react';
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading';
import ScrollService from '../../utilities/ScrollService';
import Animations from '../../utilities/Animations';
import './AboutMe.css'

export default function AboutMe(props) {
    let fadeInScreenHandler = (screen) => {
        if (screen.fadeInScreen !== props.id) {
            return;
        }
        Animations.animation.fadeInScreen(props.id)
    }
    const fadeInSubscriptions = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler)

    const SCREEN_CONSTANTS = {
        description: "I am a software engineering student and currently I am 4th course in 'St. Cyril and St. Methodius' University of Veliko Tarnovo. I am motivated about improving with programming and I love my profession. I am hardworking and I learn fast. My confident is high and I want to improve my skills. Coding is my passion",
        highlights: {
            bullets: [
                "Front-end Developer",
                ".NET Developer",
                "University Lecturer",
                "High School Teacher",
            ],
            heading: "More About Me..."
        }
    }
    const renderHighlights = () => {
        return (
            SCREEN_CONSTANTS.highlights.bullets.map((value, i) => (
                <div className='highlights' key={i}>
                    <div className='highlights-blob'></div>
                    <span>{value}</span>
                </div>
            ))
        )
    }

    return (
        <div className='about-me-container screen-container fade-in' id={props.id || ""}>
            <div className='about-me-parent'>
                <ScreenHeading title={'About Me'} subHeading={'Why Choose Me?'} />
                <div className='about-me-card'>
                    <div className='about-me-profile'></div>
                    <div className='about-me-details'>
                        <span className='about-me-description'>{SCREEN_CONSTANTS.description}</span>
                        <div className='about-me-highlights'>
                            <div className='highlights-heading'>
                                <span>{SCREEN_CONSTANTS.highlights.heading}</span>
                            </div>
                            {renderHighlights()}
                        </div>
                        <div className='about-me-options'>
                            <button className='btn primary-btn' onClick={()=>ScrollService.scrollHandler.scrollToHireMe()}>
                                {""}
                                Hire Me{" "}
                            </button>
                            <a href='Nabila-Sarvari.pdf' download="Nabila Sarvari.pdf">
                                <button className='btn highlighted-btn'>Get Resume</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}