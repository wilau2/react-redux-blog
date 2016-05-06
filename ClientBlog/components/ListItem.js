import React, { Component } from 'react'
import { Link } from 'react-router'

class ListItem extends Component {
  render() { 
    const {
      id,
      name,
      collectionName,
    } = this.props

    return(
      <li>
        <Link to={{pathname:`/${collectionName}/${id}`}}> {name} </Link>
      </li>
    )
  }
}

export default ListItem
