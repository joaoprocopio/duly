import { render } from "@testing-library/react";
import App from "~/App";

it("should pass", () => {
  const component = render(<App />);

  expect(component).toBeTruthy();
});
