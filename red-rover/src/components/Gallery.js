import './Gallery.css';
import React, { useEffect, useState } from 'react';

const Gallery = () => {

  const [ images, setImages ] = useState([]);

  useEffect(() => {
    fetch('https://mars-photos.herokuapp.com/api/v1/rovers/curiosity/photos?sol=1000&page=1')
    .then(res => res.json())
    .then(data => setImages(data.photos.map(item => {
      return {id: item.id, url: item.img_src}
    })))
  }, [])

  return (
    <ul id="roverGallery">
      {images.map(image => {
        return <img key={image.id} src={image.url} alt={image.id}></img>
      })}
    </ul>
  )
}
//
export default Gallery;