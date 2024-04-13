import React from 'react'
import Accordian from '../Accordian/Accordian.jsx'
import RandomColor from '../random-color/RandomColor.jsx'

const Body = () => {
  return (
    <div className='wrapper'>
      
        {/* ACCORDIAN PROJECT */}
        <Accordian/>

        {/* RANDOM COLOR GENERATOR PROJECT */}
        <RandomColor/>
    </div>
  )
}

export default Body