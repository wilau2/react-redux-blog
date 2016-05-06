import React, { Component } from 'react'
import { Link } from 'react-router'

class SideMenu extends Component {
	render(){
		let {
			routes
		} = this.props
		return(
			<ul>
				{routes.map(route=>
					<li key={route.path}>
						<Link to={route.path}> {route.name} </Link>
				  </li>
				)}
			</ul>
		)
	}
}

export default SideMenu