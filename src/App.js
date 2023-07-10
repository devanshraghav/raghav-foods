import React, { Suspense, lazy, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Contact from "./components/Pages/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import Profile from "./components/Pages/Profile";
import Instamart from "./components/Pages/Instamart";
import UserContext from "./utils/userContext";
// import { Provider } from "react-redux";
// import store from "./utils/store";

const About = lazy(() => import("./components/Pages/About"));
const AppLayout = () => {
  const [user,setUser]=useState({
    name: "Devansh",
    email: "devansh@gmail.com"
  });
  return (
    //<Provider store={store}>
    <UserContext.Provider value={{user,setUser}}>
      <Header />
      <Outlet />
      <Footer />
    </UserContext.Provider>
    //</Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: (
          <Suspense>
            <About />
          </Suspense>
        ),
        children: [
          {
            path: "profile",
            element: <Profile />,
          },
        ],
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/instamart",
        element: <Instamart />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
