import React from 'react'
import MenuList from './MenuList'

const TreeView = ({menus = []}) => {
  return (
    <div className='tree-view-container'>
      {/* {
        menus.map(list =>)
      } */}

<MenuList list={menus}/>
      
    </div>
  )
}

export default TreeView