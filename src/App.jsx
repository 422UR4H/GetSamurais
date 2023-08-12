import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import SignUpPage from "./pages/SignUpPage.jsx";
import DashboardPage from "./pages/DashboardPage.jsx";
import { TokenProvider } from "./contexts/TokenContext.jsx";

function App() {
  return (
    <TokenProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cadastro" element={<SignUpPage />} />
          <Route path="/visao-geral" element={<DashboardPage />} />
        </Routes>
      </BrowserRouter>
    </TokenProvider>
  );
}
export default App;