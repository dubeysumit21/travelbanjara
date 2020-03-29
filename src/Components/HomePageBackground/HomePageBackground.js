import React, { Component } from 'react';
import LoginImage from '../../assets/images/login.png';
import LogoImage from '../../assets/images/travelBanjara.png';
import classes from './HomePageBackground.css';

const LoginItems = (props: Props) => {
    const { item } = props;
    return (
        <div className={classes.loginItemWrapper}>
            <p style={{ marginBottom: '10px', color: '#FFFFFF', fontSize: '18px' }}>{item.title}</p>
            <input className={classes.inputBox} />
        </div>
    )
};

const LoginBox = (props: Props) => {
    const loginConfig = [
        { title: 'Name', id: 1 },
        { title: 'Password', id: 2 },
    ];
    const { changeStateHandler } = props;
    const loginDetails = loginConfig && loginConfig.map(x => <LoginItems item={x} />)
    return (<div className={classes.loginBox}>
        <div className={classes.loginWrapper}>
            <img className={classes.loginImage} src={LoginImage} />
            <p style={{ color: '#FFFFFF' }}>Please enter your details below to continue.</p>
        </div>
        <div className={classes.loginDetailsWrapper}>
            {loginDetails}
            <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                <button onClick={() => console.log('++')} className={classes.btn} disabled>Sign In</button>
            </div>
            <div style={{ display: 'flex', width: '100%', display: 'flex', flexDirection: 'row', marginTop: '40px' }}>
                <div style={{ display: 'flex', justifyContent: 'center', width: '50%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <button onClick={() => changeStateHandler('signup')} className={classes.signUpButton}>New User, Signup here.</button>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', width: '50%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <button onClick={() => changeStateHandler('forgot')} className={classes.forgotPassword}>Forgot Password?</button>
                </div>
            </div>
        </div>
    </div>);
}

const SignUpBox = (props: Props) => {
    const loginConfig = [
        { title: 'Full Name:', id: 1 },
        { title: 'Mobile Number:', id: 2 },
        { title: 'Email Address:', id: 3 },
        { title: 'Password: ', id: 4 },
    ];
    const { changeStateHandler } = props;
    const loginDetails = loginConfig && loginConfig.map(x => <LoginItems item={x} />)
    return (
        <div className={classes.signupBox}>
            <div className={classes.signupWrapper}>
                <p style={{ color: '#FFFFFF' }}>Please enter your details below to Signup.</p>
            </div>
            <div className={classes.signupDetailsWrapper}>
                {loginDetails}
                <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                    <button onClick={() => changeStateHandler} className={classes.btn} disabled>Sign In</button>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    <p style={{ fontSize: '18px', color: '#FFFFFF' }}>Already a member?</p>
                    <button onClick={() => changeStateHandler('login')} className={classes.loginButton}>Click here to Login.</button>
                </div>
            </div>
        </div>);
}

class ForgotPassword extends Component {
    state = {
        errorMessage: null,
        phoneNumber: '',
    };

    validatePhoneNumber = () => {
        const { changeStateHandler } = this.props;
        const { phoneNumber } = this.state;
        if (phoneNumber.length === 10) {
            changeStateHandler('otp');
            this.setState({ errorMessage: false });
        } else {
            this.setState({ errorMessage: true });
        }
    }

    valueSetter = (e) => {
        this.setState({ phoneNumber: e.target.value });
    }

    render() {
        const { changeStateHandler } = this.props;
        const { errorMessage } = this.state;
        return (
            <div className={classes.forgotBox}>
                <div className={classes.signupWrapper}>
                    <p style={{ color: '#FFFFFF' }}>Enter your Registered number to receive the OTP.</p>
                </div>
                <div className={classes.signupDetailsWrapper}>
                    <div className={classes.loginItemWrapper}>
                        <input className={classes.inputBox} onChange={e => this.valueSetter(e)} />
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', width: '100%', flexDirection: 'column', alignItems: 'center' }}>
                        <button onClick={() => this.validatePhoneNumber()} className={classes.btn}>Get OTP</button>
                        {errorMessage ? <p style={{ color: '#FF7F7F' }}>Please Enter a valid phone number.</p> : null}
                        <button onClick={() => changeStateHandler('login')} className={classes.loginButton} style={{ marginTop: '30px' }}>Click here to Login.</button>
                    </div>
                </div>
            </div>
        );
    }
}

class OtpBox extends Component {
    state = {
        errorMessage: null,
        otpValue: '',
    };

    validateOtp = () => {
        const { changeStateHandler } = this.props;
        const { otpValue } = this.state;
        if (otpValue.length === 4) {
            changeStateHandler('passwordReset');
        } else {
            this.setState({ errorMessage: true });
        }
    }

    valueSetter = (e) => {
        this.setState({ otpValue: e.target.value });
    }
    render() {
        const { changeStateHandler } = this.props;
        const { errorMessage } = this.state;
        return (
            <div className={classes.forgotBox}>
                <div className={classes.signupWrapper}>
                    <p style={{ color: '#FFFFFF' }}>Please Enter the OTP Received.</p>
                </div>
                <div className={classes.signupDetailsWrapper}>
                    <div className={classes.loginItemWrapper}>
                        <input className={classes.inputBox} onChange={e => this.valueSetter(e)} />
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', width: '100%', flexDirection: 'column', alignItems: 'center' }}>
                        <button onClick={() => this.validateOtp()} className={classes.btn}>Continue</button>
                        {errorMessage ? <p style={{ color: '#FF7F7F' }}>The OTP entered was invalid.</p> : null}
                        <button onClick={() => changeStateHandler('login')} className={classes.loginButton} style={{ marginTop: '30px' }}>Click here to Login.</button>
                    </div>
                </div>
            </div>
        );
    }
}

class PasswordReset extends Component {
    state = {
        errorMessage: null,
        newPassword: '',
        confirmPassword: '',
        setFlag: false,
    };

    validateOtp = () => {
        const { newPassword, confirmPassword } = this.state;
        if (newPassword === confirmPassword) {
            this.setState({ errorMessage: false, setFlag: true });
        } else {
            this.setState({ errorMessage: true });
        }
    }

    valueSetter = (e, type) => {
        if (type === 'newPassword') {
            this.setState({ newPassword: e.target.value });
        } else {
            this.setState({ confirmPassword: e.target.value });
        }
    }
    render() {
        const { changeStateHandler } = this.props;
        const { errorMessage, setFlag } = this.state;
        if (!setFlag) {
            return (
                <div className={classes.forgotBox}>
                    <div className={classes.signupWrapper}>
                        <p style={{ color: '#FFFFFF' }}>Please set your new password.</p>
                    </div>
                    <div className={classes.signupDetailsWrapper}>
                        <div className={classes.loginItemWrapper}>
                            <input type="password" className={classes.inputBox} style={{ marginBottom: '20px' }} onChange={e => this.valueSetter(e, 'newPassword')} placeholder="New Password" />
                            <input type="password" className={classes.inputBox} onChange={e => this.valueSetter(e, 'confirmPassword')} placeholder="Confrim Password" />
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'center', width: '100%', flexDirection: 'column', alignItems: 'center' }}>
                            <button onClick={() => this.validateOtp()} className={classes.btn}>Continue</button>
                            {errorMessage ? <p style={{ color: '#FF7F7F' }}>The passwords do not match!</p> : null}
                        </div>
                    </div>
                </div>
            );
        } else {
            return (
                <div className={classes.forgotBox} style={{ justifyContent: 'center' }}>
                    <p style={{ color: '#4CA64C', fontSize: '30px' }}>Password Reset Successful!</p>
                    <button onClick={() => changeStateHandler('login')} className={classes.loginButton}>Click here to Login.</button>
                </div>
            );
        }
    }
}


