import React from 'react';
import {Avatar,IconButton} from '@material-ui/core'
import {Search,Home,Flag,SubscriptionsOutlined,SupervisedUserCircle,
    StorefrontOutlined,ArrowDropDown,NotificationsActive,Add,Forum} from '@material-ui/icons'

export default function Header() {
    return (
        <div className="header">
            <div className="header__left">
              <img src="https://assets.stickpng.com/thumbs/58e91965eb97430e819064f5.png" alt="facecbook"/>
              <div className="header_input">
                  <Search/>
                  <input type="text" placeholder="Seach facebook"/>
              </div>
            </div>  
          
           <div className="header__middle">
               <div className="header_option">
                   <Home fontSize="large"/>
               </div>
               <div className="header_option">
                   <Flag fontSize="large"/>
               </div>
               <div className="header_option">
                   <SubscriptionsOutlined fontSize="large"/>
               </div>
               <div className="header_option">
                   <StorefrontOutlined fontSize="large"/>
               </div>
               <div className="header_option">
                   <SupervisedUserCircle fontSize="large"/>
               </div>
           </div>



         <div className="header__right">
             <div className="header__info">
               <Avatar/>
               <h4>Moin Akhter</h4>
             </div>
             <IconButton>
             <Add/>    
             </IconButton>
             <IconButton>
                 <Forum/>
             </IconButton>
             <IconButton>
             <NotificationsActive/>
             </IconButton>
             <IconButton>
             <ArrowDropDown/>
             </IconButton> 
         </div>

        </div>
    )
}
