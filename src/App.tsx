import React from 'react'

import pic1 from "./images/1.jpg"
import pic2 from "./images/2.jpg"
import pic3 from "./images/3.jpg"
import pic4 from "./images/4.jpg"
import pic5 from "./images/5.jpg"
import ImageSlider from './ImageSlider'

const App = () => {
const IMAGES = [pic1,pic2,pic3,pic4,pic5]

  return (
    <div
    style={{
      maxWidth:"1200px",
      width:"100%",
      aspectRatio : "500px",
      margin: "0 auto",
    }}
    >
    
    <ImageSlider imageUrls={IMAGES} />
    </div>
   
  )
}

export default App;