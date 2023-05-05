import { Route, Routes, BrowserRouter } from "react-router-dom";
import {
  NoPage,
  Signin,
  Dashboard,
  Realstatemanagement,
  Realestate,
  Realstatedetails,
} from "./pages/index.jsx";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/Signin" element={<Signin />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Realstatemanagement" element={<Realstatemanagement />} />
        <Route path="/Realstatedetails" element={<Realstatedetails />} />
        <Route path="/Realstate" element={<Realestate />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
