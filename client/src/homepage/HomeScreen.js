import React, {useState} from 'react';
import './homepage'
import './homepage.css'
import './script'
import useHeader from '../hooks/useHeader'
import logoHeaderLight from './logo_header.png'
import logoHeaderDark from './logo_header_dark.png'
import knustLogo from './knust_logo.png'
import legonLogo from './legon_logo.png'
import ashesiLogo from './ashesi_logo.png'
import logo from './logo.png'
import recentEvent from './recent_event.jpg'
import uccLogo from './ucc_logo.png'
import udsLogo from './uds_logo.png'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {Link} from "react-router-dom"
import programmingIcon from './programming_icon.png'
import '@fortawesome/fontawesome-free-solid'
import '@fortawesome/fontawesome-svg-core'
import {SocialIcon} from 'react-social-icons';


/*import './jquery'
import './js/bootstrap.min'*/

function HomeScreen(props) {
    /*const [whiteHeader,setWhiteHeader]=useState(false);*/

    const {whiteHeader} = useHeader();
    return (
        <React.Fragment className={{boxSizing: 'border-box'}}>
            <section className={'top-layer'}>
                <section className="top">
                    <nav
                        className={`navbar navbar-expand-lg fixed-nav py-3 ${whiteHeader ? "bg-white navbar-light" : "bg-transparent navbar-dark"}`}
                        id="navbar">
                        <a className="navbar-brand" href="/"><img src={whiteHeader ? logoHeaderDark : logoHeaderLight}
                                                                  alt="Logo" height="70px" width="auto"/></a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse"
                                data-target="/navbarNavAltMarkup"
                                aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"/>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav ml-auto px-3">
                                <Link className="nav-item nav-link active" to="/">Home <span
                                    className="sr-only">(current)</span></Link>
                                <Link className="nav-item nav-link" to="/courses">Courses</Link>
                                <Link className="nav-item nav-link" to="/books">Books</Link>
                                <Link className="nav-item nav-link" to="/about">About us</Link>
                                <Link className="nav-item nav-link theme-color" to="/login">Log in</Link>
                            </div>
                        </div>
                    </nav>
                    <div className="vanishing-dialog">
                        <h1 className="display-3 font-weight-bold text-center">
                            Code Den Project
                                {/*<span className="txt-rotate" data-period="50"
                                      data-rotate="[ &quot;Welcome to Code Den,&quot;, &quot;Train yourself to code&quot;
              , &quot;It's free&quot;, &quot;fast &quot;, &quot;flexible&quot; ]">
            <span className="wrap"/></span>*/}
                        </h1>
                    </div>
                    <br/>
                </section>
            </section>
            <section className="bg-black mt-0 vp-h-50 d-flex flex-column justify-content-center align-items-center">
                <div>
                    <p className={'theme-color font-weight-bold partners-theme-text'}>HELPING THOUSANDS OF YOUNGSTERS
                        BUILD TECH SKILLS AT SCALE</p>
                </div>
                <br/>
                {/* <p className={'d-flex justify-content-around'}>
                    <img src={knustLogo} alt="" className={'mx-3 partner-logo'}/>
                    <img src={legonLogo} alt="" className={'mx-3 partner-logo'}/>
                    <img src={uccLogo} alt="" className={'mx-3 partner-logo'}/>
                    <img src={udsLogo} alt="" className={'mx-3 partner-logo'}/>
                    <img src={ashesiLogo} alt="" className={'mx-3 partner-logo'}/>
                </p>*/}
                <div className="row w-100">
                    <div className="container-fluid">
                       <div className="container">
                           <section className="logo-carousel slider">
                               <div className="slide">
                                   <img src={knustLogo} alt="" className={'partner-logo'}/>
                               </div>
                               <div className="slide">
                                   <img src={legonLogo} alt="" className={'partner-logo'}/>
                               </div>
                               <div className="slide">
                                   <img src={uccLogo} alt="" className={'partner-logo'}/>
                               </div>
                               <div className="slide">
                                   <img src={udsLogo} alt="" className={'partner-logo'}/>
                               </div>
                               <div className="slide">
                                   <img src={ashesiLogo} alt="" className={'partner-logo'}/>
                               </div>
                               <div className="slide">
                                   <img src={knustLogo} alt="" className={'partner-logo'}/>
                               </div>
                               <div className="slide">
                                   <img src={legonLogo} alt="" className={'partner-logo'}/>
                               </div>
                               <div className="slide">
                                   <img src={uccLogo} alt="" className={'partner-logo'}/>
                               </div>
                               <div className="slide">
                                   <img src={udsLogo} alt="" className={'partner-logo'}/>
                               </div>
                               <div className="slide">
                                   <img src={ashesiLogo} alt="" className={'partner-logo'}/>
                               </div>
                           </section>
                       </div>

                    </div>
                </div>
            </section>
            <section className="theme-alt-black">
                <div className={'container py-5'}>
                    <p className={'theme-color font-weight-bold partners-theme-text my-3'}>TRENDING TECHNOLOGIES</p>
                    <h3 className={'font-weight-bold text-light inner-topic-text'}>Popular topics to learn now</h3>
                    <div className="container">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6 px-2 my-2">
                                    <div className="card path-advert-card  py-4 px-4">
                                        <img src={programmingIcon} alt="" className={"path-advert-card-icon"}/>
                                        <p className={'theme-color path-key-text font-weight-bold'}>PATH</p>
                                        <p>Algorithms</p>
                                        <p><span className={'path-course-number font-weight-bold'}>11</span> Courses</p>
                                        <p><Link to={'/'} className={'decoration-none'}>Take a look<FontAwesomeIcon
                                            icon="fa-solid fa-angle-right" color={"#000"}/> </Link></p>
                                    </div>
                                </div>
                                <div className="col-md-6  px-2 my-2">
                                    <div className="card path-advert-card  py-4 px-4">
                                        <img src={programmingIcon} alt="" className={"path-advert-card-icon"}/>
                                        <p className={'theme-color path-key-text font-weight-bold'}> PATH</p>
                                        <p>Machine Learning</p>
                                        <p><span className={'path-course-number font-weight-bold'}>11</span> Courses</p>
                                        <p><Link to={'/'} className={'decoration-none'}>Take a look <FontAwesomeIcon
                                            icon="fa-solid fa-angle-right" color={"#000"}/></Link></p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6 px-2 my-2">
                                    <div className="card path-advert-card  py-4 px-4">
                                        <img src={programmingIcon} alt="" className={"path-advert-card-icon"}/>
                                        <p className={'theme-color path-key-text font-weight-bold'}>PATH</p>
                                        <p>Mobile App Dev't</p>
                                        <p><span className={'path-course-number font-weight-bold'}>11</span> Courses</p>
                                        <p><Link to={'/'} className={'decoration-none'}>Take a look <FontAwesomeIcon
                                            icon="fa-solid fa-angle-right" color={"#000"}/></Link></p>
                                    </div>
                                </div>
                                <div className="col-md-6 px-2 my-2">
                                    <div className="card path-advert-card py-4 px-4">
                                        <img src={programmingIcon} alt="" className={"path-advert-card-icon"}/>
                                        <p className={'theme-color path-key-text font-weight-bold'}>PATH</p>
                                        <p>Web Dev't</p>
                                        <p><span className={'path-course-number font-weight-bold'}>11</span> Courses</p>
                                        <p><Link to={'/'} className={'decoration-none'}>Take a look <FontAwesomeIcon
                                            icon="fa-solid fa-angle-right" color={"#000"}/></Link></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-black">
                <div className=" py-5">
                    <div className="container">
                        <p className="theme-color font-weight-bold my-2">SEE WHAT'S NEW</p>
                        <h3 className="inner-topic-text font-weight-bold text-light mt-3"> Our recent events</h3>
                    </div>
                    <br/>
                    <div className="container">
                        <section className="row">
                            <div className="col-lg-8 recent-program-image">
                            </div>
                            <div className="col-lg-4 py-5 theme-alt-black">
                                <h3 className={'text-light font-weight-bold'}><img src={logo}
                                                                                   className={"digi-kids-logo d-inline"}
                                                                                   alt=""/>Digi-KIDS <span
                                    className={'freebies-text theme-color'}>(freebies)</span></h3>
                                <h5 className={'theme-color py-4'}>Deepen your child's grounding in the field of IT</h5>
                                <p className={'text-light'}>We train kids(Digi-kids) as they get introduced to
                                    programming with the Python
                                    languages
                                    We hold coding sessions for children in every quarter of the year. These classes are
                                    absolutely free for all applicants.
                                </p>
                                <p><Link to={'/'} hover={'white'} className={'theme-color'}>Find out
                                    more <FontAwesomeIcon
                                        icon="fa-solid fa-angle-right" color={"#fff"}/></Link></p>
                            </div>
                        </section>
                    </div>
                </div>
            </section>

            <foooter className="d-flex flex-column justify-content-end bg-black">
                <div className="container">
                    <div className="row py-3 text-center">
                        <div className="col-md-6 col-lg-3 p-1 m-0">
                            <h5 className={'footer-link-header'}>Programs</h5>
                            <div className="footer-program-links">
                                <p className={'footer-link-p'}>Code with me</p>
                                <p className={'footer-link-p'}>DigiKids</p>
                                <p className={'footer-link-p'}>Den camps</p>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 p-1 m-0">
                            <h5 className={'footer-link-header'}>Books</h5>
                            <div className="footer-book-links">
                                <p className={'footer-link-p'}>The Future of Africa</p>
                                <p className={'footer-link-p'}>Coding for Kids</p>
                                <p className={'footer-link-p'}>Learn to Program</p>
                                <p className={'footer-link-p'}>Logic and Syntax</p>
                                <p className={'footer-link-p'}>Coding for Shy People</p>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 p-1 m-0">
                            <h5 className={'footer-link-header'}>Partners</h5>
                            <div className="footer-partner-links">
                                <p className="footer-link-p">Walls computing</p>
                                <p className="footer-link-p">Apex computing</p>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 p-1 m-0">
                            <h5 className={'footer-link-header'}>Contact</h5>
                            <div className="footer-contacts-links">
                                <p className={'footer-link-p'}><a href="mailto:robertdoe@codeden.org"
                                                                  className="info-email-address">info@codeden.org</a>
                                </p>
                                <p className={'footer-link-p'}><a href="tel:+233271302702"
                                                                  className="info-email-address">+233 271302702</a></p>
                                <p>
                                    <SocialIcon className={'m-1'} network={'facebook'} fgColor={'#fff'} style={{height: 25, width: 25}} url={'https://www.facebook.com/codeden.org'}/>
                                    <SocialIcon className={'m-1'} network={'github'} fgColor={'#fff'} style={{height: 25, width: 25}} url={'https://github.com/Robert-Doe/codeden.org'}/>
                                    <SocialIcon className={'m-1'} network={'linkedin'} fgColor={'#fff'} url={'https://www.linkedin.com/company/code-den/'} style={{height: 25, width: 25}}/>
                                    <SocialIcon className={'m-1'} network={'youtube'} fgColor={'#fff'} url={'https://www.youtube.com/channel/UCuruzrClqL5-QzqQGi93JDA'} style={{ height: 25, width: 25 }} bgColor={'#f11'}/>
                                    <SocialIcon className={'m-1'} network={'twitter'} fgColor={'#fff'} style={{ height: 25, width: 25 }} />
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <p id={'copyright-p'} className={' align-self-center text-light'}>Copyright Reserved CodeDen
                    Initiative&copy; 2022</p>
            </foooter>
        </React.Fragment>
    );
}

export default HomeScreen;