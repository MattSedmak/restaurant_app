import { render } from "@testing-library/react";

import Admin from "./Admin";

test("check if button renders", () => {
    const { queryByText } = render(<Admin />);
    const btn = queryByText("Sök")
    expect(btn).toBeTruthy();
});

test("check if search input renders", () => {
    const { getByPlaceholderText } = render(<Admin />);
    const searchInput = getByPlaceholderText('Efternamn')
    expect(searchInput).toBeTruthy();
    expect(searchInput).toHaveAttribute('type', 'text');
})
