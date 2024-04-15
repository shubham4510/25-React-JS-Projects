import React, { useEffect, useState } from 'react';
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs';

const ImageSlider = ({ url, limit = 5, page = 1 }) => {
  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (url !== '') {
      fetchImages(url);
    }
  }, [url]);

  const fetchImages = async (getUrl) => {
    try {
      const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
      const data = await response.json();

      if (data) {
        setImages(data);
        setLoading(false);
      }
    } catch (e) {
      setErrorMsg(e);
      setLoading(false);
    }
  };

  const handleRightClick = () => {
    setCurrentSlide((prevSlide) => (prevSlide === images.length - 1 ? 0 : prevSlide + 1));
  };

  const handleLeftClick = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? images.length - 1 : prevSlide - 1));
  };

  if (loading) {
    return <div>Loading data! Please wait</div>;
  }

  if (errorMsg !== null) {
    return <div>Error occurred!!!</div>;
  }

  return (
    <div className="container">
      <div className="img-slider">
        <BsArrowLeftCircleFill className="arrow arrow-left" onClick={handleLeftClick} />
        <div className="image-wrapper">
          {images && images.length ? (
            <img
              key={images[currentSlide].id}
              src={images[currentSlide].download_url}
              alt={images[currentSlide].download_url}
              className="current-image"
            />
          ) : null}
        </div>
        <BsArrowRightCircleFill className="arrow arrow-right" onClick={handleRightClick} />
      </div>
    </div>
  );
};

export default ImageSlider;
