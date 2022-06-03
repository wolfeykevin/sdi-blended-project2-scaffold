import { RoverPicture } from '../components';
import { render, screen } from '@testing-library/react';
import { AppProvider } from '../RoverContext';
import {BrowserRouter as Router} from 'react-router-dom'

const setup = () => render(
  <Router>
    <AppProvider>
      <RoverPicture roverName="perseverance" />
    </AppProvider>
  </Router>
);

describe('Rover Picture', () => {

  test('should display pictures to select', () => {
    setup();
    screen.findAllByRole('img').then( (images) => {
      images.forEach( (image) => {
        expect(image).toBeInTheDocument();
      })
    })
  })

  test('should display pictures as links', () => {
    setup();
    screen.findAllByRole('link').then( (links) => {
      links.forEach( (link) => {
        expect(link).toBeInTheDocument();
      })
    })
  })
})