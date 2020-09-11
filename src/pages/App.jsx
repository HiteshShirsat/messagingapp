import React,{Component} from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Home from './Home';
import Header from './Header';
import Footer from './Footer';
import Chat from './Chat';

class App extends Component
{
	render()
	{
		return (
				<Router>

					<Header />
					<Route exact path="/" component={Home}/>
					<Route exact path="/chat" component={Chat}/>
					<Footer />
				</Router>
			)
	}
}

export default App;