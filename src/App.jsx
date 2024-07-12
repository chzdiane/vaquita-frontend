import { Route, Routes } from "react-router-dom";
import { FriendsPage } from "./pages/FriendsPage";
import { ExpensesPage } from "./pages/ExpensesPage";
import { GroupsPage } from "./pages/GroupsPage";
import { GroupDetailPage } from "./pages/GroupDetailPage";
import { InitialPage } from "./pages/HomePage";
import { Footer } from "./components/Footer";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { AuthProvider } from "./components/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";

const App = () => {
  return (
    <div className="app">
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<ProtectedRoute><InitialPage /></ProtectedRoute>} />
          <Route path="/friends" element={<ProtectedRoute><FriendsPage /></ProtectedRoute>} />
          <Route path="/expenses" element={<ProtectedRoute><ExpensesPage /></ProtectedRoute>} />
          <Route path="/groups" element={<ProtectedRoute><GroupsPage /></ProtectedRoute>} />
          <Route path="/detail/:id" element={<ProtectedRoute><GroupDetailPage /></ProtectedRoute>} />
        </Routes>
      </AuthProvider>
      <Footer />
    </div>
  );
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
