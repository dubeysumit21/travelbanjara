import React, {Component} from 'react';
import classes from './Comments.css';
import axios from 'axios';
import User from '../../assets/images/user.png';
import Stars from '../Stars/Stars';

class Comments extends Component{

    state={
        comments : []
    }

    componentDidMount () {
        axios.get('https://travel-banjara-queries.firebaseio.com/comments.json')
             .then(response => {
                 const newComments = response.data;
                 var commentArray = Object.keys(newComments).map((x) => newComments[x]);
                 this.setState( {comments : commentArray} );
             })
    }
    
    render(){
            return(
                <div>
                    <div className={classes.reviewSection}>
                    {
                    this.state.comments.map((x, index) => 
                    <div key={index} className={classes.commentBox}>
                        <div className={classes.commentImageBox}>
                            <img className={classes.commentImage} src={User} alt="unloaded" />
                            <p style={{textAlign: 'center', position: 'relative', top: '15px'}}>{x.name}</p>
                        </div>
                        <div className={classes.commentTextBox}>
                            <div>
                                <p>{x.comment}</p>
                            </div>
                            <div className={classes.starBox}>
                                <Stars count={x.rating}/>
                            </div>
                        </div>
                    </div>)
                    }
                    </div>
                </div>
            )
        }
    }
export default Comments;