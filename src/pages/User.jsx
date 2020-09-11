import React,{Component} from 'react';
import * as f2 from '../store/actions';
import {connect} from 'react-redux';
class User extends Component
{
	_selectUser(x)
	{
		this.props.selectUser(x)
	}

	render()
	{
		let {user,x}=this.props
		return (
				<div 
				className={user===x?"option active":'option'} 
				onClick={this._selectUser.bind(this,x)} 
				key={x.id} 
				>{x.name}
				</div>
			)
	}
}

export default connect(state=>state,f2)(User);