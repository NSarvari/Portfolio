import React, { useEffect, useState } from 'react'
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading'
import ScrollService from '../../utilities/ScrollService'
import Animations from '../../utilities/Animations'
import './Resume.css'

export default function Resume(props) {
    const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
    const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});

    let fadeInScreenHandler = (screen) => {
        if (screen.fadeInScreen !== props.id) return;

        Animations.animation.fadeInScreen(props.id);
    };
    const fadeInSubscription =
        ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

    /* REUSABLE MINOR COMPONENTS */
    const ResumeHeading = (props) => {
        return (
            <div className="resume-heading">
                <div className="resume-main-heading">
                    <div className="heading-bullet"></div>
                    <span>{props.heading ? props.heading : ""}</span>
                    {props.fromDate && props.toDate ? (
                        <div className="heading-date">
                            {props.fromDate + "-" + props.toDate}
                        </div>
                    ) : (
                        <div></div>
                    )}
                </div>
                <div className="resume-sub-heading">
                    <span>{props.subHeading ? props.subHeading : ""}</span>
                </div>
                <div className="resume-heading-description">
                    <span>{props.description ? props.description : ""}</span>
                </div>
            </div>
        );
    };


    const resumeBullets = [
        { label: "Education", logoSrc: "education.svg" },
        { label: "Job Experience", logoSrc: "work-history.svg" },
        { label: "Programming Skills", logoSrc: "programming-skills.svg" },
        { label: "Projects", logoSrc: "projects.svg" },
        { label: "Interests", logoSrc: "interests.svg" },
    ];

    const programmingSkillsDetails = [
        { skill: "JavaScript", ratingPercentage: 80 },
        { skill: "React JS", ratingPercentage: 80 },
        { skill: "SQL", ratingPercentage: 90 },
        { skill: ".NET C#", ratingPercentage: 50 },
        { skill: "HTML", ratingPercentage: 85 },
        { skill: "CSS", ratingPercentage: 85 },
        { skill: "Bootstrap", ratingPercentage: 85 },
        { skill: "WordPress", ratingPercentage: 80 },
    ];

    const projectsDetails = [
        {
            title: "Personal Portfolio Website",
            duration: { fromDate: "September 2022", toDate: "November 2022" },
            description: "A personal portfolio project for showing all my details, projects and skills in one place.",
            subHeading: "Technologies Used: React JS, Bootstrap",
        },
    ];

    const resumeDetails = [
        <div className='resume-screen-container' key="education">
            <ResumeHeading
                heading={"St. Cyril and St. Methodius' University of Veliko Tarnovo"}
                subHeading={"Bachelor Degree, Software Engineering"}
                fromDate={"2019"}
                toDate={"Present"}
            />
            <ResumeHeading
                heading={"St. Cyril and St. Methodius' University of Veliko Tarnovo"}
                subHeading={"Bachelor Degree, Module For Professional Qualification 'Teacher' (IT Teacher)"}
                fromDate={"2021"}
                toDate={"Present"}
            />
            <ResumeHeading
                heading={"SoftUni, Sofia"}
                subHeading={"JavaScript Courses"}
                fromDate={"2020"}
                toDate={"2021"}
            />
            <ResumeHeading
                heading={"High School Nikolay Katranov"}
                subHeading={"Language School- English and German"}
                fromDate={"2016"}
                toDate={"2019"}
            />
        </div>,
        <div className="resume-screen-container" key="work-experience">
            <div className="experience-container">
                <ResumeHeading
                    heading={"St. Cyril and St. Methodius' University of Veliko Tarnovo"}
                    subHeading={"Lecturer's Assistant"}
                    fromDate={"2022"}
                    toDate={"Present"}
                />

                <div className="experience-description">
                    <span className="resume-description-text">
                        Currently working as a lecturer's assistant in the university.
                    </span>
                </div>
                <div className="experience-description">
                    <span className="resume-description-text">
                        - Teaching to 4th course students.
                    </span>
                    <br />
                </div>
            </div>
            <div className="experience-container">
                <ResumeHeading
                    heading={"Mathematic High School 'Vasil Drumev'"}
                    subHeading={"High School Teacher"}
                    fromDate={"2022"}
                    toDate={"Present"}
                />
                <div className="experience-description">
                    <span className="resume-description-text">
                        Currently working as a high school teacher.
                    </span>
                </div>
                <div className="experience-description">
                    <span className="resume-description-text">
                        - Teaching Software Developing with C# to 11th grade students.
                    </span>
                    <br />
                </div>
            </div>
        </div>,
        <div className='resume-screen-container programming-skills-container' key="programming-skills">
            {programmingSkillsDetails.map((skill, index) => (
                <div className='skill-parent' key={index}>
                    <div className='heading-bullet'></div>
                    <span>{skill.skill}</span>
                    <div className='skill-percentage'>
                        <div style={{ width: skill.ratingPercentage + "%" }}
                            className='active-percentage-bar'>

                        </div>
                    </div>
                </div>
            ))}
        </div>,

        <div className='resume-screen-container' key="projects">
            {projectsDetails.map((projectsDetails, index) => (
                <ResumeHeading
                    key={index}
                    heading={projectsDetails.title}
                    subHeading={projectsDetails.subHeading}
                    description={projectsDetails.description}
                    fromDate={projectsDetails.duration.fromDate}
                    toDate={projectsDetails.duration.toDate}
                />
            ))}
        </div>,


        <div className='resume-screen-container' key="interests">
            <ResumeHeading
                heading="Teaching"
                description="I love to share my knowledge with others and I enjoy it very much."
            />
            <ResumeHeading
                heading="Music"
                description="For me music is love and emotion. It always helps me to feel better."
            />
            <ResumeHeading
                heading="Book"
                description="A friend when I am alone. It takes me to a trip around the world and I enjoy spending time by reading."
            />
                <ResumeHeading
                heading="Movie"
                description="I love watching movie with friends. I enjoy it."
            />
        </div>,
    ];

    const handleCarousal = (index) => {
        let offsetHeight = 360;

        let newCarousalOffset = {
            style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
        };

        setCarousalOffsetStyle(newCarousalOffset);
        setSelectedBulletIndex(index);
    };

    const getBullets = () => {
        return resumeBullets.map((bullet, index) => (
            <div
                onClick={() => handleCarousal(index)}
                className={
                    index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
                }
                key={index}
            >
                <img
                    className="bullet-logo"
                    src={require(`../../assets/Resume/${bullet.logoSrc}`)}
                    alt="B"
                />
                <span className="bullet-label">{bullet.label}</span>
            </div>
        ));
    };


    const getResumeScreens = () => {
        return (
            <div
                style={carousalOffsetStyle.style}
                className="resume-details-carousal"
            >
                {resumeDetails.map((ResumeDetail) => ResumeDetail)}
            </div>
        );
    };

    useEffect(() => {
        return () => {
            /* UNSUBSCRIBE THE SUBSCRIPTIONS */
            fadeInSubscription.unsubscribe();
        };
    }, [fadeInSubscription]);

    return (
        <div
            className="resume-container screen-container fade-in"
            id={props.id || ""}>
            <div className="resume-content">
                <ScreenHeading title={"Resume"} subHeading={"My formal Bio Details"} />
                <div className="resume-card">
                    <div className="resume-bullets">
                        <div className="bullet-container">
                            <div className="bullet-icons"></div>
                            <div className="bullets">{getBullets()}</div>
                        </div>
                    </div>

                    <div className="resume-bullet-details">{getResumeScreens()}</div>
                </div>
            </div>
        </div>
    );
};