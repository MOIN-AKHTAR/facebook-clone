import React from 'react';
import {Avatar} from '@material-ui/core'

export default function Story({title,imgUrl,src}) {
    return (
        <div style={{backgroundImage:`url(${imgUrl})`}} className="story">
            <Avatar src={src} className="story_avatar"/>
            <h4>{title}</h4>
        </div>
    )
}
