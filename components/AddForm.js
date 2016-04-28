import React, { Component } from 'react'

class AddForm extends Component {
	render(){
		const { 
			action,
			actionName,
			feilds,
			onAdd
		} = this.props

		let inputs = []
		return(
			<form onSubmit={e => {
        e.preventDefault()
        {inputs.map(input=> {
					if (!input.value.trim()) {
	          return
	        }
	      })}
        
        {onAdd(inputs)}

        {inputs.map(input=>
        	input.value = ''
        )}
      }}>
      	{feilds.map(feild=>
      		<div>
      			<p>{feild}</p>
	        	<input ref={node => {
	          	inputs.push(node)
	        	}} 
	        	/>
	        </div>

	        )
	      }
        <button type="submit">
          {actionName}
        </button>
      </form>
		)
	}
}

export default AddForm