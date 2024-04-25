import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import AllTodos from "./pages/AllTodos/AllTodos";
import DeletedTodos from "./pages/DeletedTodos";
import CompletedTodos from "./pages/CompletedTodos";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <AllTodos />,
      },
      {
        path: "/deleted",
        element: <DeletedTodos />,
      },
      {
        path: "/completed",
        element: <CompletedTodos />,
      },
    ],
  },
]);

export default router;
