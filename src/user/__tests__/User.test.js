import React from "react";
import { User, UserDetails } from "../User";
import { unmountComponentAtNode } from "react-dom";
import { render } from "@testing-library/react";
debugger;

let container = document.createElement("div");
beforeEach(() => {
  fetch.mockClear();
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

let fakeUsers = [
  {
    first_name: "test name",
    last_name: "last name",
    email: "test@email.com",
    gender: "female",
  },
];

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve({ loading: true, error: false, results: fakeUsers }),
  })
);

test("test success state", async () => {
  fetch.mockImplementationOnce(() =>
    Promise.resolve({
      json: () =>
        Promise.resolve({ loading: false, error: false, results: fakeUsers }),
    })
  );
  render(<User />, container);
  expect(container.getElementsByTagName(UserDetails)).toBeDefined();
});

test("test error state", async () => {
  fetch.mockImplementationOnce(() => Promise.reject("API is down"));

  const { findByText } = render(<User />);
  const element = await findByText(/User not found/i);
  expect(element).toBeInTheDocument();
});
