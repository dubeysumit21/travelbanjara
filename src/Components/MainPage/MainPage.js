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

class MainPage extends Component{

    componentDidMount () {
        const { match, location, history } = this.props;
        const { state } = location;
        history.push(`${match.url}/${state.link}`);
    }
     render(){
        return(
            <div classeName={classes.wrapper}>
                    <header>
                        <div className={classes.logo}><h1>The Travel Banjara</h1></div>
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
                            </ul>
                    </header>
                    <main>
                            <Route path={this.props.match.url + '/contactus'} exact component={ ContactUs } />
                            <Route path={this.props.match.url + '/gallery'} exact component={ Gallery } />
                            <Route path={this.props.match.url + '/register'} exact component={ Register } />
                            <Route path={this.props.match.url + '/blogs'} exact component={ Blogs } />
                            <Route path={this.props.match.url + '/reviews'} exact component={ Available } />
                            <Route path={this.props.match.url + '/aboutus'} exact component={ About } />
                    </main>
            </div>
        )
    }
} 

export default MainPage;