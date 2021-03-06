import React, { Component } from 'react'

class PageTitle extends Component {
	render(){
		const{
			title,
		} = this.props
		const styles = {
			'text-align':'center'
		}
		return(
			<h1 style={styles}>{title}</h1>
		)
	}
}

export default PageTitle