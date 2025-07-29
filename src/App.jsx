import { Routes, Route } from "react-router-dom";
import AppRoutes from "./approutes/AppRoutes";

function App() {

  return (
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
  )
}

export default App;
