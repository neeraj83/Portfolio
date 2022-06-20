import React from "react";

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Profile from "./profile";

function App() {


  return (

    <BrowserRouter>
      <Routes>
          <Route path="portfolio/:id" element={<Profile />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;