import React from 'react'
import Accordian from '../Accordian/Accordian.jsx'
import RandomColor from '../Random color/RandomColor.jsx'
import StarRating from '../Star rating/StarRating.jsx'
import ImageSlider from '../Image slider/ImageSlider.jsx'
import LoadMoreData from '../load-more-data/LoadMoreData.jsx'
import TreeView from '../Tree view/TreeView.jsx'
import menus from '../Tree view/data.jsx'
import QrCodeGenerator from '../Qr-code-generator/QrCodeGenerator.jsx'
import ScrollIndicator from '../scroll-indicator/ScrollIndicator.jsx'
import TabTest from '../custom-tabs/TabTest.jsx'
import ModalTest from '../customModalPopup/ModalTest.jsx'
import GithubProfileFinder from '../../GithubProfileFinder/GithubProfileFinder.jsx'

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

        {/* LOAD MORE PRODUCTS COMPONENT  */}
        <LoadMoreData/>

        {/* TREE VIEW COMPONENT / MENU UI COMPONENT / RECURSIVE NAVIGATION MENU  */}
        <TreeView menus={menus}/>

        {/* QR CODE GENERATOR  */}
        <QrCodeGenerator/>

        {/* SCROLL INDICATOR COMPONENT  */}
        <ScrollIndicator url={`https://dummyjson.com/products`}/>

        {/* CUSTOM TABS COMPONENT  */}
        <TabTest/>

        {/* CUSTOM MODAL COMPONENT  */}
        <ModalTest/>

        {/* GITHUB PROFILE FINDER  */}
        <GithubProfileFinder/>
        
    </div>
  )
}

export default Body