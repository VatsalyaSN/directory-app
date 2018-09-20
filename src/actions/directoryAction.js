import {DIR} from "./constants"; 

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