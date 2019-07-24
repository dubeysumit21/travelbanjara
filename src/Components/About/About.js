import React from 'react';
import classes from './About.css';
import Camping from '../../assets/images/camping-tent.png';
import Bonfire from '../../assets/images/camping.png';
import Barbecue from '../../assets/images/barbecue.png';
import Dinner from '../../assets/images/dinner.png';
import Fun from '../../assets/images/laugh.png';
import Footer from '../Footer/Footer';

const blogs = () => {
    return(
        <div>
        <div className={classes.mainDiv}>
            <div className={classes.blogHeading}>
            <h2 className="animated fadeInLeftBig"> About Us </h2>
            </div>
            <h3 style={{color: 'black', marginTop: '5px'}}>If you choose to camp with us, you get the following : </h3>
            <div className={[classes.campingIntro, classes.campingBack].join(' ')}>
                <img className={classes.campingImage} src={Camping} alt="unloaded image" />
                <div className={classes.campingDescr}>
                    <h3 className="animated fadeIn">Camping</h3>
                    <p className="animated fadeIn">Camping is the highlight of our trip. 
                    We provide you a two person tent with pillows and sleeping bags. 
                    The tents are enough for two people to sleep comfortably and the sleeping bags can be 
                    used in temperatures as low as 10 degrees. The sweet lullaby of the sea waves makes 
                    it sure that you have a sound sleep.</p> 
                </div>
            </div>
            <br />
            <div className={[classes.campingIntro, classes.campingBack].join(' ')}>
                <img className={classes.campingImage} src={Bonfire} alt="unloaded image" />
                <div className={classes.campingDescr}>
                    <h3 className="animated fadeIn">Bonfire</h3>
                    <p className="animated fadeIn">No camping trip is complete without a bonfire. 
                    And most of the times, it’s fun just getting the fire going. You can be huddled 
                    around the fire with your friends singing, telling stories, drinking and making merry.</p> 
                </div>
            </div>
            <br />
            <div className={[classes.campingIntro, classes.campingBack].join(' ')}>
                <img className={classes.campingImage} src={Barbecue} alt="unloaded image" />
                <div className={classes.campingDescr}>
                    <h3 className="animated fadeIn">Barbecue</h3>
                    <p className="animated fadeIn">While you have fun around the campfire, we will serve you 
                    delectable grilled food. Tandoori Chicken, Turkish kebabs, Paneer Tikkas, Veg Kebabs and 
                    lots of other stuff. The tender and succulent meat covered in its own juices, brushed with 
                    butter and served with a side of various chutneys will definitely keep you asking for more.</p> 
                </div>
            </div>
            <br />
            <div className={[classes.campingIntro, classes.campingBack].join(' ')}>
                <img className={classes.campingImage} src={Dinner} alt="unloaded image" />
                <div className={classes.campingDescr}>
                    <h3 className="animated fadeIn">Dinner</h3>
                    <p className="animated fadeIn">After we’re done with the grilled starters, we can move onto 
                    the dinner. Though there are various items, Naan and Butter Masala is our hit. The Butter Naan 
                    is cooked in front of you and even you can be a part of the process. I have had many people want 
                    to take part in the cooking process and they seem to enjoy themselves.</p> 
                </div>
            </div>
            <br />
            <div className={[classes.campingIntro, classes.campingBack].join(' ')}>
                <img className={classes.campingImage} src={Fun} alt="unloaded image" />
                <div className={classes.campingDescr}>
                <h3 className="animated fadeIn">Unlimited Fun and Friends</h3>
                    <p className="animated fadeIn">It goes without saying that any trip is incomplete without your favourite
                     people. Your friends. Our camps are a great way to cherish that friendship whether it be unwind after a 
                     long week, a birthday party or just a boys day out kind of thing. Honestly any excuse is good as long as 
                     its spent camping with your friends.  </p> 
                </div>
            </div>
        </div>
        <div className={classes.footerHeight}><Footer /></div>
        </div>
    )
}

export default blogs;