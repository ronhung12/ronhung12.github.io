import React from 'react';

const Resume = () => {
    return (
        <>
        <section id="resume">
            <div className="row education">
                <div className="three columns header-col">
                    <h1>
                        <span>Education</span>
                    </h1>
                </div>
                <div className="nine columns main-col">
                    <div className="row item">
                        <div className="twelve columns">
                            <h3>Fordham University</h3>
                            <p className="info">
                                B.Sc. in Computer Science, Minor in Bioinformatics, Pre-Medical Track <span>•</span>{" "}
                                <em className="date">August 2018</em>
                            </p>
                            <span>Jogue's Scholarship</span>
                            <br/>
                            <span>Orchestra Cellist</span>
                            <br/>
                            <span>Recreational Basketball and Soccer</span>
                            <br/>
                            <span>Computer Science Society Member </span>
                            <br/>
                            <span>Pre-Medical Society Member</span>
                        </div>
                    </div>
                    {" "}
                    {/* item end */}
                </div>
                {" "}
                {/* main-col end */}
            </div>
            {" "}
            {/* End Education */}
            <div className="row work">
                <div className="three columns header-col">
                    <h1>
                        <span>Work</span>
                    </h1>
                </div>
                <div className="nine columns main-col">
                    <div className="row item">
                        <div className="twelve columns">
                            <h3>Citigroup</h3>
                            <p className="info">
                                Senior Information Security Analyst <span>•</span>{" "}
                                <em className="date">June 2020 - Present</em>
                            </p>
                            <ul style={{listStyleType: "disc", textAlign: 'left'}}>
                                <li>Created a cloud testing and compliance suite using Terraform,
                                    terraform-compliance, and Python</li>
                                <li>Triaged Citi’s internet/intranet application source code using Checkmarx</li>
                                <li>Identified and escalated security issues in source code and managed
                                    code remediation using Checkmarx and Archer</li>
                                <li>Resolved ServiceNow tickets that ranged from full code triaging to
                                    working with software development teams to remediate security
                                    issues</li>
                                <li>Created a Python testbed to check effectiveness of our CxAudit queries</li>
                            </ul>
                        </div>
                    </div>
                    <br/>
                    <br/>
                    <div className="row item">
                        <div className="twelve columns">
                            <h3>UBS Group AG</h3>
                            <p className="info">
                                Frontend Engineer <span>•</span>{" "}
                                <em className="date">September 2019 - May 2020</em>
                            </p>
                            <ul style={{listStyleType: "disc", textAlign: 'left'}}>
                                <li>Constructed single page applications from ground-up such as a
                                    smart search for OCR (optical character recognition) translated
                                    nancial documents and ETL workow editor using ReactJS, Flask,
                                    Cassandra, and DataStax</li>
                                <li>Implemented RESTful APIs and rendered PDF streams with PDF.JS.</li>
                                <li>Created complex stateful and stateless React components using
                                    JSX, CSS3, and LESS or used specialized components from MaterialUI
                                    or AntDesign</li>
                            </ul>
                        </div>
                    </div>
                    <br/>
                    <br/>
                    {" "}
                    {/* item end */}
                    <div className="row item">
                        <div className="twelve columns">
                            <h3>Mercury Systems Inc</h3>
                            <p className="info">
                                Full Stack Developer <span>•</span>{" "}
                                <em className="date">Sept 2018 - August 2019</em>
                            </p>
                            <ul style={{listStyleType: "disc", textAlign: 'left'}}>
                                <li>Provided clients with technical services in Java, Spring, React, Oracle 11g, HTML5/CSS3, and Node/Express.</li>
                                <li>Participated in design and implementation of complex React components, Java files, and database design.</li>
                                <li>Implemented and designed RESTFUL API endpoints and corresponding JSON responses.</li>
                            </ul>
                        </div>
                    </div>
                    {" "}
                    <br/>
                    <br/>
                    <div className="row item">
                        <div className="twelve columns">
                            <h3>Chinese Academy of Sciences, Institute of Microbiology</h3>
                            <p className="info">
                                Research Assistant <span>•</span>{" "}
                                <em className="date">January 2019 - August 2019</em>
                            </p>
                            <ul style={{listStyleType: "disc", textAlign: 'left'}}>
                                <li>Ran PCR over 50+ different plasmids and used the latest bioinformatics technology for cancer and tuberculosis research.</li>
                                <li>Became fluent in Perl programming language and created scripts, implemented CGI and algorithms in a sub-project.</li>
                                <li>Designed spacers and ran CRISPR-Cas9 experiments for a synergistic cancer and TB treatment research involving marine microbes.</li>
                            </ul>
                        </div>
                    </div>
                    {/* item end */}
                </div>
                {" "}
                {/* main-col end */}
            </div>
            {" "}
            {/* End Work */}
            <div className="row skill">
                <div className="three columns header-col">
                    <h1>
                        <span>Skills</span>
                    </h1>
                </div>
                <div className="nine columns main-col">
                    <p>
                        As a software engineer I am versed in single page application architecture, web design, application architecture, database design, MVC and working in Agile environments. I have knowledge
                        of machine learning and bioinformatics with Perl,MATLAB, and Python.
                    </p>
                    <div className="skills">
                        <ul style={{textAlign: 'left'}}>
                            <li>
                                <i style={{color: '#F1E54F'}} className="fab fa-js-square fa-3x"/>
                                <span style={{padding: '2em'}}>3+ years of vanilla <b>JavaScript</b> experience in an academic and professional environment.</span>
                            </li>
                            <br/>
                            <li>
                                <i style={{color: '#62D4FA'}} className="fab fa-react fa-4x"/>
                                <span style={{padding: '2em'}}>2+ years of <b>ReactJS</b> experience in a professional environment.</span>
                            </li>
                            <br/>
                            <li>
                                <i style={{color: '#E34F26'}} className="fab fa-html5 fa-3x"/>
                                {" "}
                                <i style={{color: '#53A7DC'}} className="fab fa-css3-alt fa-3x"/>
                                <span style={{padding: '2em'}}>2+ years of web design experience with <b>HTML/CSS</b> in a professional environment.</span>
                            </li>
                            <br/>
                            <li>
                                <i style={{color: '#6CC24A'}} className="fab fa-node fa-4x"/>
                                <span style={{padding: '2em'}}>1+ year of <b>NodeJS</b> in an academic and professional environment.</span>
                            </li>
                            <br/>
                            <li>
                                <i style={{color: '#E34F26'}} className="fab fa-bootstrap fa-3x"/>
                                <span style={{padding: '2em'}}>1+ year of using libraries like <b>Material/Bootstrap/AntDesign</b> in a professional setting.</span>
                            </li>
                            <br/>
                            <li>
                                <i style={{color: '#FF0000'}} className="fas fa-database fa-3x"/>
                                <span style={{padding: '2em'}}>1+ year of database experience with <b>MySQL/Oracle/MongoDB</b> in a professional setting.</span>
                            </li>
                            <br/>
                            <li>
                                <i style={{color: '#F89820'}} className="fab fa-java fa-4x"/>
                                <span style={{padding: '2em'}}>1+ year of backend experience with <b>Java/C++</b> in a professional and academic setting.</span>
                            </li>
                            <br/>
                            <li>
                                <i style={{color: '#4584B6'}} className="fab fa-python fa-3x"/>
                                <span style={{padding: '2em'}}>1+ year of coding experience with <b>Python/Perl</b> in a professional and academic setting.</span>
                            </li>
                            <br/>
                            <li>
                                <i className="fas fa-info-circle fa-2x"/>
                                <span style={{padding: '2em'}}>Experience with <b>Angular/AWS/UNIX/JQuery/TypeScript</b> in some capacity.</span>
                            </li>
                        </ul>
                    </div>
                    {/* end skill-bars */}
                </div>
                {" "}
                {/* main-col end */}
            </div>
            {" "}
            {/* End skills */}
        </section>
        </>
)
};

export default Resume