import React, { Component } from 'react';
import classes from './Gallery.css';
import backgroundImage from '../../assets/gallery/Day4pic2.jpeg';
import contents from './content';
import Slider from 'react-slick';


const IndividualCell = (props) => {
    const { item, onClick } = props;
    return (
        <div>
            <div className={classes.galleryMain} onClick={onClick}>
                <p className={classes.paragraph}>{item.text}<strong>Venue : {item.date}</strong></p>
                <div className={classes.imageHolder}>
                    <Slider arrows={false} infinite autoplay={true} slidesToShow={1} slidesToScroll={1} fade speed={2000}>
                        {item.imageArray.map(ex =>
                            <div className={classes.individualImageWrapper}>
                                <img src={ex} alt="unloaded" className={classes.imageThumb} />
                            </div>)}
                    </Slider>
                </div>
            </div>
        </div>
    );
}
class Gallery extends Component {


    state = {
        show: false,
        modalflag: ''
    }

    showModalHandler = (props) => {
        console.info('props', props);
        this.setState((prevState) => {
            return ({ show: !prevState.show })
        });
        this.setState({ modalflag: props });
    }

    closeModalHandler = () => {
        this.setState((prevState) => {
            return ({ show: !prevState.show })
        });
    }
    render() {
        const { show, modalFlag } = this.state;
        const { clickHandler } = this.props;
        return (
            <div className={classes.mainDiv}>
                <img src={backgroundImage} className={classes.backgroundImage} alt="unloaded" />
                <div className={classes.imageContainer}>
                    {contents.map(c =>
                        <IndividualCell
                            item={c}
                            closeModalHandler={this.closeModalHandler}
                            showModalHandler={item => this.showModalHandler(item)}
                            show={show}
                            modalFlag={modalFlag}
                            onClick={() => clickHandler(c, 'gallery-type')}
                        />)}
                </div>
            </div>
        )
    }
}

export default Gallery;