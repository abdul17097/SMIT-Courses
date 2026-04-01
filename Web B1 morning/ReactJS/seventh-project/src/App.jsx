import { useState } from "react";
import "./App.css";
import DashboardLayout from "./components/DashboardLayout";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Reports from "./pages/Reports";
import Geography from "./pages/Geography";
import Conversation from "./pages/Conversation";
import Deals from "./pages/Deals";
import Exports from "./pages/Exports";
import Settings from "./pages/Settings";
import UserDetail from "./pages/UserDetail";
import NotFound from "./pages/NotFound";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="">
      <Routes>
        <Route element={<DashboardLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/geography" element={<Geography />} />
          <Route path="/conversation" element={<Conversation />} />
          <Route path="/deals" element={<Deals />} />
          <Route path="/exports" element={<Exports />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/user-details/:id" element={<UserDetail />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
