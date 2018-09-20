import React, {Component} from "react";
import {Link} from "react-router";
import {ICONS, NAMES, ROUTES} from "../constants";

class FloatButtonsPanel extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const {section } = this.props;

        return (
            <div className="col-lg-1 col-md-1 col-sm-1 col-xs-1 float-buttons-panel">
                <div className="float-buttons">
                    <div className="float-button" onClick={()=>this.props.addFolder(this.props.currentNode.id)}>
                        <Link to={ROUTES.NEW_EMAIL}>
                            <img className="image" src={ICONS.NEW_FOLDER}/>
                        </Link>
                        <span className="button-title">
                            New Folder
                        </span>
                    </div>
                </div>                
            </div>               
        )
    }
}

export default FloatButtonsPanel;
