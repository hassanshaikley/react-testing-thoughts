import { expect, test } from "bun:test";
import { Something } from "../lib/something";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";

test("Renders the name", () => {
  const thing = Something;

  render(<Something user={{ name: "Hassan" }} />);

  // Expect the counter to be 1
  expect(screen.getByText("Hassan")).toBeTruthy();
});
