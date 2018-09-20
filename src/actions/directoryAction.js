import axios from "axios";
import {DIR} from "./constants"; 
// import {setToStorage, getFromStorage , removeFromStorage} from "./userSessionInfo";
import {browserHistory} from "react-router";

let dirAction = {};

dirAction.addFolder = function(parentId){
    return function(dispatch){
        dispatch({
            type : DIR.ADD_FOLDER,
            parentId
        })
    }
}

dirAction.updateFolderName = function(parentId, childIndex, name){
    console.log(parentId,childIndex);
    return function(dispatch){
        dispatch({
            type : DIR.UPDATE_NAME,
            parentId,
            childIndex,
            name
        })
    }
}

dirAction.setCurrentNode = function(node){
    return function(dispatch){
        dispatch({
            type: DIR.SET_CURRENT_NODE,
            node
        })
    }
}

dirAction.removeUnnamedFolder = function(parentId, childIndex){
    return function(dispatch){
        dispatch({
            type : DIR.REMOVE_UNNAMED,
            parentId,
            childIndex
        })
    }
}

module.exports = dirAction;