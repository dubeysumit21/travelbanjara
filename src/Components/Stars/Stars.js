import React from 'react';
import Star from '../../assets/images/star.png';

const star = (props) => {
    let starArray = [];
    for(let i=0; i<props.count; i++){
        starArray.push(Star);
    }   
    return(
        <div>
            {starArray.map((x, index) => <img key={index} src={x} alt="unloaded" />)}
        </div>
    )
}
export default star;