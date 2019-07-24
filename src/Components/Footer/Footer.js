import React from 'react';
import classes from './Footer.css';
import facebook from '../../assets/SocialMediaLogos/png/036-facebook.png';
import twitter from '../../assets/SocialMediaLogos/png/008-twitter.png';
import instagram from '../../assets/SocialMediaLogos/png/029-instagram.png';


const footer = (props) => {
    console.log(props);
    return(
        <div className={classes.mainFooter}>
            <div className={classes.footerDiv1}>
                <div className={classes.footerDiv1part1}>
                    <p>STAY CONNECTED</p>
                    <p style={{textAlign: 'justify', fontSize: '10px', width: '200px', display: 'block', margin: 'auto'}}>Join and help us Spread the magic of Mother Nature.</p>
                    <span><a href="https://www.facebook.com/thetravelbanjara" target="_blank"><img style={{marginRight: '30px', marginLeft: '30px', marginTop: '20px', marginBottom: '12px'}}src={facebook} alt="facebook.png" /></a></span>
                    <span><a href="https://www.twitter.com/thetravelbanjara.official" target="_blank"><img style={{marginRight: '30px', marginTop: '20px', marginBottom: '12px'}}src={twitter} alt="twitter.png" /></a></span>
                    <span><a href="https://www.instagram.com/thetravelbanjara.official" target="_blank"><img style={{marginRight: '30px', marginTop: '20px', marginBottom: '12px'}}src={instagram} alt="instagram.png" /></a></span>
                </div>
                <div className={classes.footerDiv1part1}>
                    <p>THE TRAVEL BANJARA</p>
                    <p style={{textAlign: 'justify', fontSize: '10px', width: '300px', display: 'block', margin: 'auto'}}>THE TRAVEL BANJARA is an initiative to make people come closer to the Mother Nature. We strive to provide awesome hospitality so that you leave with a mind full of memories and a heart full of soul. We exist to keep you closer to the environment.</p>
                </div>
            </div>
            <br></br>
            <hr></hr>
            <div>
                <p style={{fontSize: '15px'}}>The Travel Banjara  &#8226; Main : +91 9583656576 &#8226; Support : +91 8249232041 </p>
                <hr></hr>
                <div>
                    <span><p style={{fontSize: '12px'}}><u>Privacy Policy</u></p></span>
                    <span style={{fontSize: '12px'}}> &#169; The Travel Banjara</span>
                </div>
            </div>
        </div>
    )
}

export default footer;