import { render, screen } from "@testing-library/react";
import Login from "./pages/Login";

test("renders the Login page", () => {
  render(<Login />);

  expect(screen.getByPlaceholderText("Insira seu endereço de email")).toBeRequired()
  expect(screen.getByPlaceholderText("Insira sua senha")).toBeRequired()
});
