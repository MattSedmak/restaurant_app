import React from 'react';
import { render, screen } from '@testing-library/react';
import Booking from '../../pages/booking/Booking';
import { MemoryRouter } from 'react-router';

test('expect text on div', () => {
  render(
    <MemoryRouter>
      <Booking />
    </MemoryRouter>
  );
  const divText = screen.getByText(/18:00/i);
  expect(divText).toBeInTheDocument();
});

// test('expect clicked div to change bg color', () => {
//   const { getByText } = render(
//     <MemoryRouter>
//       <Booking />
//     </MemoryRouter>
//   );

//   const divElement = screen.getByText(/18:00/i);

//   fireEvent.click(divElement);

//   expect(divElement).toHaveStyle(`background-color: #006edc`);
// });
