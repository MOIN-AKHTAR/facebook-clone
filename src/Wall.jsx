import { Avatar } from '@material-ui/core'
import React from 'react';
import {VideoCall,PhotoLibrary,EmojiEmotionsOutlined} from '@material-ui/icons'

export const Wall = () => {
    return (
        <div className="wall">
            <div className="wall_top">
                <Avatar/>
                <form action="">
                    <input  placeholder="What's in your mind?"/>
                    <input placeholder="image url (Optional)"/>
                    <button type="submit">Add</button>
                </form>
            </div>
            <div className="wall_bottom">
                <div className="wall_bottom__option">
                  <VideoCall style={{color:"red"}}/>
                   <h4>Live Video</h4>
                </div>
                <div className="wall_bottom__option">
                  <PhotoLibrary style={{color:"green"}}/>
                   <h4>Photo/Video</h4>
                </div>
                <div className="wall_bottom__option">
                  <EmojiEmotionsOutlined style={{color:"yellow"}}/>
                   <h4>Feeling/Activity</h4>
                </div>
            </div>
        </div>
    )
}
