import { render, screen } from '@testing-library/react';
import second from './second';

test('renders learn react link', () => {
  render(<second />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
