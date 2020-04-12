import React, { Component } from 'react';
import classes from './GalleryModal.css';
import Day1pic1 from '../../assets/gallery/Day1pic1.JPG';
import Day1pic2 from '../../assets/gallery/Day1pic2.JPG';
import Day1pic3 from '../../assets/gallery/Day1pic3.JPG';
import Day1pic4 from '../../assets/gallery/Day1pic4.jpg';
import Day2pic1 from '../../assets/gallery/Day2pic1.JPG';
import Day2pic2 from '../../assets/gallery/Day2pic2.JPG';
import Day2pic3 from '../../assets/gallery/Day2pic3.JPG';
import Day2pic4 from '../../assets/gallery/Day2pic4.JPG';
import Day3pic1 from '../../assets/gallery/Day3pic1.JPG';
import Day3pic2 from '../../assets/gallery/Day3pic2.JPG';
import Day3pic3 from '../../assets/gallery/Day3pic3.JPG';
import Day3pic4 from '../../assets/gallery/Day3pic4.JPG';
import Day4pic1 from '../../assets/gallery/Day4pic1.jpeg';
import Day4pic2 from '../../assets/gallery/Day4pic2.jpeg';
import Day4pic3 from '../../assets/gallery/Day4pic3.jpeg';
import Day4pic4 from '../../assets/gallery/Day4pic4.jpeg';
import Day5pic1 from '../../assets/gallery/Day5pic1.jpeg';
import Day5pic2 from '../../assets/gallery/Day5pic2.jpeg';
import Day5pic3 from '../../assets/gallery/Day5pic3.jpeg';
import Day5pic4 from '../../assets/gallery/Day5pic4.jpeg';
import Day6pic1 from '../../assets/gallery/Day6pic1.JPG';
import Day6pic2 from '../../assets/gallery/Day6pic2.JPG';
import Day6pic3 from '../../assets/gallery/Day6pic3.JPG';
import Day6pic4 from '../../assets/gallery/Day6pic4.JPG';
import Day7pic1 from '../../assets/gallery/Day7pic1.jpg';
import Day7pic2 from '../../assets/gallery/Day7pic2.jpg';
import Day7pic3 from '../../assets/gallery/Day7pic3.jpg';
import Day7pic4 from '../../assets/gallery/Day7pic4.jpg';
import Day8pic1 from '../../assets/gallery/Day8pic1.JPG';
import Day8pic2 from '../../assets/gallery/Day8pic2.JPG';
import Day8pic3 from '../../assets/gallery/Day8pic3.jpeg';
import Day8pic4 from '../../assets/gallery/Day8pic4.jpeg';
import next from '../../assets/MultimediaLogos/png/next-1.png';
import back from '../../assets/MultimediaLogos/png/back.png';
import cross from '../../assets/images/cross.png';


class GalleryModal extends Component {

    state = {
        day1: {
            imageArray: [Day1pic1, Day1pic2, Day1pic3, Day1pic4],
            counter: 0
        },
        day2: {
            imageArray: [Day2pic1, Day2pic2, Day2pic3, Day2pic4],
            counter: 0
        },
        day3: {
            imageArray: [Day3pic1, Day3pic2, Day3pic3, Day3pic4],
            counter: 0
        },
        day4: {
            imageArray: [Day4pic1, Day4pic2, Day4pic3, Day4pic4],
            counter: 0
        },
        day5: {
            imageArray: [Day5pic1, Day5pic2, Day5pic3, Day5pic4],
            counter: 0
        },
        day6: {
            imageArray: [Day6pic1, Day6pic2, Day6pic3, Day6pic4],
            counter: 0
        },
        day7: {
            imageArray: [Day7pic1, Day7pic2, Day7pic3, Day7pic4],
            counter: 0
        },
        day8: {
            imageArray: [Day8pic1, Day8pic2, Day8pic3, Day8pic4],
            counter: 0
        }
    }

