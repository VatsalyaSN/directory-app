/**
 * Created by Vijay N. on 14/01/17.
 */

import * as React from "react";

class Button extends React.Component {

    constructor(props) {
        super(props);
    }

    handleOnClick(){
        this.props.location ? 
        this.props.location.state = {type : "old"} : " ";
        this.props.onClick();
    }

    render() {
        return (
            <button className={"button"+this.props.addClass} onClick={this.handleOnClick.bind(this)}>
                <img className="pull-left" src={this.props.icon}/>
                 <p>{this.props.text}</p>
            </button>
        )
    }
}

export default Button;
