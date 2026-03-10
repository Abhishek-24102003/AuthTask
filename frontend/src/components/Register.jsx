import { useForm } from 'react-hook-form';
import axios from "axios"
import { apiInstance } from '../Instances/Api.instance';
const Register = ({ setToggle }) => {
  // 1. Initialize the hook
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  // 2. Handle the submission
  const onSubmit = async(data) => {
      console.log("Form Data:", data);
    let res = await apiInstance.post("/auth/register", data);
    if(res)alert("verification link send to email")
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold text-center text-gray-800">Create Account</h2>
        <p className="text-center text-gray-500 text-sm">Join us today! It only takes a minute.</p>
        
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          
          {/* Username Field */}
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">Username</label>
            <input 
              {...register("username", { required: "Username is required", minLength: { value: 3, message: "Min length is 3" } })}
              type="text" 
              placeholder="johndoe123"
              className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:outline-none transition ${errors.username ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-green-500'}`}
            />
            {errors.username && <span className="text-xs text-red-500 mt-1">{errors.username.message}</span>}
          </div>

          {/* Email Field */}
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">Email Address</label>
            <input 
              {...register("email", { 
                required: "Email is required", 
                pattern: { value: /^\S+@\S+$/i, message: "Invalid email format" } 
              })}
              type="email" 
              placeholder="name@company.com"
              className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:outline-none transition ${errors.email ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-green-500'}`}
            />
            {errors.email && <span className="text-xs text-red-500 mt-1">{errors.email.message}</span>}
          </div>

          {/* Password Field */}
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">Password</label>
            <input 
              {...register("password", { required: "Password is required", minLength: { value: 6, message: "Must be at least 6 characters" } })}
              type="password" 
              placeholder="••••••••"
              className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:outline-none transition ${errors.password ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-green-500'}`}
            />
            {errors.password && <span className="text-xs text-red-500 mt-1">{errors.password.message}</span>}
          </div>

          {/* Submit Button */}
          <button 
            type="submit"
            className="w-full py-3 font-semibold text-white bg-green-600 rounded-lg hover:bg-green-700 transition duration-300 shadow-md"
          >
            Send Verification to Email
          </button>
        </form>

        <p className="text-sm text-center text-gray-600">
          Already have an account?{" "}
          <span 
            onClick={() => setToggle((prev) => !prev)} 
            className="text-green-600 font-medium hover:underline cursor-pointer"
          >
            Log in
          </span>
        </p>
      </div>
    </div>
  );
};

export default Register;