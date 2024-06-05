import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Prof from "./pages/Prof";
import Profs from "./pages/Profs";
import Home from "./pages/Home";
import Object from "./pages/Object";
import Layout from "./pages/Layout";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/object" element={<Object />} />
      </Route>
      <Route path="/" element={<Layout />}>
        <Route path="/profs" element={<Profs />}>
          <Route path=":id" element={<Prof />} />
        </Route>
      </Route>
    </Routes>
  );
};
export default App;
