import "@testing-library/jest-dom";
import { fireEvent, render, waitFor } from "@testing-library/react";
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

test("Render page on Homepage", async () => {
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

  await waitFor(()=> expect(body.getByTestId("res-list")));
  const restaurantList = body.getByTestId("res-list");

  expect(restaurantList.children.length).toBe(15);
});

test("Search functionality should work", async () => {
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

  await waitFor(()=> expect(body.getByTestId("search-input")));
  const searching = body.getByTestId("search-input");

  fireEvent.change(searching,{
    target : {
        value: "king",
    }
  });

  const searchBtn = body.getByTestId("search-btn");

  fireEvent.click(searchBtn)

  const restaurantList = body.getByTestId("res-list");

  expect(restaurantList.children.length).toBe(1);
});
