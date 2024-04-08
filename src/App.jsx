import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { FriendsPage } from "./pages/friends";
import { ExpensesPage } from "./pages/expenses";
import { GroupsPage } from "./pages/groups";
import { Header } from "./components/Header";

const routes = [
  { path: "/", element: <FriendsPage /> },
  { path: "/expenses", element: <ExpensesPage /> },
  { path: "/groups", element: <GroupsPage /> },
];
const router = createBrowserRouter(routes);

const App = () => {
  return (
    <>
    <Header />
    <RouterProvider router={router} />
    </>
  );
};

export { App };