import { getByText, render, screen } from '@testing-library/react';
import React from 'react';
import Guests from './Guests';
import { GuestNumber } from './GuestStyles';

test('Should show message', () => {
  const { getByText } = render(<Guests onGuestSelect={() => 4} />);
  const p = getByText(
    /Vänligen kontakta restaurangen om nill vill boka fler än 12 personer./i
  );

  expect(p).toBeInTheDocument();
});
