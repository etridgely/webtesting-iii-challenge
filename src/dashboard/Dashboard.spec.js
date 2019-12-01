import React from "react";
import { render } from "@testing-library/react";

import Dashboard from "./Dashboard";

test("it renders without crashing", () => {
    render(<Dashboard />);
});

test("it renders the defaults: unlocked + open", () => {

    const { getByText } = render(<Dashboard />);

    getByText(/unlocked/i);
    getByText(/open/i);
});

test("it renders the new state", () => {

    const { getByText } = render(<Dashboard />);

    getByText(/lock gate/i);
    getByText(/close gate/i);
});