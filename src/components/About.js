import React from 'react';

const About =()=> {
    return (
        <>
            <section id="about">
                <div className="row">
                    <div className="three columns">
                        <img className="profile-pic" src="images/profilepic.jpg" alt/>
                    </div>
                    <div className="nine columns main-col">
                        <h2>About Me</h2>
                        <p>
                            I graduated from Fordham University with a B.Sc. in Computer Science/Bioinformatics and currently work as a front end engineer for UBS.
                            I enjoy tackling complex problems with innovative and practical solutions and creating the best user experience in terms of visual design and performance.
                            I always strive to learn new technologies and add them to my skill set and repertoire. Look around and feel free to reach out if you have any questions.
                        </p>
                        <div className="row">
                            <div className="columns contact-details">
                                <h2>Contact Details</h2>
                                <p className="address">
                                    <span>Ronald Hung</span>
                                    <br/>
                                    <span>(732) 318-1571</span>
                                    <br/>
                                    <span>ron.h.hung@gmail.com</span>
                                </p>
                            </div>
                            <div className="columns download">
                                <p>
                                    <a download href="../../public/pdf/Ronald_Hung_Resume.pdf" className="button">
                                        <i className="fa fa-download"/>
                                        Download Resume
                                    </a>
                                </p>
                            </div>
                        </div>
                        {" "}
                    </div>
                    {" "}
                </div>
            </section>
            ;
        </>
    )
};

export default About;