import React, {Component} from 'react';
import classes from './Available.css';
import axios from 'axios';
import Comments from '../Comments/Comments';
import Footer from '../Footer/Footer';

class Available extends Component{

    state={
        comments:{
            name: null,
            comment: null,
            rating: ''
        },
        loading: false
    }

    valueChangeHandler = (event, identifier) => {
        switch(identifier){
            case 1: let newComments = {...this.state.comments};
            newComments.comment = event.target.value;
            this.setState( { comments : newComments } );
            break;
            case 2: newComments = {...this.state.comments};
            newComments.name = event.target.value;
            this.setState( { comments : newComments } )
            break;
            default: console.log('Wrong input');
            break;
        }
    }
    radioButtonHandler = (props) => {
        let newComments = {...this.state.comments};
        newComments.rating = props;
        this.setState( { comments : newComments} );
    }
    submitDataHandler = (event) => {
        this.setState( {loading : true} );
        event.preventDefault();
        const comments = this.state.comments;
        axios.post('https://travel-banjara-queries.firebaseio.com/comments.json', comments)
             .then(response => {
                 this.setState({loading : false});
                 const newComments = {...this.state.comments};
                 newComments.comment = '';
                 newComments.name = '';
                 this.setState ( {comments : newComments} )
             });
    }

    render(){
        let commentSection = 
                <div>
                    <form className={classes.formStyle} onSubmit={this.submitDataHandler}>
                        <p className={classes.commentLabel}>Please Leave your Reviews : </p>
                        <textarea className={classes.commentBox} value={this.state.comments.comment} placeholder="     Maximum 100 words" onChange={(event) => this.valueChangeHandler(event, 1)}></textarea>
                        <div className={classes.decisionBox}>   
                            <input className = {classes.commentName} type="text" placeholder="      Your Name" value={this.state.comments.name} onChange={(event) => this.valueChangeHandler(event, 2)}/>
                            <p style={{textAlign: 'center'}}>How would you rate us on a 1-5 scale? </p>
                            <div className={classes.starRating}>
                                
                                    <label className={classes.labelClass} for="5star"><input value='5' onChange={() => this.radioButtonHandler(5)} type="radio" name="star" id="5star"/>5 </label>
                                    <label className={classes.labelClass} for="4star"><input value='4' onChange={() => this.radioButtonHandler(4)} type="radio" name="star" id="4star"/>4 </label>
                                    <label className={classes.labelClass} for="3star"><input value='3' onChange={() => this.radioButtonHandler(3)} type="radio" name="star" id="3star"/>3 </label>
                                    <label className={classes.labelClass} for="2star"><input value='2' onChange={() => this.radioButtonHandler(2)} type="radio" name="star" id="2star"/>2 </label>
                                    <label className={classes.labelClass} for="1star"><input value='1' onChange={() => this.radioButtonHandler(1)} type="radio" name="star" id="1star"/>1 </label>
                                
                            </div>
                            <button className={classes.submitButton}>Submit</button>
                        </div>
                    </form>
                </div>
        if(this.state.loading){
            commentSection = <div className = {classes.loader}><p style={{color: 'black'}}>Submitting...</p></div>
        }
        return(
            <div>
                <div className={classes.mainDiv}>
                    <div className={classes.availableHeading}>
                            <h2 className="animated fadeInLeftBig"> Reviews </h2>
                    </div>
                    {commentSection}
                    <Comments />
                </div>
                <div className={classes.footerHeight}><Footer /></div>
            </div>
        )
    }
}

export default Available;