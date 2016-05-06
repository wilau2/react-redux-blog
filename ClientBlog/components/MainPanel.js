import React, { Component } from 'react'

class MainPanel extends Component {
	render() {
		const {
			page,
		} = this.props
		return(
			<div>
				{page}
			</div>
		)
	}
}

export default MainPanel