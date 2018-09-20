import React, {Component} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import DirectoryHeader from "../components/directory/DirectoryHeader";
import DirectoryPWD from "../components/directory/DirectoryPWD";
import DirectoryBody from "../components/directory/DirectoryBody";
import Actions from "../actions/directoryAction";

class DirectoryContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentDirectory : props.currentDirectory,
            directory : props.directory,
            currentNode : props.currentNode
        }
    }
    
    handleFlashMessage = (data,notifyType) =>{
        let elem = "";
        notifyType === "error" ? elem = this.flashError : elem = this.flashSuccess ; 
        elem.innerHTML = data;
        elem.style.display = "block";
        setTimeout(()=>{
            elem.style.display = "none";
        },3000);
    }

    componentWillReceiveProps(nextProps){
        console.log(nextProps)
        this.setState({
            currentDirectory : nextProps.currentDirectory,
            directory : nextProps.directory,
            currentNode : nextProps.currentNode
        })
    }

    handleupdateFolderName = (parentId,childIndex,e) =>{
        if(e.which === 13 && e.key === "Enter"){
            this.props.updateFolderName(parentId, childIndex, e.target.value);
        }
        
    }

    render(){
        return(
            <div className="col-lg-12 col-md-12 col-sm-12 dir-column-wrapper padding-none">
                <div ref={successElm => this.flashSuccess = successElm} id="flash-success">Refreshed ES successfully!</div>
                <div ref={ errorElm => this.flashError = errorElm} id="flash-error">Error!</div>
                <DirectoryPWD currentDirectory={this.state.currentDirectory} setCurrentNode={this.props.setCurrentNode} />
                <DirectoryHeader />
                <DirectoryBody folder={this.state.currentNode} handleupdateFolderName={this.handleupdateFolderName} setCurrentNode={this.props.setCurrentNode}/>
            </div>
        )
    }

}

function mapStateToProps(state) {
    return {
        currentDirectory : state.directoryData && state.directoryData.currentDirectory ? state.directoryData.currentDirectory : [],
        directory : state.directoryData && state.directoryData.directory ? state.directoryData.directory : [],
        currentNode : state.directoryData && state.directoryData.currentNode ? state.directoryData.currentNode : {}
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(Actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(DirectoryContainer);