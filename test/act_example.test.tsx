import { expect, test } from "bun:test";

import {
  act,
  fireEvent,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import { ActExample } from "../lib/ActExample";

test("set button text", async () => {
  await act(() => {
    render(<ActExample />);
  });

  // Expect the counter to be 1
  expect(screen.getByText("Hello World")).toBeTruthy();

  //   expect(button?.innerText).toEqual("My button");
});
