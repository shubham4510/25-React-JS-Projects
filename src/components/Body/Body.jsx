import React from 'react'
import Accordian from '../Accordian/Accordian.jsx'
import RandomColor from '../Random color/RandomColor.jsx'
import StarRating from '../Star rating/StarRating.jsx'
import ImageSlider from '../Image slider/ImageSlider.jsx'

const Body = () => {
  return (
    <div className='wrapper'>
      
        {/* ACCORDIAN PROJECT */}
        <Accordian/>

        {/* RANDOM COLOR GENERATOR PROJECT */}
        <RandomColor/>

        {/* STAR RATING */}
        <StarRating noOfStars={10}/>

        {/* IMAGE SLIDER  */}
        <ImageSlider url={'https://picsum.photos/v2/list'} limit={10} page={1}/>
    </div>
  )
}

export default Body