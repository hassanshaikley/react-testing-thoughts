import { expect, test } from "bun:test";
import { Something } from "../lib/something";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { App } from "../lib/App";

test("set button text", () => {
  const thing = Something;

  render(<App />);

  // Expect the counter to be 1
  expect(screen.getByText("Hello World")).toBeTruthy();

  //   expect(button?.innerText).toEqual("My button");
});
