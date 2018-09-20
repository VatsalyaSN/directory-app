import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {ICONS} from '../constants';
import {Link} from 'react-router';


class DirectoryBody extends Component {
    render(){
		const {folder} = this.props;
        return(
			<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 ">
                {
					folder && folder.children ? 
						folder.children.map((item,i) =>{
							return(
								<div key={i}>
									{
										item.isNew ? 
										<div className="new-folder" >
											<img src={ICONS.FOLDER} />
											<input type="text" className="folder-name" onKeyPress={this.props.handleupdateFolderName.bind(this,folder.id,i)}/>
										</div>
										:
										<div className="folder" onClick={() =>this.props.setCurrentNode(item)}>
											<img src={ICONS.FOLDER} />
											<span className="folder-name">{item.name}</span>
										</div>
									}
								</div>
							)
						})
						:
						<div>No folders</div>
				}
			</div>
		)
	}
}


export default DirectoryBody;
