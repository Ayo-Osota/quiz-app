import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./Home";
import Quiz from "./Quizpage";
import Result from "./Result";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/quiz",
      element: <Quiz />,
    },
    {
      path: "/result",
      element: <Result />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
