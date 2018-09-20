import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {ICONS} from '../constants';
import {Link} from 'react-router';


class DirectoryHeader extends Component {
    render(){
        return(
			<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 dir-header-wrapper">
                <div className="dir-header">
                    <span>Name</span>
                </div>
			</div>
		)
	}
}


export default DirectoryHeader;
