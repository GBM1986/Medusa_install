import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Layout } from "./Layout/Layout";
import { Frontpage } from "./pages/Frontpage";
import { Checkoutpage } from "./pages/Checkoutpage";
import { Loginpage } from "./pages/Loginpage";
import { Productspage } from "./pages/Productspage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Frontpage />} />
          <Route path="Checkoutpage" element={<Checkoutpage />} />
          <Route path="Loginpage" element={<Loginpage />} />
          <Route path="Productspage" element={<Productspage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
