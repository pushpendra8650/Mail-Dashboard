import { useState } from "react";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const [user, setUser] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/login", user);
      alert(response.data.message);
      navigate("/Dashboard");
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-content bg-gray-500">
      <form
        onSubmit={handleLogin}
        className="bg-white/20 backdrop-blur-md p-8 rounded-lg shadow-xl w-96 text-white border border-white/30"
      >
        <h2 className="text-2xl font-bold text-center mb-6">Welcome Back</h2>
        {error && <p className="text-red-400 text-sm mb-2">{error}</p>}
        <Input
          type="email"
          placeholder="Email"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          required
          className="mt-3 bg-white/20 text-white border-white/30 focus:ring-white"
        />
        <Input
          type="password"
          placeholder="Password"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          required
          className="mt-3 bg-white/20 text-white border-white/30 focus:ring-white"
        />
        <Button type="submit" className="mt-6 bg-white text-pink-600 hover:bg-gray-200 w-full">
          Login
        </Button>

        <p className="text-center text-sm mt-4">
          Don't have an account?{" "}
          <Link to="/signup" className="text-white underline hover:text-gray-300">
            Sign up
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
