import React from "react";

const Footer = () => {
    return (
        <>
            <footer id="footer">
                <div className="row">
                    <div className="twelve columns">
                        <h1>
                            <span>Get In Touch.</span>
                        </h1>
                        <ul className="social-links">
                            <li>
                                <a href="https://www.linkedin.com/in/ron-hung-33934a92/" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-linkedin"/>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/ron.sauce/" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-instagram"/>
                                </a>
                            </li>
                            <li>
                                <a href="mailto:ron.h.hung@gmail.com?Subject=Hi%20Ron" target="_top">
                                    <i className="fas fa-envelope-square"/>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div id="go-top">
                        <a className="smoothscroll" title="Back to Top" href="#home">
                            <i className="icon-up-open"/>
                        </a>
                    </div>
                </div>
            </footer>
            ;
        </>
    )
};

export default Footer