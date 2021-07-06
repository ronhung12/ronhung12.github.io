import React from 'react';

const Header =()=> {
    return (
        <>
            <header id="home">
                <nav id="nav-wrap">
                    <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
                        Show navigation
                    </a>
                    <a className="mobile-btn" href="#" title="Hide navigation">
                        Hide navigation
                    </a>
                    <ul id="nav" className="nav">
                        <li className="current">
                            <a className="smoothscroll" href="#home">
                                Home
                            </a>
                        </li>
                        <li>
                            <a className="smoothscroll" href="#about">
                                About
                            </a>
                        </li>
                        <li>
                            <a className="smoothscroll" href="#resume">
                                Resume
                            </a>
                        </li>
                        <li>
                            <a className="smoothscroll" href="#portfolio">
                                Projects
                            </a>
                        </li>
                    </ul>{" "}
                    {/* end #nav */}
                </nav>{" "}
                {/* end #nav-wrap */}
                <div className="row banner">
                    <div className="banner-text">
                        <h1 className="responsive-headline">I'm Ronald Hung</h1>
                        <h3>
                            I'm a <span>full stack software engineer</span> specializing in frontend development for complex scalable web applications. You can learn more {" "}
                            <a className="smoothscroll" href="#about">
                                about me
                            </a>
                            {" "}and view my{" "}
                            <a className="smoothscroll" href="#resume">
                                resume
                            </a>
                            .
                        </h3>
                        <hr />
                        <ul className="social">
                            <li>
                                <a href="https://www.linkedin.com/in/ron-hung-33934a92/" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-linkedin" />
                                </a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/ron.sauce/" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-instagram"/>
                                </a>
                            </li>
                            <li>
                                <a href="https://github.com/ronhung12" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-github-square" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <p className="scrolldown">
                    <a className="smoothscroll" href="#about">
                        <i className="icon-down-circle" />
                    </a>
                </p>
            </header>
        </>
    )
};

export default Header;