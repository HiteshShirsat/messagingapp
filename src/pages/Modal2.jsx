import React,{Component} from 'react';
import * as f2 from '../store/actions';
import {connect} from 'react-redux';
class Modal2 extends Component
{

	state={name:"", email:"", phone:""}

	input(e)
	{
		let s=this.state
		let col=e.target.placeholder
		let val=e.target.value
		s[col]=val
		this.setState(s)
	}
	hidemodal()
	{
		this.props.hidemodal()
	}
	insert(a,e)
	{
		e.preventDefault()
		let {phone}=this.state
		if(a.filter(x=>x.phone===phone).length===0)
		{
			this.props.newContact(this.state)
			alert("contact saved")
		}
		else
		{
			alert("cannot add cotact exists")
		}
	}
	render()
	{
		let {users}=this.props
		let popup=this.props.popup
		let ob=this.state
		return (
				<div 
				className={popup==="good"?"popup active":"popup"}
				>
					<button 
					onClick={this.hidemodal.bind(this)}
					className="close"><i className="fa fa-times"></i></button>

					<form onSubmit={this.insert.bind(this,users)} name="frm1">
					<h1>New Contact {popup}</h1>	
					<p>name </p>
					<input onChange={this.input.bind(this)}  
					className="editable1"  
					value={ob.name} placeholder="name" /><i className="fa fa-pencil"></i>
					<p>email</p>
					<input onChange={this.input.bind(this)}  className="editable1"  value={ob.email} placeholder="email" /><i className="fa fa-pencil"></i>
					<p>phone</p>
					<input onChange={this.input.bind(this)}  className="editable1"  value={ob.phone} placeholder="phone" /><i className="fa fa-pencil"></i>
					<p>
						<button  className="btn">Add new contact</button>
					</p>
					</form>
				</div>
			)
	}
}

export default connect(state=>state,f2)(Modal2);