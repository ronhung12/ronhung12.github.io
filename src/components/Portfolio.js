import React from "react";

const Portfolio = () => {
    return (
        <>
            <section id="portfolio">
                <div className="row">
                    <div className="twelve columns collapsed">
                        <h1>Personal Projects</h1>
                        {/* portfolio-wrapper */}
                        <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                            <div className="columns portfolio-item">
                                <div className="item-wrap">
                                    <a href="#pharmacy" title>
                                        <img alt src="images/portfolio/pharmacy.jpg"/>
                                        <div className="overlay">
                                            <div className="portfolio-item-meta">
                                                <h5>Pharmacy Inventory Management System</h5>
                                                <p>Single Page Application</p>
                                            </div>
                                        </div>
                                        <div className="link-icon">
                                            <i className="icon-plus"/>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            {" "}
                            {/* item end */}
                            <div className="columns portfolio-item">
                                <div className="item-wrap">
                                    <a href="#shipping" title>
                                        <img alt src="images/portfolio/shipping.jpg"/>
                                        <div className="overlay">
                                            <div className="portfolio-item-meta">
                                                <h5>Shipping Label Maker</h5>
                                                <p>Widget</p>
                                            </div>
                                        </div>
                                        <div className="link-icon">
                                            <i className="icon-plus"/>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            {" "}
                            {/* item end */}
                            <div className="columns portfolio-item">
                                <div className="item-wrap">
                                    <a href="#quiz" title>
                                        <img alt src="images/portfolio/quiz.jpg"/>
                                        <div className="overlay">
                                            <div className="portfolio-item-meta">
                                                <h5>Quiz</h5>
                                                <p>Single Page Application</p>
                                            </div>
                                        </div>
                                        <div className="link-icon">
                                            <i className="icon-plus"/>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            {" "}
                            {/* item end */}
                            <div className="columns portfolio-item">
                                <div className="item-wrap">
                                    <a href="#burger" title>
                                        <img alt src="images/portfolio/burger.jpg"/>
                                        <div className="overlay">
                                            <div className="portfolio-item-meta">
                                                <h5>Burger Builder</h5>
                                                <p>Single Page Application</p>
                                            </div>
                                        </div>
                                        <div className="link-icon">
                                            <i className="icon-plus"/>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <br/>
                            <br/>
                            <h1>Future Projects</h1>
                            <div className="columns portfolio-item">
                                <div className="item-wrap">
                                    <a href="#basketball" title>
                                        <img alt src="images/portfolio/basketball.jpg"/>
                                        <div className="overlay">
                                            <div className="portfolio-item-meta">
                                                <h5>Basketball Analytics Web Scraper</h5>
                                                <p>Single Page Application</p>
                                            </div>
                                        </div>
                                        <div className="link-icon">
                                            <i className="icon-plus"/>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        {" "}
                    </div>
                    {" "}
                    {/* twelve columns end */}
                    {/* Modal Popup
	      --------------------------------------------------------------- */}
                    <div id="pharmacy" className="popup-modal mfp-hide">
                        <img
                            className="scale-with-grid"
                            src="images/portfolio/modals/m-pharmacy.jpg"
                            alt
                        />
                        <div className="description-box">
                            <h4><i className="fas fa-prescription-bottle-alt"/>{" "}Inventory Management System</h4>
                            <p>
                                <i className="fas fa-layer-group"/>
                                <p>React, Redux, Bootstrap, Axios, Victory, Spring, Hibernate, Java, Java Email Service,
                                Java Persistence API, Oracle 11g</p>
                                <b>Features</b>
                                <ul style={{listStyleType: "disc", marginLeft: '2em'}}>
                                    <li>
                                        Real time inventory and prescription management with persistent data and analytics
                                    </li>
                                    <li>
                                        Inventory and prescription history
                                    </li>
                                    <li>
                                        Automated Email service to customers on prescription status and updates
                                    </li>
                                    <li>
                                        Automated warning system for low inventory on certain items
                                    </li>
                                </ul>

                            </p>
                        </div>
                        <div className="link-box">
                            <a href="https://github.com/ronhung12/pharmacye2e" rel="noopener noreferrer" target="_blank">Details</a>
                            <a className="popup-modal-dismiss">Close</a>
                        </div>
                    </div>
                    {/* modal-01 End */}
                    <div id="shipping" className="popup-modal mfp-hide">
                        <img
                            className="scale-with-grid"
                            src="images/portfolio/modals/m-shipping.jpg"
                            alt
                        />
                        <div className="description-box">
                            <h4><i className="fas fa-shipping-fast"/>{" "}Shipping Label Maker</h4>
                            <p>
                                <i className="fas fa-layer-group"/>
                                <p>React, MaterialUI</p>
                                <b>About</b>
                                <p>Created with intent to be used in conjunction with the pharmacy inventory management system where it would autofill shipping label by user digression</p>

                            </p>
                        </div>
                        <div className="link-box">
                            <a href="https://github.com/ronhung12/shipping-label-maker" rel="noopener noreferrer" target="_blank">Details</a>
                            <a className="popup-modal-dismiss">Close</a>
                        </div>
                    </div>
                    {/* modal-02 End */}
                    <div id="quiz" className="popup-modal mfp-hide">
                        <img
                            className="scale-with-grid"
                            src="images/portfolio/modals/m-quiz.jpg"
                            alt
                        />
                        <div className="description-box">
                            <h4><i className="fas fa-shipping-fast"/>{" "}Quiz</h4>
                            <p>
                                <i className="fas fa-layer-group"/>
                                <p>React, Node, MaterialUI</p>
                                <b>About</b>
                                <p>Easy to use quiz, where users can also import their own questions into the Node server</p>

                            </p>
                        </div>
                        <div className="link-box">
                            <a href="https://github.com/ronhung12/quiz" rel="noopener noreferrer" target="_blank">Details</a>
                            <a className="popup-modal-dismiss">Close</a>
                        </div>
                    </div>
                    {/* modal-03 End */}
                    <div id="burger" className="popup-modal mfp-hide">
                        <img
                            className="scale-with-grid"
                            src="images/portfolio/modals/m-burger.jpg"
                            alt
                        />
                        <div className="description-box">
                            <h4>Burger Builder</h4>
                            <p>
                                <i className="fas fa-layer-group"/>
                                <p>React, Redux, FireBase</p>
                                <b>About</b>
                                <p>Created as a full stack application that allows you to build a burger, order it, and get the price and persist in FireBase database.</p>

                            </p>
                        </div>
                        <div className="link-box">
                            <a href="https://github.com/ronhung12/burger-application" rel="noopener noreferrer" target="_blank">Details</a>
                            <a className="popup-modal-dismiss">Close</a>
                        </div>
                    </div>
                    <div id="basketball" className="popup-modal mfp-hide">
                        <img
                            className="scale-with-grid"
                            src="images/portfolio/basketball.jpg"
                            alt
                        />
                        <div className="description-box">
                            <h4>Basketball Analytics Web Scraper</h4>
                            <p>
                                <i className="fas fa-layer-group"/>
                                <p>React, Redux, Python, NumPy, Flask</p>
                                <b>About</b>
                                <p>A web based application that has a backend access to webscraped data from {" "}
                                    <a href="https://www.basketball-reference.com" rel="noopener noreferrer" target="_blank">https://www.basketball-reference.com/</a>.
                                    This application would have applied algorithms to provide additional values to player statistics.
                                </p>
                            </p>
                        </div>
                        <div className="link-box">
                            <a href="https://www.basketball-reference.com" rel="noopener noreferrer" target="_blank">Details</a>
                            <a className="popup-modal-dismiss">Close</a>
                        </div>
                    </div>
                    {/* modal-04 End */}
                </div>
                {" "}
                {/* row End */}
            </section>
        </>
    )
};

export default Portfolio