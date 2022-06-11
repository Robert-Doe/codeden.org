import React from 'react';
import logoHeaderLight from './logo_header.png'
import logoHeaderDark from './logo_header_dark.png'
/*import logo from './logo.png'*/
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {Link} from "react-router-dom"
import codingKidsFlyer from './Coding for Kids.png'
import africaCodeStoryFlyer from './Coding - the future of Africa.png'
import logicAndSyntaxFlyer from './Logic and Syntax.png'
import shyPeopleCodeFlyer from './Coding for Shy People Cover Page.png'
import learnToProgramFlyer from './Learn to Program.png'


function BookScreen(props) {
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
                        <Link className="nav-item nav-link" to="/courses">Courses</Link>
                        <Link className="nav-item nav-link active" to="/books">Books</Link>
                        <Link className="nav-item nav-link" to="/about">About us</Link>
                        <Link className="nav-item nav-link theme-color" to="/login">Log in</Link>
                    </div>
                </div>
            </nav>
        <section className={'container p-5 my-5'}>
            <h3 className={'py-5'}>Hi there, these are the books we have authored </h3>
            <div className="row">
                <div className="col-md-3 py-3">
                    <div className="card">
                        <img src={codingKidsFlyer} alt=""/>
                    </div>
                </div>
                <div className="col-md-3 py-3">
                    <div className="card">
                        <img src={learnToProgramFlyer} alt=""/>
                    </div>
                </div>
                <div className="col-md-3 py-3">
                    <div className="card">
                        <img src={shyPeopleCodeFlyer} alt=""/>
                    </div>
                </div>
                <div className="col-md-3 py-3">
                    <div className="card">
                        <img src={logicAndSyntaxFlyer} alt=""/>
                    </div>
                </div>
                <div className="col-md-3 py-3">
                    <div className="card">
                        <img src={africaCodeStoryFlyer} alt=""/>
                    </div>
                </div>
            </div>
        </section>
        </React.Fragment>
    );
}

export default BookScreen;