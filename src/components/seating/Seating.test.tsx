import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Booking from '../../pages/booking/Booking';
import { MemoryRouter } from 'react-router';

test('expect text on div', () => {
  const { getByText } = render(
    <MemoryRouter>
      <Booking />
    </MemoryRouter>
  );
  const divText = screen.getByText(/18:00/i);
  expect(divText).toBeInTheDocument();
});
