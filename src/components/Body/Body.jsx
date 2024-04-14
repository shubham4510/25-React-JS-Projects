import React from 'react'
import Accordian from '../Accordian/Accordian.jsx'
import RandomColor from '../random-color/RandomColor.jsx'
import StarRating from '../Star rating/StarRating.jsx'

const Body = () => {
  return (
    <div className='wrapper'>
      
        {/* ACCORDIAN PROJECT */}
        <Accordian/>

        {/* RANDOM COLOR GENERATOR PROJECT */}
        <RandomColor/>

        {/* STAR RATING */}
        <StarRating noOfStars={10}/>
    </div>
  )
}

export default Body