class HomePageBackground extends Component {

    navItems = [
        { name: 'About Us', page: 'aboutus' },
        { name: 'Gallery', page: 'gallery' },
        { name: 'Contact Us', page: 'contactus' },
        { name: 'Register', page: 'register' },
    ];

    state = {
        displayType: 'login',
    };

    changeStateHandler = type => {
        switch (type) {
            case 'login': {
                this.setState({ displayType: 'login' });
                break;
                ;
            }
            case 'signup': {
                this.setState({ displayType: 'signup' });
                break;
            }
            case 'forgot': {
                this.setState({ displayType: 'forgot' });
                break
            }
            case 'otp': {
                this.setState({ displayType: 'otp' });
                break;
            }
            case 'passwordReset': {
                this.setState({ displayType: 'passwordReset' });
                break;
            }
            default: break;
        }
    }

    getDisplayItem = type => {
        switch (type) {
            case 'login': {
                return <LoginBox changeStateHandler={type => this.changeStateHandler(type)} />
            }
            case 'signup': {
                return <SignUpBox changeStateHandler={type => this.changeStateHandler(type)} />
            }
            case 'forgot': {
                return <ForgotPassword changeStateHandler={type => this.changeStateHandler(type)} />
            }
            case 'otp': {
                return <OtpBox changeStateHandler={type => this.changeStateHandler(type)} />
            }
            case 'passwordReset': {
                return <PasswordReset changeStateHandler={type => this.changeStateHandler(type)} />
            }
            default: break;
        }
    }

