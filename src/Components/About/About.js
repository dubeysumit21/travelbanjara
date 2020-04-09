import React, { Component } from 'react';
import classes from './About.css';
import Camping from '../../assets/images/camping-tent.png';
import Bonfire from '../../assets/images/camping.png';
import Barbecue from '../../assets/images/barbecue.png';
import Dinner from '../../assets/images/dinner.png';
import Fun from '../../assets/images/laugh.png';
import Footer from '../Footer/Footer';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { render } from 'react-dom';
import Next from '../../assets/images/nextIcon.ico';
import Pic1 from '../../assets/gallery/Day1pic3.JPG';
import Pic2 from '../../assets/gallery/Day1pic4.jpg';
import Pic3 from '../../assets/gallery/Day2pic1.JPG';
import Pic4 from '../../assets/gallery/Day3pic1.JPG';
import Pic5 from '../../assets/gallery/Day4pic4.jpeg';

const IndividualItem = (props) => {
    const { item } = props;
    return (
        <div className={classes.individualImageWrapper}>
            <img src={item.url} alt="unloaded" className={classes.individualImage} />
        </div>
    );
}

const IconImage = (props) => {
    const { item } = props;
    return (
        <div className={classes.iconImageWrapper}>
            <img className={classes.campingImage} src={item.icon} alt="unloaded image" />
            <p className={classes.iconLabel}>{item.text}</p>
        </div>
    );
}

const BlogImageCell = (props) => {
    const { item, type } = props;
    return (
        <div className={classes.blogSlider1}>
            <img className={classes.blogSlider} src={item.image} alt="unloaded image" />
            <div className={classes.viewBlogWrapper}>
    <p className={classes.blogSliderText}>{type === 'gallery' ? 'View Image' : 'View Blog'}</p>
            </div>

        </div>
    );
}
class Blogs extends React.Component {
    FirstSliderConfig = [
        { url: 'https://www.michigan.org/sites/default/files/styles/15_6_desktop/public/camping-hero_0_0.jpg?itok=mgGs0-vw&timestamp=1520373602', id: 1 },
        { url: 'https://www.thegreatnext.com/uploads/category/1920_600/bhandardara_camping_c.jpg', id: 2 },
        { url: 'https://www.uniteddigitallearning.com/wp-content/uploads/2018/06/camping-l.jpg', id: 3 },
    ];
    IconConfig = [
        { icon: Camping, id: 1, text: 'Camping' },
        { icon: Bonfire, id: 1, text: 'Bonfire' },
        { icon: Barbecue, id: 1, text: 'Barbecue' },
        { icon: Dinner, id: 1, text: 'Dinner' },
        { icon: Fun, id: 1, text: 'Fun' },
    ];
    BlogImageConfig = [
        { image: 'https://images.pexels.com/photos/1687845/pexels-photo-1687845.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', id: 1 },
        { image: 'https://koa.com/blog/images/solo-camping-tips.jpg?preset=blogPhoto', id: 1 },
        { image: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80', id: 1 },
        { image: 'https://s3.ap-south-1.amazonaws.com/campmonk.com/seo/5852dff0-9fd7-11e8-b9fc-191a4526f1bf.jpeg', id: 1 },
    ];
    GalleryImageConfig = [
        { image: Pic1, id: 1},
        { image: Pic2, id: 2},
        { image: Pic3, id: 3},
        { image: Pic4, id: 4},
        { image: Pic5, id: 5},
    ];
    render() {
        return (
            <div className={classes.mainDiv}>
                <Slider arrows adaptiveHeight={true} autoplay={true} slidesToShow={1} slidesToScroll={1} dots={false} fade pauseOnHover speed={2000}>
                    {this.FirstSliderConfig.map(im => <IndividualItem item={im} />)}
                </Slider>
                <div className={classes.iconWrapper}>
                    {this.IconConfig.map(ic => <IconImage item={ic} />)}
                </div>
                <div className={classes.whyUs}>
                    <h1 style={{ width: '100%', textAlign: 'center', marginBottom: '50px' }}>Why Camp with Us</h1>
                    <div className={classes.whyUsBody}>
                        <p className={classes.leftSide}>We provide you a two person tent with pillows and sleeping bags.
                        The tents are enough for two people to sleep comfortably and the sleeping bags can be
                        used in temperatures as low as 10 degrees. The sweet lullaby of the sea waves makes
                        it sure that you have a sound sleep.No camping trip is complete without a bonfire.
                        And most of the times, it’s fun just getting the fire going. You can be huddled
                        around the fire with your friends singing, telling stories, drinking and making merry.</p>
                        <img className={classes.whyUsImage} src="https://www.mensjournal.com/wp-content/uploads/2015/02/shutterstock_242371765.jpg" alt="unloaded image" />
                    </div>
                </div>
                <div className={classes.blogSection}>
                    <h1 style={{ width: '100%', textAlign: 'center', marginBottom: '50px' }}>Our Blogs</h1>
                    <Slider infinite centerMode adaptiveHeight={true} autoplay={true} slidesToShow={3} slidesToScroll={1} speed={200} color="transparent">
                        {this.BlogImageConfig.map(bm => <BlogImageCell item={bm} />)}
                    </Slider>
                </div>
                <div className={classes.gallerySection}>
                    <h1 style={{ width: '100%', textAlign: 'center', marginBottom: '50px' }}>Gallery</h1>
                    <Slider infinite centerMode adaptiveHeight={true} autoplay={true} slidesToShow={3} slidesToScroll={1} speed={200} color="transparent">
                        {this.GalleryImageConfig.map(bm => <BlogImageCell item={bm} type="gallery"/>)}
                    </Slider>
                </div>
                <div className={classes.footerHeight}><Footer /></div>
            </div>
        );
    }
}

export default Blogs;