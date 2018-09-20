import React from 'react';
import ReactDOM from 'react-dom';
import {ICONS} from '../constants';
import {Link} from 'react-router';


class TopHeader extends React.Component {
    render(){
        return(
			<div className="col-md-12 col-lg-12 top-bar">
                <Link to="/" className="logo-wrapper">
                    <img src={ICONS.LOGO} />
                </Link>
			</div>
			)


	}
}


export default TopHeader;
