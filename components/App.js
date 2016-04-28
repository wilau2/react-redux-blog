import React, { Component } from 'react'
import { Link } from 'react-router'

class App extends Component {
	render() { 
		const { children } = this.props
		return(
			<div>
				<ul>
					<li>
						<Link to={"/"}> My Amazing blog </Link>
				  </li>
				  <li>
				  	<Link to={"/articles"}> Articles </Link>
				  </li>
				  <li>
				  	<Link to={"/unapprovedComments"}> Unapproved comments </Link>
				  </li>
				</ul>
			  { children }
			</div>
		)
	}
}

export default App
