import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders menu Home link', () => {
  const { getByText } = render(<App />);
  const element = getByText(/HOME/i);
  expect(element).toBeInTheDocument();
});

test('renders menu Dashboard link', () => {
  const { getByText } = render(<App />);
  const element = getByText(/DASHBOARD/i);
  expect(element).toBeInTheDocument();
});

test('renders menu About link', () => {
  const { getByText } = render(<App />);
  const element = getByText(/ABOUT/i);
  expect(element).toBeInTheDocument();
});

test('renders menu Github link', () => {
  const { getByText } = render(<App />);
  const element = getByText(/GITHUB/i);
  expect(element).toBeInTheDocument();
});