import { Winning } from '../components'
import { BrowserRouter as Router } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import { AppProvider } from '../RoverContext';

const setup = () => render(
<AppProvider>
  <Router>
    <Winning />
  </Router>
</AppProvider>
);

describe('Winning', () => {
  test('should have header with rover name', () => {
    setup();
    let header = screen.getByTestId('headerOne');
    expect(header).toContainHTML('The winner is... !');
  })
  test('should have correct card', () => {
    setup();
    let card = screen.getByTestId('cardImg');
    expect(card).toBeInTheDocument();
  })
  test('should have table', () => {
    setup();
    let table = screen.getByTestId('table');
    expect(table).toBeInTheDocument();
  })
  test('should have header for winner images', () => {
    setup();
    let header2 = screen.getByTestId('headerTwo');
    expect(header2).toBeInTheDocument();
  })
  test('should have div for winner pics', () => {
    setup();
    let photos = screen.getByTestId('photoDiv');
    expect(photos).toBeInTheDocument();
  })
})
// test('renders a list of items, upon request', async () => {
//   const app = render(<App />);

//   fireEvent.click(screen.getByText('Update'));

//   await waitFor(() => screen.getByRole('list'));

//   expect(screen.getByRole('list')).toBeInTheDocument();
//   expect(screen.getByRole('list')).toHaveClass('Timeline');
// });