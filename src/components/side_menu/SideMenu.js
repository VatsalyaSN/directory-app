import React, {Component} from 'react';


class SideMenu extends Component {
    render(){
        return(
            <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2 side-menu-wrapper">
                <div className="profile-pic-wrapper" >
                    <div className="profile-pic">
                        <span className="initial-char">G</span>
                        <span className="user-name">Guest User</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default SideMenu;