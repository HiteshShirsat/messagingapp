import React,{Component} from 'react';
import * as f2 from '../store/actions';
import {connect} from 'react-redux';
class Modal extends Component
{


	input(col,e)
	{
		this.props.inputedit(col,e.target.value)
	}
	hidemodal()
	{
		this.props.hidemodal()
	}
	update(e)
	{
		e.preventDefault()
		this.props.updateedit()
	}
	render()
	{
		let {modal}=this.props
		let ob=this.props.editUser
		
		return (
				<div className={modal?"modal active":"modal"}>
					<button 
					onClick={this.hidemodal.bind(this)}
					className="close"><i className="fa fa-times"></i></button>
					{ob.id>0&&
					<form onSubmit={this.update.bind(this)} name="frm1">
					<h1>you are editing id {ob.id}</h1>	
					<p>name </p>
					<input onChange={this.input.bind(this,"name")}  className="editable1"  value={ob.name} placeholder="name" /><i className="fa fa-pencil"></i>
					<p>email</p>
					<input onChange={this.input.bind(this,"email")}  className="editable1"  value={ob.email} placeholder="email" /><i className="fa fa-pencil"></i>
					<p>phone</p>
					<input onChange={this.input.bind(this,"phone")}  className="editable1"  value={ob.phone} placeholder="phone" /><i className="fa fa-pencil"></i>
					<p>
						<button  className="btn">Update </button>
					</p>
					</form>
					}
				</div>
			)
	}
}

export default connect(state=>state,f2)(Modal);