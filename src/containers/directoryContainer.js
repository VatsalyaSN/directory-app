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
        this.setState({
            currentDirectory : nextProps.currentDirectory,
            directory : nextProps.directory,
            currentNode : nextProps.currentNode
        })
    }

    //checks if a file with duplicate name exists
    checkForDuplicate = (node, value) =>{
        if(node && node.children && node.children.length > 1){
            let isDuplicatePresent = true;
            for(let j=0;j<node.children.length;j++){
                if(node.children[j].name === value){
                    isDuplicatePresent = false;
                    break
                }
            }
            return isDuplicatePresent
        }
        else{
            return true;
        }
        
    }

    handleUpdateFolderName = (parentNode,childIndex,e) =>{
        if((e.which === 13 && e.key === "Enter") || (e && !e.key)){
            let value = (e.which === 13 && e.key === "Enter") ? e.target.value : e.value;
            if(value && value.length){
                if(this.checkForDuplicate(parentNode,value)){
                    this.props.updateFolderName(parentNode, childIndex, value);
                }
                else{
                    value = `${value}_(${new Date().getUTCMilliseconds()})`;
                    this.props.updateFolderName(parentNode, childIndex, value);
                }
            }
            else{
                this.handleFlashMessage("Please provide a name for the new folder","error");
                !(e.which === 13 && e.key === "Enter") ? 
                    this.props.removeUnnamedFolder(parentNode,childIndex)
                    :
                    ""
            }
        }        
    }

    render(){
        return(
            <div className="col-lg-12 col-md-12 col-sm-12 dir-column-wrapper padding-none">
                <div ref={successElm => this.flashSuccess = successElm} id="flash-success"></div>
                <div ref={ errorElm => this.flashError = errorElm} id="flash-error"></div>
                <DirectoryPWD currentDirectory={this.state.currentDirectory} setCurrentNode={this.props.setCurrentNode} />
                <DirectoryHeader />
                <DirectoryBody folder={this.state.currentNode} handleUpdateFolderName={this.handleUpdateFolderName} setCurrentNode={this.props.setCurrentNode} />
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