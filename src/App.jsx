import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import SignUpPage from "./pages/SignUpPage.jsx";
import DashboardPage from "./pages/DashboardPage.jsx";
import useToken from "./hooks/useToken.js";
import Footer from "./components/molecules/Footer.jsx";

function App() {
  const { token } = useToken();

  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cadastro" element={<SignUpPage />} />
          <Route path="/visao-geral" element={<DashboardPage />} />
        </Routes>
        {token && <Footer />}
      </BrowserRouter>
  );
}
export default App;