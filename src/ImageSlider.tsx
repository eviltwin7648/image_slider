import { useState } from "react"
import { ArrowBigLeft, ArrowBigRight } from "lucide-react"
import './image-slider.css'

type ImageSliderProps = {
    imageUrls: string[]
}


export default function ImageSlider( {imageUrls}: ImageSliderProps){


    const [imageIndex, setimageIndex] = useState(0)

    function prevoiusImage(){
        setimageIndex(index =>{
            if(index === 0 ) return imageUrls.length -1
             return index -1
        })
    }
function nextImage(){
    setimageIndex(index =>{
        if(index === imageUrls.length -1 ) return 0
         return index +1
    })
}

    return(

        <div style={{ 
            position:"relative"
        }}>
        <img src={imageUrls[imageIndex]} alt="picture" className="img-slider" />
        <button onClick={prevoiusImage} className="image-slider-btn" style={{left:"0"}}><ArrowBigLeft/></button>
        <button onClick={nextImage} className="image-slider-btn"  style={{right:"0"}} ><ArrowBigRight/></button>

    </div>
    )

}