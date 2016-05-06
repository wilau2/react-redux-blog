import React, { Component } from 'react'
import SideMenu from './SideMenu'
import MainPanel from './MainPanel'

class App extends Component {
	render() { 
		const {
			children 
		} = this.props
		const routes = [{
			path:"/",
			name:"My Amazing Blog"
		},{
			path:"/articles",
			name:"Articles"
		}]
		return(
			<div>
				<SideMenu routes={routes}/>
				<MainPanel page={children} />
			</div>
		)
	}
}

export default App
