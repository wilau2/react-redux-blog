import React, { Component } from 'react'

class SectionTitle extends Component {
	render(){
		const{
			title,
		} = this.props
		const styles = {
			'textAlign':'center'
		}
		return(
			<h2 style={styles}>{title}</h2>
		)
	}
}

export default SectionTitle