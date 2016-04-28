import React, { PropTypes, Component } from 'react'
import { Link } from 'react-router'

class ListItem extends Component {
  render() { 
    const {
      id,
      displayItem,
      collectionName,
    } = this.props
    const styles = {

    }
    return(
      <li style={styles}>
        <Link to={{pathname:`/${collectionName}/${id}`}}> {displayItem} </Link>
      </li>
    )
  }
}

export default ListItem
