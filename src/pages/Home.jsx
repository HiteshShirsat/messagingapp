import React,{Component} from 'react';
import Listgroupitem from './Listgroupitem';
import * as f2 from '../store/actions';
import {connect} from 'react-redux';
import Modal from './Modal';
import Modal2 from './Modal2';

class Home extends Component
{
	render()
	{
		let {modal,users,user}=this.props
		let a=user?(users.filter(x=>x!==user)):users
		return (
				<div>
				<Modal/>
				<Modal2/>
				<div className={modal?"container active":"container"}>
					<div className="list-group">
						{a.map(x=>
							<Listgroupitem key={x.id} x={x} />
						)}
					</div>
				</div>
				</div>
			)
	}
}

export default connect(state=>state,f2)(Home);