import { expect, test } from "bun:test";
import { Something } from "../lib/something";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";

test("2 + 2", () => {
  expect(2 + 2).toBe(4);
});

// test("set button text", () => {
//   const thing = Something;

//   render(<Something user={{ name: "Hassan" }} />);

//   // Expect the counter to be 1
//   expect(screen.getByText("Hassan")).toBeTruthy();

//   //   expect(button?.innerText).toEqual("My button");
// });
