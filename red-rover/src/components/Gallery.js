import './Gallery.css';
import React, { useEffect, useState, useContext } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { RoverContext } from '../RoverContext';

const Gallery = () => {
  const { values, setters } = useContext(RoverContext)
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch(`https://mars-photos.herokuapp.com/api/v1/rovers/${values.galleryRover}/photos?sol=200&page=1`)
      .then(res => res.json())
      .then(data => setImages(data.photos.map(item => {
        return { id: item.id, url: item.img_src }
      })))
  }, [])

  return (
    <body data-testId='galleryBody' className='galleryBody'>
      <div className='flex-container'>
        <StyledGalleryHeader>{values.galleryRover}</StyledGalleryHeader>
        <div className="roverGallery">
          {images.map((image, index) => (
            <img id="roverImage" key={image.id} src={image.url} alt={image.id}></img>
          ))}
        </div>
      </div>
    </body>
  )
}

const StyledGalleryHeader = styled.div`
text-transform: capitalize;
text-decoration: underline;
font-size: 60px;
font-weight: bold
color: #f3e3d6;
background-image: linear-gradient(to bottom right, rgb(0, 103, 91), rgb(21, 209, 132))
}
width: 100%;
height: 100px;
padding: 5vh;
margin-bottom: 0;
margin-top: 0px;
color: #f3e3d6;
text-align: center;
text-shadow: 1px 1px 2px rgb(255, 255, 255), 0 0 25px rgb(139, 5, 5), 0 0 5px rgb(0, 0, 0);
`

export default Gallery;