import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import HomePage from "./pages/HomePage.jsx";
import SignUpPage from "./pages/SignUpPage.jsx";
import DashboardPage from "./pages/DashboardPage.jsx";
import useToken from "./hooks/useToken.js";
import Footer from "./components/molecules/Footer.jsx";
import useCategories from "./hooks/useCategories.js";
import ServicePage from "./pages/ServicePage.jsx";
import api from "./services/api.js";

function App() {
  const { putCategories } = useCategories();
  const { token } = useToken();

  useEffect(() => {
    api.getCategories()
      .then(({ data }) => putCategories(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cadastro" element={<SignUpPage />} />
        <Route path="/visao-geral" element={<DashboardPage />} />
        <Route path="/servico/:id" element={<ServicePage />} />
      </Routes>
      {token && <Footer />}
    </BrowserRouter>
  );
}
export default App;