import React,{Component} from 'react';
import * as f2 from '../store/actions';
import {connect} from 'react-redux';
class Footer extends Component
{
	render()
	{
		let {modal}=this.props
		return (
				<div className={modal?"footer active":"footer"}>
					created by hitesh shirsat
				</div>
			)
	}
}

export default connect(state=>state,f2)(Footer);