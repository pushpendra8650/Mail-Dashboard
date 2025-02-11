import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Dashboard from "./components/Dashboard";




function App() {
  return (
  
    <Router>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100  ">
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Dashboard" element={<Dashboard />} />
        </Routes>
       
      </div>
    </Router>
  );
}

export default App;
