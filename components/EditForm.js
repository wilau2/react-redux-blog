import React, { Component } from 'react'

class EditForm extends Component {
	render(){
		const { 
			action,
			actionName,
			fields,
			values,
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
	        		defaultValue={values[feild]}
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

export default EditForm