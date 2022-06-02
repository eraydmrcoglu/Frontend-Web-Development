/* eslint-disable testing-library/prefer-screen-queries */
import { render } from "@testing-library/react";
import { ErrorBoundary } from "./ErrorBoundary";
import TodoContainer from "../../containers/TodoContainer";

describe("Error Boundary", () => {
  it('renders "An error occurred." when an error is thrown', () => {
    const spy = jest.spyOn(console, "error");
    spy.mockImplementation(() => {});

    const Throw = () => {
      throw new Error("Error");
    };

    const { getByText } = render(
      <ErrorBoundary>
        <Throw />
      </ErrorBoundary>
    );

    expect(getByText("An error occurred.")).toBeDefined();
    spy.mockRestore();
  });

  it("renders application when an error is not thrown", () => {
    const { getByText } = render(
      <ErrorBoundary>
        <TodoContainer />
      </ErrorBoundary>
    );

    expect(getByText("Todos List")).toBeDefined();
  });
});
