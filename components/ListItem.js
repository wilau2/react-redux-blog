import React, { PropTypes, Component } from 'react'
import { Link } from 'react-router'

class ListItem extends Component {
  render() { 
    const {
      id,
      displayItem,
      collectionName,
    } = this.props
    return(
      <li>
        <Link to={{pathname:`/${collectionName}/${id}`}}> {displayItem} </Link>
      </li>
    )
  }
}

export default ListItem
