import React from "react";
import ImageCard from "./ImageCard";
import "./ImageList.css"

const ImageList = (props) =>{

   /* const images = props.images.map((image) =>{
        return <img key={image.id} src={image.urls.regular} alt={image.description } /> 
    }) */
    const images = props.images.map((image) =>{
        return <ImageCard key={image.id} image={image} /> /* Destructuring above */
    })

    return(
        <div className="image-list">
            {images}
        </div>
    )
}

export default ImageList