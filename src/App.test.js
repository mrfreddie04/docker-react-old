import { render, screen } from '@testing-library/react';
import App from './App';

test(`renders "learn react" link`, () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders welcome to our app paragraph', () => {
  render(<App />);
  const paragraphElement = screen.getByText(/Welcome to our app/i);
  expect(paragraphElement).toBeInTheDocument();
});