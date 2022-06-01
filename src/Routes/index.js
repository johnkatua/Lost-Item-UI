import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import DashboardContainer from "../components/Dashboard";
const Homepage = lazy(() => import("../components/Home"));
const TipsPage = lazy(() => import("../components/Tips"));
const ItemsContainer = lazy(() => import("../containers/Items"));
const MyItemsPage = lazy(() => import("../components/MyItems"));
const FilterItems = lazy(() => import("../components/FilteredItems"));
import AuthPage from "../components/Authentication";
import LoginForm from "../components/Authentication/Login";
import RegisterForm from "../components/Authentication/Register";

const DashboardRoute = ({ children }) => {
  return <DashboardContainer>{children}</DashboardContainer>;
};

const RoutesPage = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <DashboardRoute>
                <Homepage />
              </DashboardRoute>
            }
          />
          <Route
            path="/tips"
            element={
              <DashboardRoute>
                <TipsPage />
              </DashboardRoute>
            }
          />
          <Route
            path="/items"
            element={
              <DashboardRoute>
                <ItemsContainer />
              </DashboardRoute>
            }
          />
          <Route
            path="/myitems"
            element={
              <DashboardRoute>
                <MyItemsPage />
              </DashboardRoute>
            }
          />
          <Route
            path="/items/:id"
            element={
              <DashboardRoute>
                <FilterItems />
              </DashboardRoute>
            }
          />
          <Route
            path="auth"
            element={
              <AuthPage>
                <LoginForm />
              </AuthPage>
            }
          />
          <Route
            path="auth/register"
            element={
              <AuthPage>
                <RegisterForm />
              </AuthPage>
            }
          />
          <Route path="*" element={<div>404</div>} />
        </Routes>
      </Router>
    </Suspense>
  );
};

export default RoutesPage;
