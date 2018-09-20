import {DIR} from '../actions/constants';
import {browserHistory} from "react-router";

export default function (state = {}, action) {
    switch (action.type) {
        case DIR.ADD_FOLDER :
            let dirData = state.directory ? {...state.directory} : undefined;
            let currentNode = {};
            
            if(!dirData){
                let id= new Date().getUTCMilliseconds();
                dirData = {
                    name : "root",
                    id: id,
                    children : [
                        {
                            "isNew":true,
                        }
                    ]
                }
                currentNode = dirData;
            }
            
            else if(dirData && action.parentNode){
                currentNode = action.parentNode;
                currentNode.children.push({
                    "isNew" : true
                })     
            }
            return {...state, directory : dirData, currentNode : currentNode};
            break;

        case DIR.UPDATE_NAME:
            let directoryData = state.directory ? {...state.directory} : undefined;
            let updatedNode = action.parentNode;
            if(updatedNode){
                updatedNode.children[action.childIndex].name = action.name;
                updatedNode.children[action.childIndex].id = new Date().getUTCMilliseconds();
                updatedNode.children[action.childIndex].parentId = updatedNode.id;
                updatedNode.children[action.childIndex].children = [];
                delete updatedNode.children[action.childIndex].isNew;
            }
            
            return {...state, directory : directoryData, currentNode : updatedNode}
            break;

        case DIR.SET_CURRENT_NODE:
            let newPath = state.currentDirectory ? state.currentDirectory : [];
            let node = action.node;

            if(action.node === "root"){
                node = state.directory;
                newPath = []
            }
            else if(!newPath.includes(node)){
                newPath.push(node);
            }
            else{
                let index = newPath.indexOf(node);
                newPath = newPath.slice(0,index+1);
            }

            return {...state, currentNode : node, currentDirectory : newPath};
            break;

        case DIR.REMOVE_UNNAMED:
            directoryData = state.directory ? {...state.directory} : undefined;
            currentNode = action.parentNode;
            currentNode.children.splice(action.childIndex,1);
            return {...state, directory:directoryData  , currentNode : currentNode};
            break;

        default:
            return state;
    }
};
