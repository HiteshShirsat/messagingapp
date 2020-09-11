import React,{Component} from 'react';
import * as f2 from '../store/actions';
import {connect} from 'react-redux';
import User from './User';
class Header extends Component
{
	_dropdown()
	{
		this.props.dropdownToggle()
	}
	_search(e)
	{
		this.props.search(e.target.value)
	}
	newContact()
	{
		this.props.openpopup()
	}	
	render()
	{
		let {modal,users,user,showdropdown}=this.props
		let a=user?(users.filter(x=>x!==user)):users
		return (
				<div className={modal?"header active":"header"}>
					<div><i onClick={this.newContact.bind(this)} className="fa fa-2x fa-address-book"></i></div>
					<div>
						<div className="search">
							<i className="fa  fa-search"></i>	
							<input onChange={this._search.bind(this)} placeholder="search by phone name..." />
						</div>	
					</div>
					<div>
						{users.length?<div className="dropdown">
							<p onClick={this._dropdown.bind(this)} className="select">{user.name?"welcome "+user.name:"select a user"}</p>
							{showdropdown&&<div className="dropdown-list">
								{a.map(x=>
									<User key={x.id} x={x} />
								)}
							</div>}
						</div>	:<p className="select">no contacts</p>}
					</div>
				</div>
			)
	}
}

export default connect(state=>state,f2)(Header);