import React, { useState } from 'react'
import MenuList from './MenuList'

const MenuItem = ({item}) => {
    const [displayCurrentChildren, setDisplayCurrentChildren] = useState({})

    const handleToggleChildren = (getCurrentLabel) =>{
        setDisplayCurrentChildren({
        ...displayCurrentChildren,
            [getCurrentLabel]:!displayCurrentChildren[getCurrentLabel]}
        )
    }

    console.log(displayCurrentChildren);

  return (
    <li>
        <div style={{display:"flex",justifyContent:"space-between",paddingRight:"10px",cursor:"pointer",alignItems:"center"}} onClick={()=>handleToggleChildren(item.label)}>
        <p>{item.label}</p>
        {
            item && item.children && item.children.length ? <span>{displayCurrentChildren[item.label]?'-':'+'}</span> : null
        }
        </div>

        {
            item && item.children && item.children.length >0 && displayCurrentChildren[item.label]? 
            <MenuList list={item.children}/>
            :null        }
    </li>
  )
}

export default MenuItem