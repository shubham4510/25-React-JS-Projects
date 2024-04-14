import React, { useState } from 'react'
import {FaStar} from 'react-icons/fa'

const StarRating = ({noOfStars=5}) => {

    const [rating, setRating] = useState(0)
    const [hover, setHover] = useState()

    const handleClick = (getCurrentIndex) =>{
        setRating(getCurrentIndex)
    }
    const handleMouseEnter = (getCurrentIndex) =>{
        setHover(getCurrentIndex)
    }
    const handleMouseLeave = () =>{
        setHover(rating)
    }


  return (
    <div className='star-rating'>
        {
            [...Array(noOfStars)].map((_,index)=>{
                index+=1
 
                return <FaStar className={index<=(hover || rating)? `active`:`inactive`} onClick={()=>handleClick(index)} onMouseEnter={()=>{handleMouseEnter(index)}} onMouseLeave={()=>handleMouseLeave(index)} key={index} />
            })
        }
    </div>
  )
}

export default StarRating