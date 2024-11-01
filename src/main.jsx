import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Components/Root/Root";
import ErroPage from "./Components/ErrorPage/ErrorPage";
import Home from "./Components/Home/Home";
import BookDetails from "./Components/BookDetails/BookDetails";
import ListedBooks from "./Components/ListedBooks/ListedBooks";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErroPage></ErroPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/bookDetails/:bookDetailsId",
        element: <BookDetails></BookDetails>,
        loader: () => fetch(`/booksData.json`),
      },
      {
        path: "/list-books/:list-booksId",
        element: <ListedBooks></ListedBooks>,
        loader: () => fetch("/booksData.josn"),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