    nextImageHandler = () => {
        switch (this.props.id) {
            case 'day1': let newDay = { ...this.state.day1 };
                if (newDay.counter < newDay.imageArray.length - 1)
                    newDay.counter = newDay.counter + 1;
                else
                    newDay.counter = 0;
                this.setState({ day1: newDay });
                break;
            case 'day2': newDay = { ...this.state.day2 };
                if (newDay.counter < newDay.imageArray.length - 1)
                    newDay.counter = newDay.counter + 1;
                else
                    newDay.counter = 0;
                this.setState({ day2: newDay });
                break;
            case 'day3': newDay = { ...this.state.day3 };
                if (newDay.counter < newDay.imageArray.length - 1)
                    newDay.counter = newDay.counter + 1;
                else
                    newDay.counter = 0;
                this.setState({ day3: newDay });
                break;
            case 'day4': newDay = { ...this.state.day4 };
                if (newDay.counter < newDay.imageArray.length - 1)
                    newDay.counter = newDay.counter + 1;
                else
                    newDay.counter = 0;
                this.setState({ day4: newDay });
                break;
            case 'day5': newDay = { ...this.state.day5 };
                if (newDay.counter < newDay.imageArray.length - 1)
                    newDay.counter = newDay.counter + 1;
                else
                    newDay.counter = 0;
                this.setState({ day5: newDay });
                break;
            case 'day6': newDay = { ...this.state.day6 };
                if (newDay.counter < newDay.imageArray.length - 1)
                    newDay.counter = newDay.counter + 1;
                else
                    newDay.counter = 0;
                this.setState({ day6: newDay });
                break;
            case 'day7': newDay = { ...this.state.day7 };
                if (newDay.counter < newDay.imageArray.length - 1)
                    newDay.counter = newDay.counter + 1;
                else
                    newDay.counter = 0;
                this.setState({ day7: newDay });
                break;
            case 'day8': newDay = { ...this.state.day8 };
                if (newDay.counter < newDay.imageArray.length - 1)
                    newDay.counter = newDay.counter + 1;
                else
                    newDay.counter = 0;
                this.setState({ day8: newDay });
                break;
            default: console.log('wrong');
                break;
        }

    }
    previousImageHandler = () => {
        switch (this.props.id) {
            case 'day1': let newDay = { ...this.state.day1 };
                if (newDay.counter === 0) {
                    newDay.counter = newDay.imageArray.length - 1;
                }
                else {
                    newDay.counter = newDay.counter - 1;
                }
                this.setState({ day1: newDay });
                break;
            case 'day2': newDay = { ...this.state.day2 };
                if (newDay.counter === 0) {
                    newDay.counter = newDay.imageArray.length - 1;
                }
                else {
                    newDay.counter = newDay.counter - 1;
                }
                this.setState({ day2: newDay });
                break;
            case 'day3': newDay = { ...this.state.day3 };
                if (newDay.counter === 0) {
                    newDay.counter = newDay.imageArray.length - 1;
                }
                else {
                    newDay.counter = newDay.counter - 1;
                }
                this.setState({ day3: newDay });
                break;
            case 'day4': newDay = { ...this.state.day4 };
                if (newDay.counter === 0) {
                    newDay.counter = newDay.imageArray.length - 1;
                }
                else {
                    newDay.counter = newDay.counter - 1;
                }
                this.setState({ day4: newDay });
                break;
            case 'day5': newDay = { ...this.state.day5 };
                if (newDay.counter === 0) {
                    newDay.counter = newDay.imageArray.length - 1;
                }
                else {
                    newDay.counter = newDay.counter - 1;
                }
                this.setState({ day5: newDay });
                break;
            case 'day6': newDay = { ...this.state.day6 };
                if (newDay.counter === 0) {
                    newDay.counter = newDay.imageArray.length - 1;
                }
                else {
                    newDay.counter = newDay.counter - 1;
                }
                this.setState({ day6: newDay });
                break;
            case 'day7': newDay = { ...this.state.day7 };
                if (newDay.counter === 0) {
                    newDay.counter = newDay.imageArray.length - 1;
                }
                else {
                    newDay.counter = newDay.counter - 1;
                }
                this.setState({ day7: newDay });
                break;
            case 'day8': newDay = { ...this.state.day8 };
                if (newDay.counter === 0) {
                    newDay.counter = newDay.imageArray.length - 1;
                }
                else {
                    newDay.counter = newDay.counter - 1;
                }
                this.setState({ day8: newDay });
                break;
            default: console.log('wrong');
                break;
        }

    }
    render() {
        const { id } = this.props;
        const imageSource = this.state[id] && this.state[id].imageArray && this.state[id].imageArray[this.state[id].counter];
        return (
            <div className={classes.galleryModal}>
                <div style={{ float: 'right', margin: '5px' }}><img style={{ width: '30px', cursor: 'pointer' }} src={cross} alt="cross" onClick={this.props.clicked} /></div>
                <div className={classes.galleryComponents}>
                    <img src={back} className={classes.navigationButton} onClick={this.previousImageHandler} />
                    <div className={classes.imageHolder}><img className={classes.images} src={imageSource} alt="image1" /></div>
                    <img src={next} className={classes.navigationButton} onClick={this.nextImageHandler} />
                </div>
            </div>
        )
    }
}

export default GalleryModal;