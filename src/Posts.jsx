import React from 'react';
import {Avatar} from '@material-ui/core';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ChatBubbleOutlineOutlinedIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';

export const Posts = () => {
    return (
        <div className="post">
            <div className="post_top">
              <Avatar/>
              <div className="post_info">
                  <h4>Moin Akhter</h4>
                  <p>12:00 pm</p>
              </div>
            </div>
            <div className="post_middle">
                <p>Looking for free  3D models? We have over 1 million high quality 3D models. Unlimited model downloads and free, secure model storage</p>
                <img src="https://scontent.fkhi8-1.fna.fbcdn.net/v/t45.1600-4/cp0/q90/spS444/p526x296/121957514_23845775984730170_1307466073135869334_n.png.jpg?_nc_cat=1&ccb=2&_nc_sid=67cdda&_nc_ohc=7pMcWW-LiZMAX9Jzyud&_nc_ht=scontent.fkhi8-1.fna&oh=130ec11b902bd0879dd0e99d94d087f8&oe=5FCA6BA4" alt=""/>
            </div>
            <div className="post_bottom">
                <div className="post_bottom__option">
                    <ThumbUpAltOutlinedIcon />
                    <h4>Like</h4>
                </div>
                <div className="post_bottom__option">
                    <ChatBubbleOutlineOutlinedIcon />
                    <h4>Comment</h4>
                </div>
                <div className="post_bottom__option">
                    <ShareOutlinedIcon />
                    <h4>Share</h4>
                </div>
            </div>
        </div>
    )
}
