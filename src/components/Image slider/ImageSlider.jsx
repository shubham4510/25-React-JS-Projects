import {useEffect, useState} from 'react'
import { BsArrowLeftCircleFill } from 'react-icons/bs'
import { BsArrowRightCircleFill } from 'react-icons/bs'

const ImageSlider = ({url,limit = 5,page=1}) => {
  const [images,setImages] = useState([])
  const [currentSlide, setCurrentSlide] = useState(0)
  const [errorMsg, setErrorMsg] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(()=>{
    if(url!== ''){
      fetchImages(url)
    }
  },[url])

  const fetchImages = async (getUrl) =>{
    try{

      const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`)
      const data = await response.json()

      if(data){
      setImages(data)
      setLoading(false)
      console.log(data);
    }
    }catch(e){
      setErrorMsg(e)
      setLoading(false)
    }
  }

  if(loading){
    return <div>Loading data ! Please wait</div>
  }

  if(errorMsg !== null){
    return <div>Error occured !!!</div>
  }

  return (
    <div className='img-slider'>
      <BsArrowLeftCircleFill className='arrow arrow-right'/>
      {
        images && images.length ?images.map(imageItem => (
          <img key={imageItem.id} src={imageItem.download_url} alt={imageItem.download_url} className='current' />
        )):null
      }
      <BsArrowRightCircleFill className='arrow arrow-right'/>
      <span className='circle-indicators'>
        {
          images && images.length ? images.map((_,index)=><button key={index} className='current-indicator'></button>) :null
        }
      </span>
    </div>
  )
}

export default ImageSlider;