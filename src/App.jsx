import { Route, Routes } from "react-router-dom";
import { FriendsPage } from "./pages/FriendsPage";
import { ExpensesPage } from "./pages/ExpensesPage";
import { GroupsPage } from "./pages/GroupsPage";
import { GroupDetailPage } from "./pages/GroupDetailPage";
import { InitialPage } from "./pages/HomePage";
import { Footer } from "./components/Footer";
import Login from "./pages/Login";
import Register from "./pages/Register";

const App = () => {
  return (
    <div className="app">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<InitialPage />} />
        <Route path="/friends" element={<FriendsPage />} />
        <Route path="/expenses" element={<ExpensesPage />} />
        <Route path="/groups" element={<GroupsPage />} />
        <Route path="/detail/:id" element={<GroupDetailPage />} />
      </Routes>
      <Footer />
    </div>
  )
};

// const routes = [
//   { path: "/", element: <FriendsPage />},
//   { path: "/expenses", element: <ExpensesPage /> },
//   { path: "/groups", element: <GroupsPage /> },
// ];
// const router = createBrowserRouter(routes);

// const App = () => {
//   return (
//     <>
//     <Header />
//     <RouterProvider router={router}/>
//     </>
//   );
// };

export { App };