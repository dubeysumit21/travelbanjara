import React from 'react';
import classes from './Blogs.css';
import Background from '../../assets/images/blog-background.jpg'

const blogs = () => {
    return(
        <div>
            <div className={classes.mainDiv}>
                <div className={classes.main}>
                    <div className="animated zoomIn">
                        <img className={classes.bodyImage} src="http://www.odishabytes.com/wp-content/uploads/2017/05/sun-temple-konark.jpeg" alt="unloaded" />
                        <p className={classes.bodyText}>The Banjara Blog</p>
                        <p className={classes.by}><i><strong>-Somnath Verma</strong></i></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default blogs;