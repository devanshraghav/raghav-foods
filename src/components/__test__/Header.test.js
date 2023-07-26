import { render } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import store from "../../utils/Redux/store";
import { StaticRouter } from "react-router-dom/server";

test("cart item should load on redering header", () => {
  // Load Header
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );
  const logo = header.getAllByTestId("logo")

   // Check if logo is loaded
  expect(logo[0].src).toBe("http://localhost/dummy.png");
});


test("logo should load on redering header", () => {
  // Load Header
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );
  const cartItem = header.getByTestId("cart");

  expect(cartItem.innerHTML).toBe("Cart - 0");
   
});
