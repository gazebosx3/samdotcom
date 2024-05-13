import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import "./index.css";
import Experience from "./Experience.tsx";
import About from "./About.tsx";
import Header from "./Header.tsx";
import Home from "./Home.tsx";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     children: [
//       {
//         path: "/Home",
//         element: <Home />,
//         index: true
//       },
//       {
//         path: "/Experience",
//         element: <Experience />,
//       },
//       {
//         path: "/About",
//         element: <About />,
//       },
//     ]
//   },
// ]);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<App />} path="/">
      <Route index element={<Home />} />
      <Route element={<About />} path="About" />
      <Route element={<Experience />} path="Experience" />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
