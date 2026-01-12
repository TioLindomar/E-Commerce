import { HashRouter, Routes, Route } from "react-router-dom";
// import ClientLayout from './layouts/ClientLayout';
import AuthLayout from "./layouts/AuthLayout";
// import Home from './pages/client/Home';
import Login from "./pages/auth/Login/Login";
import "./App.css";

function App() {
  return (
    <HashRouter>
      <Routes>
        {/* Voltar para ClientLayout */}
        <Route element={<AuthLayout />}>
          <Route path="/" element={<Login />} />
        </Route>

        {/* <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
        </Route> */}
      </Routes>
    </HashRouter>
  );
}

export default App;
