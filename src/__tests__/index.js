import React from "react";
import { fireEvent, render, screen } from '@testing-library/react';
import App from 'App';

test('Home works!', async () => {
    render(<App />);
    const title = await screen.findByText(/Trending GIFs/i);
    expect(title).toBeInTheDocument();
  });

test('Search-form works!', async () => {
  render(<App />);
  const input = await screen.findByRole('textbox');
  fireEvent.change(input, {value: "The thing"})

});

