import { BrowserRouter, Routes, Route } from "react-router-dom";
// import ClientLayout from './layouts/ClientLayout';
import AuthLayout from "./layouts/AuthLayout";
// import Home from './pages/client/Home';
import Login from "./pages/auth/Login/Login";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Voltar para ClientLayout */}
        <Route element={<AuthLayout />}>
          <Route path="/" element={<Login />} />
        </Route>

        {/* <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
        </Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
