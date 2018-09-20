import {DIR} from '../actions/constants';
import {browserHistory} from "react-router";

export default function (state = {}, action) {
    switch (action.type) {
        case DIR.ADD_FOLDER :
            let dirData = state.directory ? {...state.directory} : undefined;
            let currentNode = {};
            let path = state.currentDirectory ? state.currentDirectory : []
            
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
            
            else if(dirData && action.parentId){
                currentNode = getCurrentNode(dirData,action.parentId, path);                
                currentNode.children.push({
                    "isNew" : true
                })     
            }
            
            return {...state, directory : dirData, currentNode : currentNode, currentDirectory : path};
            break;

        case DIR.UPDATE_NAME:
            let directoryData = state.directory ? {...state.directory} : undefined;
            path = state.currentDirectory ? state.currentDirectory : []
            let updatedNode = getCurrentNode(directoryData, action.parentId,path);
            if(updatedNode){
                updatedNode.children[action.childIndex].name = action.name;
                updatedNode.children[action.childIndex].id = new Date().getUTCMilliseconds();
                updatedNode.children[action.childIndex].parentId = action.parentId;
                updatedNode.children[action.childIndex].children = [];
                delete updatedNode.children[action.childIndex].isNew;
            }
            
            return {...state, directory : directoryData, currentNode : updatedNode, currentDirectory  : path}
            break;

        case DIR.SET_CURRENT_NODE:
            let newPath = state.currentDirectory ? state.currentDirectory : [];
            let node = action.node;

            if(action.node === "root"){
                node = state.directory;
                newPath = []
            }
            else if(!newPath.includes(node))
                newPath.push(node);
            else{
                let index = newPath.indexOf(node);
                newPath = newPath.slice(0,index+1);
            }

            return {...state, currentNode : node, currentDirectory : newPath};
            break;

        case DIR.REMOVE_UNNAMED:
            directoryData = state.directory ? {...state.directory} : undefined;
            currentNode = getCurrentNode(directoryData, action.parentId, state.currentDirectory);
            currentNode.children.splice(action.childIndex,1);
            return {...state, directory:directoryData  , currentNode : currentNode};
            break;

        default:
            return state;
    }
};


function getCurrentNode(data, givenId, path){
    if(!data || !data.id){
        return false;
    }
    
    let currentNode = data;
    if(currentNode && currentNode.name && currentNode.name !== "root")
        path.push(currentNode);

    if(data.id === givenId){
        return data;
    }

    let resultVal = 0;

    if(data.children && data.children.length){
        for(let x=0;x<data.children.length;x++){
            resultVal = getCurrentNode(data.children[x], givenId, path);
            path.pop();    
            if(resultVal){
                return resultVal;
            }
        }
            
    }
    
    if(!resultVal)
    {
        return false;
    }  
    else{
        return resultVal
    }  
}