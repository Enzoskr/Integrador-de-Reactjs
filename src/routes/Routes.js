import { Routes as ReactDomRoutes, Route } from "react-router-dom";

import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Checkout from "../pages/Checkout/Checkout";
import Register from "../pages/Register/Register";
import ProtectedRoute from "../components/ProtectedRoute/ProtectedRoute";
import Orders from "../pages/Ordenes/Ordenes";
import Resumen from "../pages/Resumen/Resumen";
import Felicitaciones from "../pages/Felicitaciones/Felicitaciones";
import Issues from "../pages/Issues/Issues";
import Validate from "../pages/Validate/Validate";

function Routes() {
  return (
    <ReactDomRoutes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/Ordenes" element={<Orders />} />
      <Route path="/Felicitaciones" element={<Felicitaciones />} />
      <Route path="/resumen/:orderId" element={<Resumen />} />
      <Route path="/issues" element={<Issues />} />
      <Route path="/validate" element={<Validate />} />

      <Route
        path="/Checkout"
        element={
          <ProtectedRoute redirectTo="/Register">
            <Checkout />
          </ProtectedRoute>
        }
      />
    </ReactDomRoutes>
  );
}

export default Routes;
