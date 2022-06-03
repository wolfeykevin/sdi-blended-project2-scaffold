import { Quiz } from '../components';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { AppProvider } from '../RoverContext';

const setup = () => render(
  <Router>
    <AppProvider>
      <Quiz />
    </AppProvider>
  </Router>
  );
  
  describe('Quiz', () => {
  
    test('should display a set of instructions on the page', () => {
      setup();
      let instructions = screen.getByTestId('p1');
      let instructions2 = screen.getByTestId('p2');
      expect(instructions).toContainHTML('Each of these photographs were taken by one of the rovers!');
      expect(instructions2).toContainHTML('Select your favorite photograph below to determine your favorite Mars photographer!');
    })
    test('expect quiz to display on the page', () => {
      screen.findByTestId('photos').then(photos => {
        expect(photos).toHaveLength(4);
      })
      
    })
})