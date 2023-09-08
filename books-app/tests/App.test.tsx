import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react'
import App from '../src/App';

test('demo', () => {
  expect(true).toBe(true)
});

test('Renders the main page', () => {
  render(<App />);
  const title = screen.getByText(/Find Books/i);
  expect(title).toBeInTheDocument();
});

test('Display message when there are no books', () => {
  render(<App />);
  const titleIput = screen.getByLabelText('title-input');
  fireEvent.change(titleIput, { target: { value: 'safhkjasdhjfa' }});
  expect(screen.getByText(/No books found. Try adjusting your filter criteria./)).toBeInTheDocument();
});

test('Filters by title', () => {
  const {container} = render(<App />);
  const titleIput = screen.getByLabelText('title-input');
  fireEvent.change(titleIput, { target: { value: 'the' }});
  const filteredBooks = container.getElementsByClassName('Book');
  expect(filteredBooks.length).toBe(38);
});

test('Filters by author', () => {
  const {container} = render(<App />);
  const authorIput = screen.getByLabelText('author-input');
  fireEvent.change(authorIput, { target: { value: 'geo' }});
  const filteredBooks = container.getElementsByClassName('Book');
  expect(filteredBooks.length).toBe(3);
});

test('Filters by country', () => {
  const {container} = render(<App />);
  const countryIput = screen.getByLabelText('country-input');
  fireEvent.change(countryIput, { target: { value: 'ita' }});
  const filteredBooks = container.getElementsByClassName('Book');
  expect(filteredBooks.length).toBe(5);
});

test('Filters by year', () => {
  const {container} = render(<App />);
  const yearIput = screen.getByLabelText('year-input');
  fireEvent.change(yearIput, { target: { value: '193' }});
  const filteredBooks = container.getElementsByClassName('Book');
  expect(filteredBooks.length).toBe(4);
});

test('Filters by all', () => {
  const {container} = render(<App />);
  const titleIput = screen.getByLabelText('title-input');
  const authorIput = screen.getByLabelText('author-input');
  const countryIput = screen.getByLabelText('country-input');
  const yearIput = screen.getByLabelText('year-input');
  

  fireEvent.change(titleIput, { target: { value: 'di' }});
  fireEvent.change(authorIput, { target: { value: 'd' }});
  fireEvent.change(countryIput, { target: { value: 'i' }});
  fireEvent.change(yearIput, { target: { value: '13' }});
  
  const filteredBooks = container.getElementsByClassName('Book');
  expect(filteredBooks.length).toBe(1);
  expect(screen.getByText(/The Divine Comedy/i)).toBeInTheDocument();
});