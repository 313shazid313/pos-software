import { useState } from "react"
import { useLoginUserMutation } from '../../redux/auth/authApi';
import { useDispatch } from 'react-redux';
import { setToken } from '../../redux/auth/authSlice';

const Login = () => {
  const [message, setMessage] = useState('');
  const [loginUser, { isLoading, error }] = useLoginUserMutation();
  const [user, setUser] = useState({
    username: "",
    password: ""
  })

  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await loginUser(user).unwrap();
      console.log(response);
      const { token } = response;
      // console.log(token);
      dispatch(setToken({ token }));
      location.reload();
      alert("Login successful!");

    } catch (error) {
      alert("Invalid Username or Password")
    }
  }

  return (
<form className="max-w-sm mx-auto pt-36 px-6" onSubmit={handleSubmit}>
  {/* Username Input */}
  <div className="mb-6">
    <label
      htmlFor="username"
      className="block text-base font-semibold text-gray-800 dark:text-gray-200 mb-2"
    >
      Your Username
    </label>
    <input
      onChange={handleInputChange}
      value={user.username}
      name="username"
      type="text"
      id="username"
      className="bg-white border border-gray-300 text-gray-800 text-base rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-100 dark:focus:ring-blue-500 dark:focus:border-blue-500 transition duration-150 ease-in-out"
      placeholder="Enter your username"
      required
    />
  </div>

  {/* Password Input */}
  <div className="mb-6">
    <label
      htmlFor="password"
      className="block text-base font-semibold text-gray-800 dark:text-gray-200 mb-2"
    >
      Your Password
    </label>
    <input
      onChange={handleInputChange}
      value={user.password}
      name="password"
      type="password"
      autoComplete="on"
      id="password"
      className="bg-white border border-gray-300 text-gray-800 text-base rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-100 dark:focus:ring-blue-500 dark:focus:border-blue-500 transition duration-150 ease-in-out"
      placeholder="Enter your password"
      required
    />
  </div>

  {/* Submit Button */}
  <button
    type="submit"
    className="w-full py-3 px-4 bg-blue-600 text-white font-semibold text-base rounded-md shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-400 transition duration-150 ease-in-out"
  >
    Submit
  </button>
</form>

  )
}

export default Login

