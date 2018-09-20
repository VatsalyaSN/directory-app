import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {ICONS} from '../constants';
import {Link} from 'react-router';


class DirectoryBody extends Component {
    render(){
		const {folder} = this.props;
        return(
			<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 dir-display-wrapper">
                {
					folder && folder.children && folder.children.length ? 
						folder.children.map((item,i) =>{
							return(
								<div key={i}>
									{
										item.isNew ? 
										<div className="new-folder" >
											<img src={ICONS.EMPTY_FOLDER} className="folder-icon" />
											<input type="text" className="folder-name" ref={folderNameElm => this.folderNameElm = folderNameElm} onKeyPress={this.props.handleUpdateFolderName.bind(this,folder,i)} autoFocus="true" onBlur={()=>this.props.handleRemoveUnnamedFolder(this.folderNameElm,folder,i)}/>
										</div>
										:
										<div className="folder" onClick={() =>this.props.setCurrentNode(item)}>
											{
												item.children && item.children.length > 0? 
												<img src={ICONS.FOLDER} className="folder-icon" />
												:
												<img src={ICONS.EMPTY_FOLDER} className="folder-icon" />
											}
											
											<span className="folder-name">{item.name}</span>
										</div>
									}
								</div>
							)
						})
						:
						<div className="no-folder">
							<span>
							This folder is empty
							</span>
						</div>
				}
			</div>
		)
	}
}


export default DirectoryBody;
