import React from "react";
import Header from "./Components/Header";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/home" element={<h1>Home Page</h1>} />
        <Route path="/about" element={<h1>About Page</h1>} />
        <Route path="/popular" element={<h1>Popular Page</h1>} />
        <Route path="/featured" element={<h1>Featured Page</h1>} />
      </Routes>
    </div>
  );
};

export default App;
