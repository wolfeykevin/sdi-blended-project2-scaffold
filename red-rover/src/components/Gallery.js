import './Gallery.css';
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

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
    <div className='flex-container'>
      <ul className="roverGallery">
        {images.map(image => (
            <img id="roverImage" key={image.id} src={image.url} alt={image.id}></img>
        ))}
      </ul>
    </div>

  )
}
//

export default Gallery;