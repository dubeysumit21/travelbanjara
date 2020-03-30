import React, { Component } from 'react';
import classes from './Register.css';
import phonepe from '../../assets/QR Codes/phonepe.jpeg';
import googlepay from '../../assets/QR Codes/googlepay.jpeg';
import images from '../../assets/QR Codes/images.jpg';
import axios from 'axios';
import Spinner from '../../UI/Spinner/Spinner';
import Footer from '../Footer/Footer';

class Register extends Component {

    state = {
        value: {
            nameValue: '',
            nameValues: {
                required: true,
                valid: false
            },
            nameTouched: false,
            genderValue: '',
            genderValues: {
                required: true,
                valid: false,
            },
            genderTouched: false,
            emailValue: '',
            emailValues: {
                required: true,
                valid: false
            },
            emailTouched: false,
            phoneValue: '',
            phoneValues: {
                required: true,
                valid: false,
                phoneLength: 10
            },
            phoneTouched: false,
            secPhoneValue: '',
            dobValue: '',
            dobValues: {
                required: true,
                valid: false
            },
            dobTouched: false,
            addLine1Value: '',
            addLine1Values: {
                required: true,
                valid: false
            },
            addLine1Touched: false,
            addLine2Value: '',
            addLine2Values: {
                required: true,
                valid: false
            },
            addLine2Touched: false,
            cityValue: '',
            cityValues: {
                required: true,
                valid: false
            },
            cityTouched: false,
            zipValue: '',
            zipValues: {
                required: true,
                valid: false,
                zipLength: 6
            },
            zipTouched: false,
            stateValue: '',
            stateValues: {
                required: true,
                valid: false
            },
            stateTouched: false,
            venueValue: '',
            dateValue: '',
            modeOfPayValue: '',
            transactionValue: ''

        },
        availableDates: [
            { date: 'Select', day: 'None' },
            { date: '03/05/2019', day: 'Friday' },
            { date: '11/05/2019', day: 'Saturday' },
            { date: '19/05/2019', day: 'Sunday' },
            { date: '25/05/2019', day: 'Saturday' },
            { date: '27/05/2019', day: 'Monday' },
            { date: '04/06/2019', day: 'Tuesday' },
            { date: '13/06/2019', day: 'Thursday' }
        ],
        campingVenue: [
            { place: 'Select', desc: 'None' },
            { place: 'Chandrabhaga', desc: 'Chandrabhaga Beach is situated three km east of the Sun temple of Konark, in the Puri district in the state of Odisha, India. It is 30 km from the city of Puri.' },
            { place: 'Chilika', desc: 'Chilika Lake is a brackish water lagoon, spread over the Puri, Khurda and Ganjam districts of Odisha state on the east coast of India, at the mouth of the Daya River, flowing into the Bay of Bengal, covering an area of over 1,100 km²' }
        ],
        paymentOptions: [
            { mode: 'Select', qrcode: images, number: 'None' },
            { mode: 'Google Pay', qrcode: googlepay, number: '+91 9583656576' },
            { mode: 'Phone Pe', qrcode: phonepe, number: '+91 9583656576' }
        ],
        selectedDayOption: 'None',
        selectedPlaceOption: 'None',
        selectedModeOption: images,
        selectedPhoneOption: 'None',
        loading: false
    }

