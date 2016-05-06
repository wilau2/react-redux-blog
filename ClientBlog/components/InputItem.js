import React, { Component } from 'react'

class InputItem extends Component {
	render() {
		const {
			inputs,
			defaultValue,
		} = this.props
		return (
			<input
    		defaultValue={defaultValue}
    		ref={node => {
      		inputs.push(node)
    		}}
    	/>
		)
	}
}

export default InputItem