import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router";

import Admin from "./Admin";

test("check if button renders", () => {
    const { queryByText } = render(<MemoryRouter><Admin /></MemoryRouter>);
    const btn = queryByText("Sök")
    expect(btn).toBeTruthy();
});

test("check if search input renders", () => {
    const { getByPlaceholderText } = render(<MemoryRouter><Admin /></MemoryRouter>);
    const searchInput = getByPlaceholderText('Efternamn')
    expect(searchInput).toBeTruthy();
    expect(searchInput).toHaveAttribute('type', 'text');
})
