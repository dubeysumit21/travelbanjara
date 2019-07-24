import React, { Component } from 'react';
import BackgroundImage from '../../assets/images/backgroundi-image.jpg';
import classes from './HomePageBackground.css';

class HomePageBackground extends Component{
     
    goToMainPageHandler = () => {
        this.props.history.push('/MainPage');
    }

    render() {
        return(
            <div>
                <div style={{position: 'fixed', zIndex: '1'}}>
                   <img className={classes.Background} src={BackgroundImage} alt="image.jpg"/>
                </div>
                <div className={classes.info}>
                    <h1>The Travel Banjara</h1>
                </div>
                <br></br>
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
                </div>
                <div style={{display: 'flex', justifyContent: 'center'}}><button onClick={this.goToMainPageHandler} className={classes.btn}>Enter</button></div>
            </div>
        )
    }
    
}

export default HomePageBackground;