    navigationHandler = item => {
        console.info(item);
        const { history } = this.props;
        history.push({
            pathname: '/Mainpage',
            state: { link: item.page },
        });
    }

    render() {
        const { displayType } = this.state;
        const navItem = this.navItems.map(x => <button onClick={() => this.navigationHandler(x)} className={classes.navItems}>{x.name}</button>);
        const displayItem = this.getDisplayItem(displayType);
        return (
            <div style={{ height: window.innerHeight }}>
                <div style={{ position: 'fixed', zIndex: '1', width: '100%', height: '100%', opacity: '0.7' }}>
                    <img className={classes.Background} src="https://makeholidaysgreener.com/images/media/iStock-139992597_reethi_beach_crop.jpg" alt="image.jpg" />
                </div>
                <div className={classes.container}>
                    <div className={classes.logo}>
                        <div style={{ width: '10%' }}>
                            <img className={classes.Background} src={LogoImage} alt="image.jpg" style={{ width: '400px', height: '150px'}}/>
                        </div>
                        <div className={classes.navBarContainer}>
                            {navItem}
                        </div>
                    </div>
                    <div className={classes.loginBoxContainer}>
                        {/* <div className={classes.loginBox}>
                            <div className={classes.loginWrapper}>
                                <img className={classes.loginImage} src={LoginImage} />
                                <p style={{ color: '#FFFFFF' }}>Please enter your details below to continue.</p>
                            </div>
                            <div className={classes.loginDetailsWrapper}>
                                {loginDetails}
                                <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                                    <button onClick={this.goToMainPageHandler} className={classes.btn} disabled>Sign In</button>
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'center', width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                                    <p style={{ fontSize: '18px', color: '#FFFFFF' }}>Not Registered?</p>
                                    <button onClick={this.goToMainPageHandler} className={classes.signUpButton} disabled>Click here to Sign Up</button>
                                </div>
                            </div>
                        </div> */}
                        {/* <LoginBox goToMainPageHandler={this.goToMainPageHandler} />
                        <SignUpBox changeStateHandler={this.changeStateHandler} /> */}
                        {displayItem}
                    </div>
                </div>
                {/* <br></br>
                <div className={classes.info}>
                    <h2 style={{fontFamily: 'Montserrat, sans-serif'}}><i>“Real freedom lies in wildness, not in civilization.”</i></h2>
                </div>
                <div className={classes.info}>
                    <h5><i> - Charles Lindbergh</i></h5>
                </div>
                <div className={classes.intro}>
                    <br></br>
                    <p>The Travel Banjara is all about giving unique camping experiences. We believe passionately in travel, sustainable tourism and nurturing a sense of adventure in our customers.
                       Camping is a very new concept in Odisha but it is filled with potential. We wish to give people a taste of camping and all that comes along with it.
                       Our camping trips are filled with good food, good music, long talks and great friends while enjoying the raw cacophony of nature. The bonfires keep you warm while you stargaze and dream of a distant land. And that's when the realisation hits you. That the moment is now.</p>
                    <p>So, come be a part of <strong>The Travel Banjara</strong> family and lets create memories that will last a long time.</p>  
                </div> */}
                {/* <div style={{display: 'flex', justifyContent: 'center'}}><button onClick={this.goToMainPageHandler} className={classes.btn} disabled>Enter</button></div> */}
            </div>
        )
    }

}

export default HomePageBackground;