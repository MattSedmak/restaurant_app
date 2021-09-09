import React from 'react';
import { render } from '@testing-library/react';
import Hero from './Hero';
import { MemoryRouter } from 'react-router';

test('render frontpage slogan text', () => {
  const { getByText } = render(
    <MemoryRouter>
      <Hero />
    </MemoryRouter>
  );
  const h1Element = getByText(/eat drink dream/i);

  expect(h1Element).toBeInTheDocument();
});
