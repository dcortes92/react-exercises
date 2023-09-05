import React from 'react';
import { render, screen } from '@testing-library/react'
import App from '../src/App';

test('demo', () => {
  expect(true).toBe(true)
});

test('Renders the main page', () => {
  render(<App />);
  const title = screen.getByText(/Click on the Vite and React logos to learn more/i);
  expect(title).toBeInTheDocument();
});