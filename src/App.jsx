import "./App.css";
import ProductivityDashboard from "./components/ProductivityDashboard";
import SearchPerson from "./components/Search";
import SignIn from "./components/SignIn";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/login" element={<SignIn />} />
          <Route path="/dashboard" element={<ProductivityDashboard />} />
          <Route path="/user" element={<SearchPerson />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
