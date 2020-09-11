import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import * as f2 from '../store/actions';
import {connect} from 'react-redux';
class Listgroupitem extends Component
{
	_edit()
	{
		this.props.edit(this.props.x)
	}
	del(id)
	{
		this.props.del(id)
	}
	nav(x)
	{
		this.props.setChatUser(x)

	}
	render()
	{
		let {x,f1,user}=this.props
		let li= (<div className="list-group-item">
					<div className="left">
						<div>{x.phone}</div>
						<div>{x.name}</div>
						<div>{x.email}</div>
					</div>	
					<div className="actions">
						<button onClick={this._edit.bind(this,x)}><i className="fa fa-pencil"></i></button>
						{user.id&&<Link to="/chat"  onClick={this.nav.bind(this,x)}><i className="fa fa-envelope"></i></Link>}
						<button onClick={this.del.bind(this,x.id)}><i className="fa fa-trash"></i></button>
					</div>	
				</div>
			)

		if(f1)
		{
			if(x.name.includes(f1) || x.phone.toString().includes(f1) || x.email.includes(f1)  )
			{
				return li
			}
			else
			{
				return null
			}
		}	
		else
		{
			return li
		}
	}
}

export default connect(state=>state,f2)(Listgroupitem);