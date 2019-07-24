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


class ContactUs extends Component{

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

    checkValidity(value, rules) {
        let isValid =  false;
        if(rules.required){
            isValid = value.trim() !== '';
        }
        if(rules.phoneLength){
            isValid = value.length === rules.phoneLength;
        }
        return isValid;
    }

    valueChangeHandler = (event, valueIdentifier) => {
        switch(valueIdentifier){
            case 0: let newValue= {...this.state.value};
                    newValue.nameValue = event.target.value;
                    newValue.nameValues.valid = this.checkValidity(newValue.nameValue, newValue.nameValues);
                    newValue.nameTouched = true;
                    this.setState({ value : newValue });
                    break;
            case 1: newValue= {...this.state.value};
                    newValue.emailValue = event.target.value;
                    newValue.emailValues.valid = this.checkValidity(newValue.emailValue, newValue.emailValues);
                    newValue.emailTouched = true;
                    this.setState({ value : newValue });
                    break;
            case 2: newValue= {...this.state.value};
                    newValue.phoneValue = event.target.value;
                    newValue.phoneValues.valid = this.checkValidity(newValue.phoneValue, newValue.phoneValues);
                    newValue.phoneTouched = true;
                    this.setState({ value : newValue });
                    break;
            case 3: newValue= {...this.state.value};
                    newValue.queryValue = event.target.value;
                    newValue.queryValues.valid = this.checkValidity(newValue.queryValue, newValue.queryValues);
                    newValue.queryTouched = true;
                    this.setState({ value : newValue });
                    break;
            default: console.log('Wrong entry');
                    break;
        }
    }

    submitDataHandler = (event) => {
        this.setState ( {loading: true})
        event.preventDefault();
        console.log(this.props);
        const query = this.state.value;
        axios.post('https://travel-banjara-queries.firebaseio.com/query.json', query)
             .then( response => {
                this.setState ( {loading: false})
                 this.props.history.push('/MainPage/aboutus')
             })
    }

    render(){
        const nameClass=[classes.inputBoxClass], emailClass=[classes.inputBoxClass], phoneClass=[classes.inputBoxClass], queryClass=[classes.inputBoxClass];
        if(!this.state.value.nameValues.valid && this.state.value.nameTouched){
            nameClass.push(classes.red);
        }
        if(!this.state.value.emailValues.valid && this.state.value.emailTouched){
            emailClass.push(classes.red);
        }
        if(!this.state.value.phoneValues.valid && this.state.value.phoneTouched){
            phoneClass.push(classes.red);
        }
        if(!this.state.value.queryValues.valid && this.state.value.queryTouched){
            queryClass.push(classes.red);
        }
        let pageStatus= 
                        <div>
                        <div className={classes.mainDiv}>
                        <div className={classes.contactUsHeading}>
                            <h2 className="animated fadeInLeftBig"> Contact Us </h2>
                        </div>
                        <div className={classes.details}>
                            <h4 style={{paddingTop: '20px'}}>The Travel Banjara</h4>
                            <hr style={{width: '40%'}}></hr>    
                            <div className={classes.socialMedia}>
                                <div className={classes.socialMediaContent}><a href="https://www.facebook.com/thetravelbanjara" target="_blank"><img src={facebook} alt="socialmediaimage"/></a><p><strong>facebook.com/thetravelbanjara</strong></p></div>
                                <div className={classes.socialMediaContent}><a href="https://www.instagram.com/thetravelbanjara.official" target="_blank" ><img src={instagram} alt="socialmediaimage" /></a><p><strong>instagram.com/thetravelbanjara.official</strong></p></div>
                                <div className={classes.socialMediaContent}><a href="https://www.twitter.com/thetravelbanjara.official" target="_blank"><img src={twitter} alt="socialmediaimage" /></a><p><strong>twitter.com/thetravelbanjara.official</strong></p></div>
                                <div className={classes.socialMediaContent}><img src={whatsapp} alt="socialmediaimage"/><p><strong>+91 9583656576</strong></p></div>
                                <div className={classes.socialMediaContent}><img src={google} alt="socialmediaimage"/><p><strong>svsomnath1@gmail.com</strong></p></div>
                                <div className={classes.socialMediaContent}><img src={contact} alt="socialmediaimage"/><p><strong>+91 9583656576/+91 8249232041</strong></p></div>
                            </div>
                        </div>
                        <div className={classes.formFill}>
                            <p style={{paddingTop: '20px'}}><strong>Want to hear more from us? Fill the Form below.</strong></p>
                            <br></br>
                            <div className={classes.formStyle}>
                                    <form onSubmit={this.submitDataHandler}>
                                        <fieldset>
                                            <legend><span className={classes.number}>1</span> Your Info</legend>
                                            <input  className={nameClass.join(' ')} name="field1" placeholder="Your Name *" value={this.state.value.nameValue} onChange={(event) => this.valueChangeHandler(event, 0)}/>
                                            <input  className={emailClass.join(' ')} name="field2" placeholder="Your Email *" value={this.state.value.emailValue} onChange={(event) => this.valueChangeHandler(event, 1)}/>
                                            <input  className={phoneClass.join(' ')} name="field2" placeholder="Phone *" value={this.state.value.phoneValue} onChange={(event) => this.valueChangeHandler(event, 2)}/>      
                                        </fieldset>
                                        <fieldset>
                                                <legend><span className={classes.number}>2</span> Your Query</legend>
                                                    <textarea className={queryClass.join(' ')} name="field3" placeholder="Your Query" value={this.state.value.queryValue} onChange={(event) => this.valueChangeHandler(event, 3)}></textarea>
                                        </fieldset>
                                        <input type="submit" value="Submit" />
                                    </form>
                            </div>
                        </div>
                    </div>
                    <div className={classes.footerHeight}><Footer /></div>
                    </div>
        if(this.state.loading){
            pageStatus = 
            <div className={classes.mainDiv}><Spinner /></div>
        }
        return(
            <div>
                {pageStatus}
            </div>
        )
    }
}

export default ContactUs;