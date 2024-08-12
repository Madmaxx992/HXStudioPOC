// login.js

import { useState } from 'react';
import Swal from 'sweetalert2';
import { useNavigate } from "react-router-dom";
import backgroundImage from '../assets/images/background.png'; 
import logo from '../assets/images/logo.png'; 

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    if (email === '' || password === '') {
      Swal.fire({
        title: 'Error!',
        text: 'Please fill in both fields.',
        icon: 'error',
        confirmButtonText: 'OK'
      });
      setLoading(false);
      return;
    }

    Swal.fire({
      title: 'Success!',
      text: 'Login successful.',
      icon: 'success',
      confirmButtonText: 'OK'
    });

    setLoading(false);
    // Redirect or handle post-login logic
    navigate('/admin/dashboard');
  };

  return (
    <div
      className="min-h-screen flex flex-col justify-center items-center py-12"
      style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >   
      <div className="w-full max-w-md bg-white rounded-lg shadow-2xl overflow-hidden">
        <div className="flex justify-center mt-12 mb-4">
          <img src={logo} alt="Logo" className="h-12" />
        </div>
        <p className="text-1xl font-bold text-black text-center">Login into Your Account</p>
        <form onSubmit={handleSubmit} className="px-16 py-6 space-y-6"> 
            <div>
                <label
                    htmlFor="email"
                    className="text-sm font-medium text-gray-700 block"
                >
                    Email ID*
                </label>
                <input
                    type="email"
                    id="email"
                    className="mt-1 p-3 w-full border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500"
                    placeholder="Email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </div>

          <div>
            <label
              htmlFor="password"
              className="text-sm font-medium text-gray-700 block"
            >
              Password*
            </label>
            <input
              type="password"
              id="password"
              className="mt-1 p-3 w-full border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="flex items-center justify-between mt-4">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="keepSignedIn"
                className="mr-2 leading-tight"
              />
              <label htmlFor="keepSignedIn" className="text-sm text-gray-700">Keep me signed in</label>
            </div>
            <a href="#" className="text-sm text-blue-700 hover:text-blue-900">Forgot Password?</a> {/* Changed link color to dark blue */}
          </div>

          <button
            type="submit"
            className={`w-full flex justify-center py-3 px-4 rounded-md shadow-sm text-sm font-medium text-white ${
              loading
                ? "bg-purple-400"
                : "bg-purple-600 hover:bg-purple-700"
            } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500`}
            disabled={loading}
          >
            {loading ? "Login ..." : "Login"}
          </button>

          {errorMsg && (
            <div className="text-center text-red-500 bg-red-100 rounded-lg p-2">
              {errorMsg}
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Login;