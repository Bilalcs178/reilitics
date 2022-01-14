import React from 'react';
import classes from './HeadImage.module.css'

const HeadImage = (props) => {
    return (
        <div className="position-relative">
            <div className={classes.head}>{props.children}</div>
            <div className={`Gothic_3D container ${classes.text}`}>{props.header}</div>
        </div>
    )
}
export default HeadImage