import { HashRouter, Routes, Route } from "react-router-dom";
// import ClientLayout from './layouts/ClientLayout';
import AuthLayout from "./layouts/AuthLayout";
import Home from "./pages/user/Home/Home";
import Login from "./pages/auth/Login/Login";
import Register from "./pages/auth/Register/Register";
import { ToastContainer } from "react-toastify";
import { useTheme } from "./contexts/theme/ThemeContext";
import "./App.css";

function App() {
  const { theme } = useTheme();

  return (
    <HashRouter>
      <ToastContainer theme={theme} />
      <Routes>
        {/* Voltar para ClientLayout */}
        <Route element={<AuthLayout />}>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
        </Route>

        {/* <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Registro />} />
        </Route> */}
      </Routes>
    </HashRouter>
  );
}

export default App;
