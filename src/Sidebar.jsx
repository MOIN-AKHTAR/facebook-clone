import React from 'react';
import {SideBarRow} from './SideBarRow';
import {ArrowDropDown} from '@material-ui/icons'

export const Sidebar = () => {
    return (
        <div className="side__bar">
            <SideBarRow src="https://scontent.fkhi8-1.fna.fbcdn.net/v/t1.0-1/cp0/p40x40/38867183_711999012468731_177405385097871360_n.jpg?_nc_cat=109&ccb=2&_nc_sid=dbb9e7&_nc_ohc=DL6vVeV-Lt0AX_HKKkn&_nc_ht=scontent.fkhi8-1.fna&tp=27&oh=868d2aac859e727d9d527db8bd73e372&oe=5FC8170F"
            title="Moin Akhter"/>
            <SideBarRow src="https://static.xx.fbcdn.net/rsrc.php/v3/yg/r/kOxV5aCYUAE.png"
            title="Covid 19 Information Center"/>
            <SideBarRow src="https://static.xx.fbcdn.net/rsrc.php/v3/y8/r/S0U5ECzYUSu.png"
            title="Friends"/>
            <SideBarRow src="https://static.xx.fbcdn.net/rsrc.php/v3/yD/r/lVijPkTeN-r.png"
            title="Saved"/>
            <SideBarRow src="https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/PrjLkDYpYbH.png"
            title="Groups"/>
            <SideBarRow Icon={ArrowDropDown}
            title="See More"/>
            <hr style={{margin:"10px 0px"}}/>
            <h4>Your Shorcuts</h4>
            <SideBarRow src="https://scontent.fkhi8-1.fna.fbcdn.net/v/t1.0-0/cp0/c19.0.50.50a/p50x50/45046245_2300874876592525_3448956328934899712_o.jpg?_nc_cat=109&ccb=2&_nc_sid=ca434c&_nc_ohc=ADhPa3ip8RsAX8tGlDA&_nc_ht=scontent.fkhi8-1.fna&tp=27&oh=9aa63be60f018dc6890919bc6b87ee6e&oe=5FC8CB0B"
            title="Firebase"/>
            <SideBarRow src="https://scontent.fkhi8-1.fna.fbcdn.net/v/t1.0-0/cp0/c19.0.50.50a/p50x50/101213046_676429299859398_3753670634949836800_o.jpg?_nc_cat=100&ccb=2&_nc_sid=ca434c&_nc_ohc=JME05Up_5xoAX_R3q8n&_nc_ht=scontent.fkhi8-1.fna&tp=27&oh=71fb49bb5b88fce43a6c55f4422c2d77&oe=5FC717FD"
            title="IT Expert's"/>
            <SideBarRow src="https://scontent.fkhi8-1.fna.fbcdn.net/v/t1.0-0/cp0/c16.0.50.50a/p50x50/20799342_689653957894555_7028398471295631704_n.jpg?_nc_cat=109&ccb=2&_nc_sid=ca434c&_nc_ohc=XtHNJ_IeVqgAX9UZbOQ&_nc_ht=scontent.fkhi8-1.fna&tp=27&oh=e87d9adebd9b282a09de2cd7cbcc672b&oe=5FC94A29"
            title="Ubitians 2017"/>
            <SideBarRow src="https://scontent.fkhi8-1.fna.fbcdn.net/v/t1.0-0/cp0/c23.0.50.50a/p50x50/51808557_2181716935425924_2832511527049756672_n.jpg?_nc_cat=107&ccb=2&_nc_sid=ca434c&_nc_ohc=2y6fUHZx1t0AX9ad_B2&_nc_ht=scontent.fkhi8-1.fna&tp=27&oh=25889896c7ae05a890da5404407dedc9&oe=5FC6B672"
            title="UIT Web And Mobile Application Development"/>
            <SideBarRow src="https://scontent.fkhi8-1.fna.fbcdn.net/v/t1.0-0/cp0/c20.0.50.50a/p50x50/31265657_1906840546002554_6522678338929033216_o.jpg?_nc_cat=108&ccb=2&_nc_sid=ca434c&_nc_ohc=6AqFoyqnIzsAX-DA4Je&_nc_ht=scontent.fkhi8-1.fna&tp=27&oh=ce8a2bca6c653018961d3fee0977b3e1&oe=5FC80EDD"
            title="UBIT Family 🎓"/>
        </div>
    )
}
