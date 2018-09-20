import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {ICONS} from '../constants';
import {Link} from 'react-router';


class DirectoryPWD extends Component {
    render(){
        let pwdDisplay = this.props.currentDirectory;
        if(pwdDisplay && pwdDisplay.length && pwdDisplay[0].name ==="root"){
            pwdDisplay.splice(0,1);
        }
        
        return(
			<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 pwd-wrapper">
                <Link className="pwd-subwrapper" onClick={()=>this.props.setCurrentNode("root")}>
                    <img src={ICONS.HOME} className="pwd-element" style={{"marginLeft":0}}/>
                </Link>
               {
                   pwdDisplay && pwdDisplay.length ?
                   pwdDisplay.map((item,i) =>{
                       return(
                        <div key={i} className="pwd-subwrapper">
                            <img src={ICONS.NEXT_ARROW} />
                            <Link className="pwd-element" onClick={()=>this.props.setCurrentNode(item)}>
                                {item.name}
                            </Link>
                        </div>
                       )
                   }) 
                    :
                    ""
               } 
			</div>
			)
	}
}


export default DirectoryPWD;
