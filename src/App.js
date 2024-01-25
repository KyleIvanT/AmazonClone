import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout"
import Login from "./LoginRoute"
const CheckRoute = () => (
  <div>
    <Header />
    <Checkout/>
  </div>
)
const LoginRoute = () => (
  <div>
    <Login/>
  </div>
);
const HomeRoute = () => (
  <div>
    <Header />
    <Home />
  </div>
)


function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          {/* Routes replaced switch so use routes */}
          <Route path="/checkout" element={<CheckRoute/>} />
          <Route path="/login" element={<LoginRoute/>} />
          <Route path="/" element={<HomeRoute />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

