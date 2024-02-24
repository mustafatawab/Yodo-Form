import Home from "./app/Home/home.tsx";
import Login from "./app/Login/login.tsx";
import Register from "./app/Register/register.tsx";
import { BrowserRouter, Routes, Router, Route } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
