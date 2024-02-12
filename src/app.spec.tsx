import { render, screen } from "@testing-library/react";
import App from "./app";

describe("App", () => {
  it("should render App", () => {
    render(<App />);

    const textExpected = screen.getByText("React Typescript Minimal Example");

    expect(textExpected).toBeDefined();
  });
});
