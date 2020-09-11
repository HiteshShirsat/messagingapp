import React,{Component} from 'react';
import * as f2 from '../store/actions';
import {connect} from 'react-redux';
class Blank extends Component
{
	render()
	{
		return (
				<div>
					Blank
				</div>
			)
	}
}

export default connect(state=>state,f2)(Blank);