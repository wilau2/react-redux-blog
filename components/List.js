import React, { PropTypes, Component } from 'react'
import ListItem from './ListItem'

class List extends Component {
  render(){
    const {
      id,
      collection,
      collectionName,
    } = this.props
    return (
      <div>
        {collection.length === 0 ? <p> There is nothing to display now </p> :
          <ul>
            {collection.map(item =>
              <ListItem
                key={item.id}
                displayItem={item.id}
                collectionName={collectionName}
                {...item}
              />
            )}
          </ul>
        }
      </div>
    )
  }
} 

export default List
