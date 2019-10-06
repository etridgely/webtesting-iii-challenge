import React from "react";
import { render, fireEvent, getByText } from "@testing-library/react";
import 'jest-dom/extend-expect';

import Controls from "./Controls";

test("buttons render correctly", () => {
    render(<Controls/>);
});

test("Buttons are 'unlocked' and 'opened' when gate is neither", () => {
    const { getByText } = render(<Controls locked={true} closed={true} />);
    getByText(/unlock gate/i);
    getByText(/open gate/i);
});

test("Buttons are 'locked' and 'closed' when gate is neither", () => {
    const { getByText } = render(<Controls locked={false} closed={false} />);
    getByText(/lock gate/i);
    getByText(/close gate/i);
});

test("Open button is disabled while gate is locked", () => {
    const disabledOpen = render(<Controls locked={true} closed={true} />);
    const openGate = disabledOpen.queryByText(/open gate/i);
    expect(openGate).toHaveAttribute("disabled");
});

test("Lock button is disabled while gate is open", () => {
    const disabledLock = render(<Controls locked={false} closed={false} />);
    const lockGate = disabledLock.queryByText(/lock gate/i);
    expect(lockGate).toHaveAttribute("disabled");
});