import { Gallery } from '../components';
import { render, screen } from '@testing-library/react';
import { AppProvider } from '../RoverContext';

const setup = () => render(
<AppProvider>
  <Gallery />
</AppProvider>
);

describe('Gallery', () => {

  test('should display gallery for corresponding rover', () => {
    setup();
    let image = screen.getByTestId('galleryBody');
    expect(image).toBeInTheDocument();
  })
  test('should display header for corresponding rover', () => {
    setup()
    let header = screen.getByTestId('galleryHeader');
    expect(header).toBeInTheDocument();
  })
})