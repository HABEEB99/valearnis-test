import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ErrorPage, HomePage, QuizPage, ResultPage } from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/quiz",
    element: <QuizPage />,
  },
  {
    path: "/result",
    element: <ResultPage />,
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

function App() {
  return (
    <div className="container mx-auto">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
