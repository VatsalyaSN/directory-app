import React, {Component} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import FloatButtonsPanel from "../components/buttons/floatButtonsPanel"; 
import * as Actions from "../actions/directoryAction";

class FloatButtonContainer extends Component {

    constructor(props) {
        super(props);
        this.state={
            selectedAgent : props.selectedAgent ? props.selectedAgent : {}
        }
    }

    render() {
        const {addFolder} = this.props;
        return (
            <FloatButtonsPanel addFolder={addFolder} currentNode={this.props.currentNode}/>
        )
    }

}

function mapStateToProps(state, ownProps) {
    return {
        currentNode : state.directoryData && state.directoryData.currentNode ? state.directoryData.currentNode : {}
    };
}

function mapDispatchToProps(dispatch) {
    var allActions = Actions;
    return bindActionCreators(allActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(FloatButtonContainer);
