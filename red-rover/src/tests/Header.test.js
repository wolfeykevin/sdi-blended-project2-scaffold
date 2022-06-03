import { Header } from '../components';
import { userEvent, fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { AppProvider } from '../RoverContext';

const setup = () => render(
  <AppProvider>
    <Router>
      <Header />
    </Router>
  </AppProvider>
  );

  describe('Header Home Button', () => {

    // test header by role
    test('should display header - new', () => {
      setup();
      let homeButton = screen.getByRole('button');
      expect(homeButton).toBeInTheDocument();
    });

    test('clicking home button navigates user to homepage', () => {
      setup();
      const homeButton = screen.getByRole('button');
      fireEvent.click(homeButton)
      screen.findByText('Mars Rover Photo Gallery and Quiz').then( title => {
        expect(title).toBeInTheDocument();
      })
    })
  })