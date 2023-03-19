import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Landing, Register, Error, ProtectedRoute } from "./pages";
import {
  Stats,
  SharedLayout,
  Profile,
  AllJobs,
  AddJobs,
} from "./pages/dashboard";
import React from "react";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <ProtectedRoute>
            <SharedLayout />
          </ProtectedRoute>
        }>
          <Route index element={<Stats />} />
          <Route path="profile" element={<Profile />} />
          <Route path="all-jobs" element={<AllJobs />} />
          <Route path="add-jobs" element={<AddJobs />} />
        </Route>
        <Route path="/register" exact element={<Register />} />
        <Route
          path="/landing"
          exact
          element={
            <div>
              <Landing />
            </div>
          }
        />
        <Route path="*" exact element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
