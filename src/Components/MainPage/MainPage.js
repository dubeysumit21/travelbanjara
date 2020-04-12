import React, { Component } from 'react';
import classes from './MainPage.css';
import { Route, NavLink } from 'react-router-dom';
import ContactUs from '../ContactUs/ContactUs';
import Gallery from '../Gallery/Gallery';
import Register from '../Register/Register';
import Available from '../Available/Available';
import About from '../About/About';
import Blogs from '../Blogs/Blogs';
import Camping from '../../assets/images/camping-tent.png';
import hamburger from '../../assets/images/line-menu.png';
import login from '../../assets/images/man-user.png';
import LogoImage from '../../assets/images/travelBanjara.png';
import HomePageBackground from '../HomePageBackground/HomePageBackground';
import PackageTab from '../PackageTab';
import { Animated } from "react-animated-css";
import Slider from 'react-slick';

class MainPage extends Component {

    navItems = [
        { name: 'About Us', page: 'aboutus', path: '/aboutus' },
        { name: 'Gallery', page: 'gallery', path: '/gallery' },
        { name: 'Contact Us', page: 'contactus', path: '/contactus' },
        { name: 'Register', page: 'register', path: '/register' },
        { name: 'Blogs', page: 'blogs', path: '/blogs' },
        { name: 'Reviews', page: 'reviews', path: '/reviews' },
    ];

    state = {
        popupFlag: undefined,
        popup: undefined,
        content: null,
    };

    // componentDidMount() {
    //     const { match, location, history } = this.props;
    //     history.push('/MainPage');
    // }

    popupClickHandler = (type, popupType) => {
        const popup = {};
        popup.type = popupType;
        this.setState({ popupFlag: true, popup, content: type });
    }

    renderPopupContent = () => {
        const { popup, content } = this.state;
        const loggedIn = true;
        switch (popup.type) {
            case 'example': {
                return (<div class={classes.popupBox}>Sumit</div>)
            }
            case 'description': {
                return (
                    <Animated animationIn="slideInDown" animationOut="slideInDown" animationInDelay={1} isVisible={true} style={{ width: '50%' }}>
                        <div className={classes.popupBox}>
                            <div className={classes.descHeading}>
                                <h2 className={classes.descHeadingText}>{content.heading}</h2>
                            </div>
                            <div className={classes.descBody}>
                                <img src={content.icon} alt="unloaded" className={classes.descBodyBackgroundImage} />
                                <div className={classes.bodyText}>
                                    <p>{content.description}</p>
                                    <div className={classes.buttonContainer}>
                                        <button className={classes.cancel} onClick={() => this.setState({ popupFlag: false })}>{content.buttons[0]}</button>
                                        <button className={classes.register}>{content.buttons[1]}</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Animated>
                );
            }
            case 'tab-type': {
                if (loggedIn) {
                    return (
                        <Animated animationIn="slideInDown" animationOut="slideInDown" animationInDelay={1} isVisible={true} style={{ width: '50%' }}>
                            <PackageTab content={content} onClick={() => this.setState({ popupFlag: false })} />
                        </Animated>
                    );
                } else {
                    return (
                        <Animated animationIn="slideInDown" animationOut="slideInDown" animationInDelay={1} isVisible={true}>
                            <HomePageBackground onClick={() => this.setState({ popupFlag: false })} />
                        </Animated >
                    );
                }
            }
            case 'gallery-type': {
                return (
                    <Animated animationIn="slideInDown" animationOut="slideInDown" animationInDelay={1} isVisible={true} style={{ width: '50%' }}>
                        <div className={classes.popupBox}>
                            <div className={classes.descHeading}>
                                <h2 className={classes.descHeadingText}>{content.date}</h2>
                            </div>
                            <div className={classes.galleryDescBody}>
                                <div className={classes.imageHolder}>
                                    <Slider arrows={true} infinite slidesToShow={1} slidesToScroll={1} speed={200}>
                                        {content.imageArray.map(ex =>
                                            <div className={classes.individualImageWrapper}>
                                                <img src={ex} alt="unloaded" className={classes.imageThumb} />
                                            </div>)}
                                    </Slider>
                                </div>
                                <button className={classes.galleryCancel} onClick={() => this.setState({ popupFlag: false })}>Close</button>
                            </div>
                        </div>
                    </Animated>
                );
            }
            default: return;
        }
    }
    render() {
        const { popupFlag } = this.state;
        const navItem = this.navItems.map(x => <NavLink className={classes.navItems} to={this.props.match.url + x.path}>{x.name}</NavLink>);
        return (
            <div classeName={classes.wrapper}>
                {popupFlag ? <div className={classes.popupWrapper}>
                    {this.renderPopupContent()}
                </div> : null}
                <header style={{ zIndex: 5 }}>
                    <div className={classes.logo}>
                        <div style={{ width: '10%' }}>
                            <img className={classes.Background} src={LogoImage} alt="image.jpg" style={{ width: '400px', height: '150px' }} />
                        </div>
                        <div className={classes.navBarContainer}>
                            {navItem}
                        </div>
                    </div>
                </header>
                <main>
                    <Route path={this.props.match.url + '/contactus'} exact component={ContactUs} />
                    <Route path={this.props.match.url + '/gallery'} exact render={(props) => <Gallery {...props} clickHandler={this.popupClickHandler} />} />
                    <Route path={this.props.match.url + '/register'} exact component={Register} />
                    <Route path={this.props.match.url + '/blogs'} exact component={Blogs} />
                    <Route path={this.props.match.url + '/reviews'} exact component={Available} />
                    <Route path={this.props.match.url + '/aboutus'} exact render={(props) => <About {...props} clickHandler={this.popupClickHandler} />} />
                </main>
            </div>
        )
    }
}

export default MainPage;