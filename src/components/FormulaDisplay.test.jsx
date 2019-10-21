import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import FormulaDisplay from "./FormulaDisplay";

let container = null;
beforeEach(() => {
  container = document.createElement("div");
  document.body.append(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("renders some text", () => {
  act(() => {
    render(<FormulaDisplay textToDisplay={["a", "b"]} />, container);
  });
  expect(container.textContent).toBe("ab");
});

it("doesn't contain invalid text", () => {
  act(() => {
    render(<FormulaDisplay textToDisplay={["a", "b"]} />, container);
  });
  expect(container.textContent).not.toBe("asdf");
});
