import React,{Component} from 'react';
import * as f2 from '../store/actions';
import {connect} from 'react-redux';
class Chat extends Component
{



	input(e)
	{
		let s=this.state
		let col=e.target.placeholder
		let val=e.target.value
		s[col]=val
		this.setState(s)
	}
	sendMessage(e)
	{
		this.props.sendMessage(this.refs.mymsg.value)
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
		let id=this.props.user.id
		let fromname=this.props.user.name
		let to=this.props.chatuser.id
		let toname=this.props.chatuser.name
		let chatuser=this.props.chatuser
		let user=this.props.user
		let a=this.props.messages
		let r=this.props.messages.filter(x=>x.from===chatuser.id&&x.to===user.id)
		let s=this.props.messages.filter(x=>x.from===user.id&&x.to===chatuser.id)
		return (
				<div className="chat">
						
						<div className="flex1 recieved">
							<div className="left">
									<div className="title"> {toname}</div>
									{r.map(x=>
											<div className="message">
												{x.message}
											</div>
									)}
							</div>
							<div className="right"></div>
						</div> 	
						<div className="flex1 sent">
							<div className="left"></div>
							<div className="right">
									<div className="title">you {fromname}</div>
									{s.map(x=>
										<div className="message">
													{x.message}
										</div>
									)}
									<div className="send">
										<input ref="mymsg" placeholder={"send message to "+toname} />
										<button onClick={this.sendMessage.bind(this)}>
											<i className="fa fa-send"></i>
										</button>

									</div>
							</div>
						</div> 	
						
				</div>
			)
	}
}

export default connect(state=>state,f2)(Chat);