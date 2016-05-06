import React, { PropTypes, Component } from 'react'
import ListItem from './ListItem'

class List extends Component {
  render(){
    const {
      collection,
      collectionName,
    } = this.props

    let collections = []
    for (const id in collection){
      collections.push(collection[id])
    }

    return (
      <div>
        {collections.length === 0 ? <p> The list is empty </p> :
          <ul>
            {collections.map(item =>
              <ListItem
                key={item.id}
                displayItem={item.name}
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
