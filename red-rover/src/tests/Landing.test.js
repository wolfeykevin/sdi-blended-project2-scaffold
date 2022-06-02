import { Landing } from '../components';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { AppProvider } from '../RoverContext';

const setup = () => render(
  <AppProvider>
    <Router>
      <Landing />
    </Router>
  </AppProvider>
  );

  describe('Gallery', () => {

    test('should display header', () => {
      setup();
      let header = screen.getByTestId('header');
      expect(header).toBeInTheDocument();
    })
    test('link One should display', () => {
      setup();
      let link = screen.getByTestId('linkOne');
      expect(link).toBeInTheDocument();
    })
    test('link Two should display', () => {
      setup();
      let link = screen.getByTestId('linkTwo');
      expect(link).toBeInTheDocument();
    })
    test('link Three should display', () => {
      setup();
      let link = screen.getByTestId('linkThree');
      expect(link).toBeInTheDocument();
    })
    test('link Four should display', () => {
      setup();
      let link = screen.getByTestId('linkFour');
      expect(link).toBeInTheDocument();
    })
    test('should display button', () => {
      setup();
      let btn = screen.getByTestId('btn');
      expect(btn).toBeInTheDocument();
    })
  })