import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {Link} from "react-router-dom"
import logoHeaderLight from './logo_header.png'
import logoHeaderDark from './logo_header_dark.png'

function CourseScreen(props) {
    return (
        <React.Fragment>
            <nav
                className={"navbar navbar-expand-lg fixed-nav py-3 navbar-dark bg-dark "}
                id="book-navbar">
                <a className="navbar-brand" href="/"><img src={logoHeaderLight}
                                                          alt="Logo" height="70px" width="auto"/></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="/navbarNavAltMarkup"
                        aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"/>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav ml-auto px-3">
                        <Link className="nav-item nav-link" to="/">Home <span
                            className="sr-only">(current)</span></Link>
                        <Link className="nav-item nav-link active" to="/courses">Courses</Link>
                        <Link className="nav-item nav-link" to="/books">Books</Link>
                        <Link className="nav-item nav-link " to="/about">About us</Link>
                        <Link className="nav-item nav-link theme-color" to="/login">Log in</Link>
                    </div>
                </div>
            </nav>
            <section className={'container p-5 my-5'}>
                <div className="d-flex justify-content-center align-items-center">
                    <h3 className={'py-5'}>Patiently wait as we load up all courses and finish the site</h3>
                </div>
            </section>
        </React.Fragment>
    );
}

export default CourseScreen;