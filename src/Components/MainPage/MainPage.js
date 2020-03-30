import React, { Component } from 'react';
import classes from './MainPage.css';
import { Route, NavLink } from 'react-router-dom';
import ContactUs from '../ContactUs/ContactUs';
import Gallery from '../Gallery/Gallery';
import Register from '../Register/Register';
import Available from '../Available/Available';
import About from '../About/About';
import Blogs from '../Blogs/Blogs';
import hamburger from '../../assets/images/line-menu.png';
import login from '../../assets/images/man-user.png';
import LogoImage from '../../assets/images/travelBanjara.png';

class MainPage extends Component {

    navItems = [
        { name: 'About Us', page: 'aboutus', path: '/aboutus' },
        { name: 'Gallery', page: 'gallery', path: '/gallery' },
        { name: 'Contact Us', page: 'contactus', path: '/contactus' },
        { name: 'Register', page: 'register', path: '/register' },
        { name: 'Blogs', page: 'blogs', path: '/blogs' },
        { name: 'Reviews', page: 'reviews', path: '/reviews' },
    ];

    componentDidMount() {
        const { match, location, history } = this.props;
        history.push('/MainPage');
    }
    render() {
        const navItem = this.navItems.map(x => <NavLink className={classes.navItems} to={this.props.match.url + x.path}>{x.name}</NavLink>);
        return (
            <div classeName={classes.wrapper}>
                <header style={{ zIndex: 5}}>
                    {/* <div className={classes.logo}><h1>The Travel Banjara</h1></div>
                        <hr></hr>
                        <label for="show-menu" className={classes.showMenu}><img style={{width: '30px', float: 'left', marginLeft: '10px'}} src={hamburger} alt="hamburger"/></label>
                           <input type="checkbox" id="show-menu" role="button" />
                                <ul className={classes.menu}>
                                <li><NavLink to={this.props.match.url + '/aboutus'}>About Us</NavLink></li>
                                <li><NavLink to={this.props.match.url + '/gallery'}>Gallery</NavLink></li>
                                <li><NavLink to={this.props.match.url + '/reviews'}>Reviews</NavLink></li>
                                <li><NavLink to={this.props.match.url + '/register'}>Register</NavLink></li>
                                <li><NavLink to={this.props.match.url + '/blogs'}>Blogs</NavLink></li>
                                <li><NavLink to={this.props.match.url + '/contactus'}>Contacts</NavLink></li>
                                <li><NavLink to={'/'}><span><img style={{width: '11px', marginRight: '5px'}} src={login} alt="unloaded" /></span>Login</NavLink></li>
                            </ul> */}
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
                    <Route path={this.props.match.url + '/gallery'} exact component={Gallery} />
                    <Route path={this.props.match.url + '/register'} exact component={Register} />
                    <Route path={this.props.match.url + '/blogs'} exact component={Blogs} />
                    <Route path={this.props.match.url + '/reviews'} exact component={Available} />
                    <Route path={this.props.match.url + '/aboutus'} exact component={About} />
                </main>
            </div>
        )
    }
}

export default MainPage;