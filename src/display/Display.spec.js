import React from 'react';
import { render } from "@testing-library/react";

import Display from "./Display";
import 'jest-dom/extend-expect';

test("Display renders", () => {
    render(<Display />);
  });

test("Display shows locked and closed as expected", () => {
    const displayLock = render(<Display locked={true} closed={true} />);
    displayLock.getByText(/closed/i);
    displayLock.getByText(/locked/i);
  });

test("Display shows unlocked and open as expected", () => {
    const displayUnlock = render(<Display locked={false} closed={false} />);
    displayUnlock.getByText(/open/i);
    displayUnlock.getByText(/unlocked/i);
  });

test("Display is red-led when closed and locked", () => {
    const redDisplay = render(<Display locked={true} closed={true} />);
    const closed = redDisplay.getByText(/closed/i);
    const locked = redDisplay.getByText(/locked/i);
    expect(closed.classList.contains("red-led")).toBe(true);
    expect(locked.classList.contains("red-led")).toBe(true);
  });

  test("Display is green-led when open and unlocked", () => {
    const greenDisplay = render(<Display locked={false} closed={false} />);
    const open = greenDisplay.getByText(/open/i);
    const unlocked = greenDisplay.getByText(/unlocked/i);
    expect(open.classList.contains("green-led")).toBe(true);
    expect(unlocked.classList.contains("green-led")).toBe(true);
  });
  
  