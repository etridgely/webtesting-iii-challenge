import React from "react";
import { render, fireEvent } from "@testing-library/react";

import Controls from "./Controls";

test("it should render correctly", () => {
    const toggleLocked = jest.fn();
    const toggleClosed = jest.fn();

    render(
        <Controls
            toggleLocked={toggleLocked}
            toggleClosed={toggleClosed}
            locked={locked}
            closed={closed}
        />
    );
});

test("")