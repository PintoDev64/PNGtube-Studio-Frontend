import { render, screen } from '@testing-library/react';
import App from './app/App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Hola mundo/i);
  expect(linkElement).toBeInTheDocument();
});
