import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { StaticRouter } from "react-router-dom/server";
import store from "../../utils/Redux/store";
import Body from "../Body";
import { Restaurant_Data } from "../../mocks/data";

test("shimmer should load on Homepage", () => {
  global.fetch = jest.fn(() => {
    return Promise.resolve({
      // Will put mock data here
      json: () => Promise.resolve(Restaurant_Data),
    });
  });
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );

  const shimmer = body.getByTestId("shimmer");
  
  expect(shimmer.children.length).toBe(10);
});
