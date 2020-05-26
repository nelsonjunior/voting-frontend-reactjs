import { render } from '@testing-library/react';
import React from 'react';
import VoteCard from '.';

test('renders loading', () => {
  const { getByText } = render(<VoteCard />);
  const element = getByText(/Loading.../i);
  expect(element).toBeInTheDocument();
});

test('renders loading', async () => {
  const { getByText } = render(<VoteCard />);
  await new Promise((r) => setTimeout(r, 700));
  const element = getByText(/Countdown/i);
  expect(element).toBeInTheDocument();
});
