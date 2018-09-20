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

dirAction.updateFolderName = function(parentNode, childIndex, name){
    return function(dispatch){
        dispatch({
            type : DIR.UPDATE_NAME,
            childIndex,
            name,
            parentNode
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

dirAction.removeUnnamedFolder = function(parentNode, childIndex){
    return function(dispatch){
        dispatch({
            type : DIR.REMOVE_UNNAMED,
            parentNode,
            childIndex
        })
    }
}

module.exports = dirAction;