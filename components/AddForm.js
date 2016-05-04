import React, { Component } from 'react'

class AddForm extends Component {
	render(){
		const { 
			action,
			actionName,
			fields,
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

      	{fields.map(feild=>
      		<div key={feild}>
      			<span>{feild}</span>
	        	<input
	        		ref={node => {
	          		inputs.push(node)
	        		}}
	        	/>
	        </div>
	      )}
        <button type="submit">
          {actionName}
        </button>
      </form>
		)
	}
}

export default AddForm