    checkValidity(value, rules) {
        let isValid = false;
        if (rules.required) {
            isValid = value.trim() !== '';
        }
        if (rules.phoneLength) {
            isValid = value.length === rules.phoneLength;
        }
        if (rules.zipLength) {
            isValid = value.length === rules.zipLength;
        }
        return isValid;
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
                newValue.genderValue = event.target.value;
                newValue.genderValues.valid = this.checkValidity(newValue.genderValue, newValue.genderValues);
                newValue.genderTouched = true;
                this.setState({ value: newValue });
                break;
            case 2: newValue = { ...this.state.value };
                newValue.emailValue = event.target.value;
                newValue.emailValues.valid = this.checkValidity(newValue.emailValue, newValue.emailValues);
                newValue.emailTouched = true;
                this.setState({ value: newValue });
                break;
            case 3: newValue = { ...this.state.value };
                newValue.phoneValue = event.target.value;
                newValue.phoneValues.valid = this.checkValidity(newValue.phoneValue, newValue.phoneValues);
                newValue.phoneTouched = true;
                this.setState({ value: newValue });
                break;
            case 4: newValue = { ...this.state.value };
                newValue.secPhoneValue = event.target.value;
                this.setState({ value: newValue });
                break;
            case 5: newValue = { ...this.state.value };
                newValue.dobValue = event.target.value;
                newValue.dobValues.valid = this.checkValidity(newValue.dobValue, newValue.dobValues);
                newValue.dobTouched = true;
                this.setState({ value: newValue });
                break;
            case 6: newValue = { ...this.state.value };
                newValue.addLine1Value = event.target.value;
                newValue.addLine1Values.valid = this.checkValidity(newValue.addLine1Value, newValue.addLine1Values);
                newValue.addLine1Touched = true;
                this.setState({ value: newValue });
                break;
            case 7: newValue = { ...this.state.value };
                newValue.addLine2Value = event.target.value;
                newValue.addLine2Values.valid = this.checkValidity(newValue.addLine2Value, newValue.addLine2Values);
                newValue.addLine2Touched = true;
                this.setState({ value: newValue });
                break;
            case 8: newValue = { ...this.state.value };
                newValue.cityValue = event.target.value;
                newValue.cityValues.valid = this.checkValidity(newValue.cityValue, newValue.cityValues);
                newValue.cityTouched = true;
                this.setState({ value: newValue });
                break;
            case 9: newValue = { ...this.state.value };
                newValue.zipValue = event.target.value;
                newValue.zipValues.valid = this.checkValidity(newValue.zipValue, newValue.zipValues);
                newValue.zipTouched = true;
                this.setState({ value: newValue });
                break;
            case 10: newValue = { ...this.state.value };
                newValue.stateValue = event.target.value;
                newValue.stateValues.valid = this.checkValidity(newValue.stateValue, newValue.stateValues);
                newValue.stateTouched = true;
                this.setState({ value: newValue });
                break;
            case 11: let placeFlag = null;
                for (let i = 0; i < this.state.campingVenue.length; i++) {
                    if (this.state.campingVenue[i].place === event.target.value) {
                        placeFlag = this.state.campingVenue[i].desc;
                    }
                }
                this.setState({ selectedPlaceOption: placeFlag })
                newValue = { ...this.state.value };
                newValue.venueValue = event.target.value;
                this.setState({ value: newValue });
                break;
            case 12: let dayFlag = null;
                for (let i = 0; i < this.state.availableDates.length; i++) {
                    if (this.state.availableDates[i].date === event.target.value) {
                        dayFlag = this.state.availableDates[i].day;
                    }
                }
                this.setState({ selectedDayOption: dayFlag })
                newValue = { ...this.state.value };
                newValue.dateValue = event.target.value;
                this.setState({ value: newValue });
                break;
            case 13: let paymentFlag = null;
                let phoneFlag = null;
                for (let i = 0; i < this.state.paymentOptions.length; i++) {
                    if (this.state.paymentOptions[i].mode === event.target.value) {
                        paymentFlag = this.state.paymentOptions[i].qrcode;
                        phoneFlag = this.state.paymentOptions[i].number;
                    }
                }
                this.setState({ selectedModeOption: paymentFlag, selectedPhoneOption: phoneFlag })
                newValue = { ...this.state.value };
                newValue.modeOfPayValue = event.target.value;
                this.setState({ value: newValue });
                break;
            case 14: newValue = { ...this.state.value };
                newValue.transactionValue = event.target.value;
                this.setState({ value: newValue });
                break;
            default: console.log('Invalid Entry');
                break;
        }
    }

    submitDataHandler = (event) => {
        this.setState({ loading: true })
        event.preventDefault();
        const orders = this.state.value;
        axios.post('https://travel-banjara-queries.firebaseio.com/orders.json', orders)
            .then(response => {
                this.setState({ loading: false })
                this.props.history.push('/MainPage/aboutus')
            });
    }

    render() {
        const nameClass = [classes.inputBox], genderClass = [classes.inputBox], emailClass = [classes.inputBox],
            phoneClass = [classes.inputBox], dobClass = [classes.inputBox], addLine1Class = [classes.inputBox],
            addLine2Class = [classes.inputBox], cityClass = [classes.inputBox], zipClass = [classes.inputBox],
            stateClass = [classes.inputBox];
        if (!this.state.value.nameValues.valid && this.state.value.nameTouched) {
            nameClass.push(classes.red);
        }
        if (!this.state.value.genderValues.valid && this.state.value.genderTouched) {
            genderClass.push(classes.red);
        }
        if (!this.state.value.emailValues.valid && this.state.value.emailTouched) {
            emailClass.push(classes.red);
        }
        if (!this.state.value.phoneValues.valid && this.state.value.phoneTouched) {
            phoneClass.push(classes.red);
        }
        if (!this.state.value.dobValues.valid && this.state.value.dobTouched) {
            dobClass.push(classes.red);
        }
        if (!this.state.value.addLine1Values.valid && this.state.value.addLine1Touched) {
            addLine1Class.push(classes.red);
        }
        if (!this.state.value.addLine2Values.valid && this.state.value.addLine2Touched) {
            addLine2Class.push(classes.red);
        }
        if (!this.state.value.cityValues.valid && this.state.value.cityTouched) {
            cityClass.push(classes.red);
        }
        if (!this.state.value.zipValues.valid && this.state.value.zipTouched) {
            zipClass.push(classes.red);
        }
        if (!this.state.value.stateValues.valid && this.state.value.stateTouched) {
            stateClass.push(classes.red);
        }

        let pageStatus =
            <div>
                <div className={classes.mainDiv}>
                    {/* <div className={classes.registerHeading}> */}
                    <p className={classes.registerHeading}> Registration </p>
                    {/* </div> */}
                    <br></br>
                    <div className={classes.formFill}>
                        <br></br>
                        <br></br>
                        <div className={classes.formStyle}>
                            <form onSubmit={this.submitDataHandler}>
                                <fieldset>
                                    <div style={{ width: '97%', border: '1px solid black', padding: '8px', borderRadius: '3px' }}>
                                        <legend style={{ textAlign: 'center', color: 'black' }}><span className={classes.number}>1</span> Your Personal Info</legend>
                                        <label>Chill! We would not be sharing it with anybody. </label>
                                    </div>
                                    <br></br>
                                    <br></br>
                                    <input className={nameClass.join(' ')} name="field1" placeholder="Name *" value={this.state.value.nameValue} onChange={(event) => this.valueChangeHandler(event, 0)} />
                                    <select style={{ height: '45px', backgroundColor: '#d3e5f7' }} value={this.state.value.genderValue} onChange={(event) => this.valueChangeHandler(event, 1)}>
                                        <option>Select*</option>
                                        <option>Male</option>
                                        <option>Female</option>
                                    </select>
                                    <input className={emailClass.join(' ')} name="field3" placeholder="Your Email *" value={this.state.value.emailValue} onChange={(event) => this.valueChangeHandler(event, 2)} />
                                    <input className={phoneClass.join(' ')} name="field4" placeholder="Phone Number*" value={this.state.value.phoneValue} onChange={(event) => this.valueChangeHandler(event, 3)} />
                                    <input className={classes.inputBox} name="field5" placeholder="Secondary Phone Number" value={this.state.value.secPhoneValue} onChange={(event) => this.valueChangeHandler(event, 4)} />
                                    <input className={dobClass.join(' ')} name="field6" placeholder="Born On DD/MM/YYYY *" value={this.state.value.dobValue} onChange={(event) => this.valueChangeHandler(event, 5)} />
                                </fieldset>
                                <fieldset>
                                    <div style={{ width: '97%', border: '1px solid black', padding: '8px', borderRadius: '3px' }}>
                                        <legend style={{ textAlign: 'center', color: 'black' }}><span className={classes.number}>2</span> Your're From </legend>
                                        <label>In case we need to send you some goodies post our camp. </label>
                                    </div>
                                    <br></br>
                                    <br></br>
                                    <input className={addLine1Class.join(' ')} name="field7" placeholder="Address Line 1 *" value={this.state.value.addLine1Value} onChange={(event) => this.valueChangeHandler(event, 6)} />
                                    <input className={addLine2Class.join(' ')} name="field8" placeholder="Address Line 2 *" value={this.state.value.addLine2Value} onChange={(event) => this.valueChangeHandler(event, 7)} />
                                    <input className={cityClass.join(' ')} name="field9" placeholder="City *" value={this.state.value.cityValue} onChange={(event) => this.valueChangeHandler(event, 8)} />
                                    <input className={zipClass.join(' ')} name="field10" placeholder="Zip Code *" value={this.state.value.zipValue} onChange={(event) => this.valueChangeHandler(event, 9)} />
                                    <input className={stateClass.join(' ')} name="field11" placeholder="State *" value={this.state.value.stateValue} onChange={(event) => this.valueChangeHandler(event, 10)} />
                                </fieldset>
                                <fieldset>
                                    <div style={{ width: '97%', border: '1px solid black', padding: '8px', borderRadius: '3px' }}>
                                        <legend style={{ textAlign: 'center', color: 'black' }}><span className={classes.number}>3</span> Camping Details </legend>
                                        <label>So that you get a warm welcome. </label>
                                    </div>
                                    <br></br>
                                    <br></br>
                                    <label style={{ textAlign: 'left', fontSize: '16px' }}><strong>Camping Venue</strong></label>
                                    <select style={{ height: '45px', backgroundColor: '#d3e5f7' }} value={this.state.value.venueValue} onChange={(event) => this.valueChangeHandler(event, 11)}>
                                        {this.state.campingVenue.map((x) => <option key={x.place} value={x.place}>{x.place}</option>)}
                                    </select>
                                    <label style={{ textAlign: 'left', fontSize: '16px' }}><strong>Venue Description</strong></label>
                                    <div className={classes.day}>{this.state.selectedPlaceOption}</div>
                                    <label style={{ textAlign: 'left', fontSize: '16px' }}><strong>Camping Date</strong></label>
                                    <select style={{ height: '45px', backgroundColor: '#d3e5f7' }} value={this.state.value.dateValue} onChange={(event) => this.valueChangeHandler(event, 12)}>
                                        {this.state.availableDates.map((x) => <option key={x.date} value={x.date}>{x.date}</option>)}
                                    </select>
                                    <label style={{ textAlign: 'left', fontSize: '16px' }}><strong>Camping Day</strong></label>
                                    <div className={classes.date}>{this.state.selectedDayOption}</div>
                                </fieldset>
                                <fieldset>
                                    <div style={{ width: '97%', border: '1px solid black', padding: '8px', borderRadius: '3px' }}>
                                        <legend style={{ textAlign: 'center', color: 'black' }}><span className={classes.number}>4</span> Payment </legend>
                                        <label>Afterall, nothing in this world is free. </label>
                                    </div>
                                    <br></br>
                                    <br></br>
                                    <label style={{ textAlign: 'left', fontSize: '16px' }}><strong>Mode of Payment</strong></label>
                                    <select style={{ height: '45px', backgroundColor: '#d3e5f7' }} value={this.state.value.modeOfPayValue} onChange={(event) => this.valueChangeHandler(event, 13)}>
                                        {this.state.paymentOptions.map((x) => <option key={x.mode} value={x.mode}>{x.mode}</option>)}
                                    </select>
                                    <label style={{ textAlign: 'left', fontSize: '16px' }}><strong>Scan this Code</strong></label>
                                    <br></br>
                                    <img style={{ display: 'block', margin: 'auto', width: '200px', height: '200px' }} src={this.state.selectedModeOption} alt="payments"></img>
                                    <br></br>
                                    <br></br>
                                    <label style={{ textAlign: 'left', fontSize: '16px' }}><strong>Having trouble scanning code?, Use Phone Number Instead.</strong></label>
                                    <div className={classes.date}>{this.state.selectedPhoneOption}</div>
                                    <input type="text" name="field12" placeholder="Transaction ID *" value={this.state.value.transactionValue} onChange={(event) => this.valueChangeHandler(event, 14)} />
                                    <label style={{ textAlign: 'left', fontSize: '16px' }}><strong>Want us to help you find the Transaction ID?</strong></label>
                                    <div className={classes.paymentDetails}>
                                        <strong>For Phone Pe :</strong>
                                        <br></br>
                                        It is a 23 characters long code consisting of alphanumeric characters which you would find in the History section of your Phone Pe account.
                                        <br></br>
                                        <br></br>
                                        <strong>For Google Pay :</strong>
                                        <br></br>
                                        It is a 12 digit long code reflected under the name UPI Transaction ID.
                                    </div>
                                </fieldset>
                                <input type="submit" value="Submit" />
                            </form>
                        </div>
                    </div>
                </div>
                <div className={classes.footerHeight}><Footer /></div>
            </div>
        if (this.state.loading) {
            pageStatus = <div className={classes.mainDiv}><Spinner /></div>
        }
        return (
            <div>
                {pageStatus}
            </div>
        )
    }
}

export default Register;