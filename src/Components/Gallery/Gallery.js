import React, { Component } from 'react';
import classes from './Gallery.css';
import { Route } from 'react-router-dom';
import GalleryModal from '../GalleryModal/GalleryModal';
import Footer from '../Footer/Footer';
import image1 from '../../assets/gallery/Day1pic1.JPG';
import image2 from '../../assets/gallery/Day2pic1.JPG';
import image3 from '../../assets/gallery/Day3pic1.JPG';
import image4 from '../../assets/gallery/Day4pic1.jpeg';
import image5 from '../../assets/gallery/Day5pic1.jpeg';
import image6 from '../../assets/gallery/Day6pic1.JPG';
import image7 from '../../assets/gallery/Day7pic1.jpg';
import image8 from '../../assets/gallery/Day8pic1.JPG';


class Gallery extends Component{


    state={
        show: false,
        flag: ''
    }

    showModalHandler = (props) => {
        this.setState((prevState) => {
            return( {show: !prevState.show})
        });
        this.setState( { flag: props });
    }

    closeModalHandler = () => {
        this.setState((prevState) => {
            return( {show: !prevState.show})
        });
    }
    render(){
        const imageArray = [
            image1, image2,
            image3, image4,
            image5, image6,
            image7, image8
        ];
        return(
            <div className={classes.mainDiv}>
                <div className={classes.galleryHeading}>
                    <h2 className="animated fadeInLeftBig"> Banjara's Gallery </h2>
                </div>
                <div className={classes.galleryMain}>
                    <img className={classes.imageThumb} src={image1} alt="unloadeimage.jpg"/>
                    <p className={classes.paragraph}>What could be a better day to start the company than on Republic Day? On 26th January, 2019 we did our first trip with a biker's group from Bhubaneswar, called Creed Bulls.
The best about the trip for us was that we got to ride with them. 
Since it was our first time conducting a trip ever, we were very nervous. But the guys were very cool and patient as we tried to juggle so much work and serve them. From setting up the tents to barbecuing and from getting the bonfire going to making dinner, all of them pitched in and helped.
As they say, first time is always special. <strong>Venue : Chandrabhaga Date : 26th January, 2019</strong></p>
                    <button className={classes.galleryButton} onClick={() => this.showModalHandler('day1')}>View Images</button>
                    {
                        this.state.show ? <GalleryModal id={this.state.flag} clicked={this.closeModalHandler}/> : null
                    }
                </div>
                <br />
                <div className={classes.galleryMain}>
                    <img className={classes.imageThumb} src={image2} alt="unloadeimage.jpg"/>
                    <p className={classes.paragraph}>This trip was brought to us by the powers of social media. After conducting our first trip a week ago, we had put up the pictures on our facebook page. Seeing that Subham contacted us. He wanted to camp with his friends. 
We immediately made all the arrangements and were off to camping. 
The best part about this camp was the honest and constructive feedback we got about what can be done to make it better and more fun for the customers. It will remain an important trip for us forever because we got to learn so much.   <strong>Venue : Chandrabhaga Date : 02nd February, 2019</strong></p>
                    <button className={classes.galleryButton} onClick={() => this.showModalHandler('day2')}>View Images</button>
                    {
                        this.state.show ? <GalleryModal id={this.state.flag} clicked={this.closeModalHandler}/> : null
                    }
                </div>
                <br />
                <div className={classes.galleryMain}>
                    <img className={classes.imageThumb} src={image3} alt="unloadeimage.jpg"/>
                    <p className={classes.paragraph}>The greatest publicity a company can get is through word of mouth. People are more convinced about something when they hear it from the people who have already experienced it. That was the case here as well.
Anil had already camped with us in the first camp. When he iterated his experience to people in his office, they wanted to do it too. And this is how we did our third camp.<strong>Venue : Chandrabhaga Date : 17th February, 2019</strong></p>
                    <button className={classes.galleryButton} onClick={() => this.showModalHandler('day3')}>View Images</button>
                    {
                        this.state.show ? <GalleryModal id={this.state.flag} clicked={this.closeModalHandler}/> : null
                    }
                </div>
                <br />
                <div className={classes.galleryMain}>
                    <img className={classes.imageThumb} src={image4} alt="unloadeimage.jpg"/>
                    <p className={classes.paragraph}>Chilika Lake is the largest coastal lagoon of India. It is the site of the largest wintering ground for migratory birds on the Indian Sub-continent and hence of great importance to the state tourism. It has many small and large islands which makes it perfect for camping along with bird watching and dolphin sightings.
This was our second trip with the members of Creed Bulls albeit in a different location.
But the experience with them remained the same. Fun, amazing and relaxing. <strong>Venue : Satpada Date : 02nd March, 2019</strong></p>
                    <button className={classes.galleryButton} onClick={() => this.showModalHandler('day4')}>View Images</button>
                    {
                        this.state.show ? <GalleryModal id={this.state.flag} clicked={this.closeModalHandler}/> : null
                    }
                </div>
                <br />
                <div className={classes.galleryMain}>
                    <img className={classes.imageThumb} src={image5} alt="unloadeimage.jpg"/>
                    <p className={classes.paragraph}>On this trip, we got a chance to host three prominent members of a cycling group of Bhubaneswar, Happy Cycling Org. We reached Chandrabhaga early and set up the tents while they rode their cycles from Bhubaneswar to Chandrabhaga and joined us later at night.
It was an amazing experience interacting with them and learning about the benefits of cycling, both physical and environmental. We are even contemplating joining their group. We also had a mini Holi celebration in the morning.<strong>Venue : Chandrabhaga Date : 23rd March, 2019</strong></p>
                    <button className={classes.galleryButton} onClick={() => this.showModalHandler('day5')}>View Images</button>
                    {
                        this.state.show ? <GalleryModal id={this.state.flag} clicked={this.closeModalHandler}/> : null
                    }
                </div>
                <br />
                <div className={classes.galleryMain}>
                    <img className={classes.imageThumb} src={image6} alt="unloadeimage.jpg"/>
                    <p className={classes.paragraph}>Old roommates were in town and we had to plan a trip and Satpada seemed like the best option. The experience in Satpada is altogether different than Chandrabhaga. The boat rides, the islands, the birds, the dolphins and the marine life. You camp literally in no man's land, between the lake and the sea. For a night you are the only people on the Island. Just few friends chilling and having a good time with no one to bother them. What else could one ask for? <strong>Venue : Satpada Date : 3rd April, 2019</strong></p>
                    <button className={classes.galleryButton} onClick={() => this.showModalHandler('day6')}>View Images</button>
                    {
                        this.state.show ? <GalleryModal id={this.state.flag} clicked={this.closeModalHandler}/> : null
                    }
                </div>
                <br />
                <div className={classes.galleryMain}>
                    <img className={classes.imageThumb} src={image7} alt="unloadeimage.jpg"/>
                    <p className={classes.paragraph}>This trip will always remain etched in our memory as " The Night of the Storm." Everything went according to how it was supposed to go until we went to sleep around 12 am. Ghastly winds started blowing around that time and lasted till 6 in the morning. We couldn't sleep the whole night. Screaming waves, black sky, thunderstorm and our tent completely bent down on us. We would routinely peek our head out of our tent to see if the people were okay, if the tents were okay and if its gonna rain. But, thankfully it didn't rain and we had one less thing to worry about. 
Somehow we passed the night and emerged victorious the next day. It really did make up for an awesome experience.<strong>Venue : Chandrabhaga Date : 6th April, 2019</strong></p>
                    <button className={classes.galleryButton} onClick={() => this.showModalHandler('day7')}>View Images</button>
                    {
                        this.state.show ? <GalleryModal id={this.state.flag} clicked={this.closeModalHandler}/> : null
                    }
                </div>
                <br />
                <div className={classes.galleryMain}>
                    <img className={classes.imageThumb} src={image8} alt="unloadeimage.jpg"/>
                    <p className={classes.paragraph}>After the last stormy night of a trip, this one came as a relief as the weather was very calm. An old friend from college, Mukesh and his colleagues were my guest. This trip also saw the addition of few other dishes to the dinner menu. Overall it was an amazing trip.<strong>Venue : Chandrabhaga Date : 13th April, 2019</strong></p>
                    <button className={classes.galleryButton} onClick={() => this.showModalHandler('day8')}>View Images</button>
                    {
                        this.state.show ? <GalleryModal id={this.state.flag} clicked={this.closeModalHandler}/> : null
                    }
                </div>
                <div style={{position: 'relative', top: '50px'}}><Footer /></div>    
            </div>
        )
    }
}

export default Gallery;