import React, { Component } from 'react';
import LogoImage from '../../assets/images/travelBanjara.png';
import classes from './styles.css';

class Header extends Component {

    navItems = [
        { name: 'About Us', page: 'aboutus' },
        { name: 'Gallery', page: 'gallery' },
        { name: 'Contact Us', page: 'contactus' },
        { name: 'Register', page: 'register' },
    ];

    navigationHandler = item => {
        const { history } = this.props;
        history.push({
            pathname: '/Mainpage',
            state: { link: item.page },
        });
    }

    render() {
        const navItem = this.navItems.map(x => <button onClick={() => this.navigationHandler(x)} className={classes.navItems}>{x.name}</button>);
        return (
            <div className={classes.logo}>
                <div style={{ width: '10%' }}>
                    <img className={classes.Background} src={LogoImage} alt="image.jpg" style={{ width: '400px', height: '150px' }} />
                </div>
                <div className={classes.navBarContainer}>
                    {navItem}
                </div>
            </div>
        );
    }
}

export default Header;