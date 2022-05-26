//import logo from "./logo.svg";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./component/form/login";
import Layout from "./component/layout/layout";
import Home from "./pages/home/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
