import React, { Component } from 'react'
import InputItem from './InputItem'
import { Link } from 'react-router'

class EditableForm extends Component {
	render(){
		const { 
			actionName,
			onAction,
			fields,
			formContent,
			defaultValues,
			redirect,
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

        {onAction(inputs)}

        {inputs.map(input=>
        	input.value = ''
        )}
      }}>
	      {fields.map(feild=>
		  		<div key={feild}>
		  			<span>{feild}</span>
		  			{defaultValues ? 
			      	<InputItem 
			      		inputs={inputs}
			      		defaultValue={defaultValues[feild]}
			      	/>:
			      	<InputItem 
			      		inputs={inputs}
			      		defaultValue={""}
			      	/>
			      }
		      </div>
	      )}
      	
        <button type="submit">
          {actionName}
        </button>
      </form>
		)
	}
}

export default EditableForm