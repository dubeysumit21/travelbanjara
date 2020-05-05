import React, { Component } from 'react';
import classes from './ContactUs.css';
import facebook from '../../assets/SocialMediaLogos/png/036-facebook.png';
import instagram from '../../assets/SocialMediaLogos/png/029-instagram.png';
import twitter from '../../assets/SocialMediaLogos/png/008-twitter.png';
import whatsapp from '../../assets/SocialMediaLogos/png/005-whatsapp.png';
import google from '../../assets/MultimediaLogos/png/envelope.png';
import contact from '../../assets/MultimediaLogos/png/phone-call.png';
import axios from 'axios';
import Spinner from '../../UI/Spinner/Spinner';
import Footer from '../Footer/Footer';


class ContactUs extends Component {

    state = {
        value: {
            nameValue: '',
            nameValues: {
                required: true,
                valid: false,
            },
            nameTouched: false,
            emailValue: '',
            emailValues: {
                required: true,
                valid: false,
                emailType: true,
            },
            emailTouched: false,
            phoneValue: '',
            phoneValues: {
                required: true,
                valid: false,
                phoneLength: 10
            },
            phoneTouched: false,
            queryValue: '',
            queryValues: {
                required: true,
                valid: false
            },
            queryTouched: false
        },
        loading: false
    }

    validateEmail = email => {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
      };

    checkValidity(value, rules) {
        let isValid = false;
        if (rules.required) {
            isValid = value.trim() !== '';
        }
        if (rules.phoneLength) {
            isValid = value.length === rules.phoneLength;
        }
        if (rules.emailType) {
            isValid = this.validateEmail(value);
        }
        return isValid;
    }

    getDisabledStatus = () => {
        const { nameValues, emailValues, phoneValues, queryValues } = this.state.value;
        if (nameValues.valid && emailValues.valid && phoneValues.valid && queryValues.valid) {
            return false;
        } 
        return true;
    }

    valueChangeHandler = (event, valueIdentifier) => {
        switch (valueIdentifier) {
            case 0: let newValue = { ...this.state.value };
                newValue.nameValue = event.target.value;
                newValue.nameValues.valid = this.checkValidity(newValue.nameValue, newValue.nameValues);
                newValue.nameTouched = true;
                this.setState({ value: newValue });
                break;
            case 1: newValue = { ...this.state.value };
                newValue.emailValue = event.target.value;
                newValue.emailValues.valid = this.checkValidity(newValue.emailValue, newValue.emailValues);
                newValue.emailTouched = true;
                this.setState({ value: newValue });
                break;
            case 2: newValue = { ...this.state.value };
                newValue.phoneValue = event.target.value;
                newValue.phoneValues.valid = this.checkValidity(newValue.phoneValue, newValue.phoneValues);
                newValue.phoneTouched = true;
                this.setState({ value: newValue });
                break;
            case 3: newValue = { ...this.state.value };
                newValue.queryValue = event.target.value;
                newValue.queryValues.valid = this.checkValidity(newValue.queryValue, newValue.queryValues);
                newValue.queryTouched = true;
                this.setState({ value: newValue });
                break;
            default: console.log('Wrong entry');
                break;
        }
    }

    submitDataHandler = (event) => {
        this.setState({ loading: true })
        event.preventDefault();
        console.log(this.props);
        const query = this.state.value;
        axios.post('https://travel-banjara-queries.firebaseio.com/query.json', query)
            .then(response => {
                this.setState({ loading: false })
                this.props.history.push('/MainPage/aboutus')
            })
    }

    render() {
        const { loading } = this.state;
        const nameClass = [classes.inputBoxClass], emailClass = [classes.inputBoxClass], phoneClass = [classes.inputBoxClass], queryClass = [classes.inputBoxClass];
        if (!this.state.value.nameValues.valid && this.state.value.nameTouched) {
            nameClass.push(classes.red);
        }
        if (!this.state.value.emailValues.valid && this.state.value.emailTouched) {
            emailClass.push(classes.red);
        }
        if (!this.state.value.phoneValues.valid && this.state.value.phoneTouched) {
            phoneClass.push(classes.red);
        }
        if (!this.state.value.queryValues.valid && this.state.value.queryTouched) {
            queryClass.push(classes.red);
        }
        return (
            <div>
                <div className={classes.mainDiv}>
                    <div>
                        <img className={classes.contactImage} src="https://www.cdn.renault.com/content/dam/Renault/IN/corporate/customer-service/Top-image.jpg.ximg.s_12_h.smart.jpg" />
                    </div>
                    {loading ? <Spinner /> : (
                        <div className={classes.contentBox}>
                            <div className={classes.formStyle}>
                                <form onSubmit={this.submitDataHandler}>
                                    <fieldset>
                                        <legend><span className={classes.number}>1</span> Your Info</legend>
                                        <input className={nameClass.join(' ')} name="field1" placeholder="Your Name *" value={this.state.value.nameValue} onChange={(event) => this.valueChangeHandler(event, 0)} />
                                        <input className={emailClass.join(' ')} name="field2" placeholder="Your Email *" value={this.state.value.emailValue} onChange={(event) => this.valueChangeHandler(event, 1)} />
                                        <input className={phoneClass.join(' ')} name="field2" placeholder="Phone *" value={this.state.value.phoneValue} onChange={(event) => this.valueChangeHandler(event, 2)} />
                                    </fieldset>
                                    <fieldset>
                                        <legend><span className={classes.number}>2</span> Your Query</legend>
                                        <textarea className={queryClass.join(' ')} name="field3" placeholder="Your Query" value={this.state.value.queryValue} onChange={(event) => this.valueChangeHandler(event, 3)}></textarea>
                                    </fieldset>
                                    <input disabled={this.getDisabledStatus()} type="submit" value="Submit" style={{ cursor: this.getDisabledStatus() ? "not-allowed" : "pointer", opacity: this.getDisabledStatus() ? 0.5 : null}}/>
                                </form>
                            </div>
                            <div className={classes.socialMedia}>
                                <div className={classes.socialMediaContent}><a className={classes.contents} href="https://www.facebook.com/thetravelbanjara" target="_blank"><img src={facebook} alt="socialmediaimage" /></a><p><strong>facebook.com/thetravelbanjara</strong></p></div>
                                <div className={classes.socialMediaContent}><a className={classes.contents} href="https://www.instagram.com/thetravelbanjara.official" target="_blank" ><img src={instagram} alt="socialmediaimage" /></a><p><strong>instagram.com/thetravelbanjara.official</strong></p></div>
                                <div className={classes.socialMediaContent}><a className={classes.contents} ref="https://www.twitter.com/thetravelbanjara.official" target="_blank"><img src={twitter} alt="socialmediaimage" /></a><p><strong>twitter.com/thetravelbanjara.official</strong></p></div>
                                <div className={classes.socialMediaContent}><img className={classes.contents} src={whatsapp} alt="socialmediaimage" /><p><strong>+91 9583656576</strong></p></div>
                                <div className={classes.socialMediaContent}><img className={classes.contents} src={google} alt="socialmediaimage" /><p><strong>svsomnath1@gmail.com</strong></p></div>
                                <div className={classes.socialMediaContent}><img className={classes.contents} src={contact} alt="socialmediaimage" /><p><strong>+91 9583656576/+91 8249232041</strong></p></div>
                            </div>
                        </div>
                    )}
                </div>
                <div className={classes.footerHeight}><Footer /></div>
            </div>
        )
    }
}

export default ContactUs;