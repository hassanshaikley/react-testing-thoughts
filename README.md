# React Testing Thoughts

To install dependencies:

```bash
bun install
```

To run:

```bash
bun run index.ts
```

This project was created using `bun init` in bun v1.1.29. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.

## Thoughts

# 1: Tests that don't make your life easier make your life harder

They will make you not want to refactor. Tests should make you want to refactor.

Many tests look like

```
test("Renders the name", () => {
  const thing = Something;

  render(<Something user={{ name: "Hassan" }} />);

  // Expect the counter to be 1
  expect(screen.getByText("Hassan")).toBeTruthy();
});
```

But I believe this will have a negative affect on refactoring.

It doesn't allow you to do TDD because you need to check the CSS anyways.

Maybe one of these tests is useful for the entire codebase to make sure things don't go haywire.

It may be more valuable to assert that somewhere on the page the username is rendered. So when you refactor the entire page, you are still rendering the username. So if this component ever changes, your test is still valuable.

# 2:

I think tests need to be at the higher level often for refactoring efforts to be worthwhile.

# 3:

# 4: Test your dependencies.

When you upgrade a dependency you want your test suite to fail.

I have to actually test that this will help \* Whenever this has happened to me I don't think it was captured in a test.

# 5: Group tests of similar components

Let's say we introduce a new kind of user, an Admin. They have the same keys as users. But a (made up and maybe not the most realistic constraint, maybe they come from a different service, whatever) reason they are different database tables. Or so…that's supposed to be the case. A valuable assertion would be asserting that an Admin renders the same as a regular user. But to do this you either need an up to date mock.

# 6: Get better mock data

Mock data should be property based and randomized. As I write this, I can't think of a good way to get mock data or if somehow there is a way around using mock data and actually hitting the backend in a sandbox way.

You don't know when a user is going to have all the properties you expect and when it won't. I really dislike mocks and I find they're used a lot. Still thinking about this.

# 7: Use bun

Bun makes people nervous because it is new and venture backed. I get that. But it makes tests faster. Faster tests = happier coding. If it is just a build and test tool I wouldn't be too concerned using it in production personally.
