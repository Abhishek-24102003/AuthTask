import { useQuery } from "@tanstack/react-query";
import { fetchUser } from "../Apis/fetchUser";

const HomePage = () => {
  let LSD = JSON.parse(localStorage.getItem("user"));
  const { _id } = LSD;
  const { data, isPending } = useQuery({
    queryKey: ["user",_id],
    queryFn:()=> fetchUser(_id),
    staleTime:Infinity
  })
  
  
 return (
  <div className="min-h-screen flex items-center justify-center bg-gray-100">

    {isPending ? (
      <div className="flex flex-col items-center gap-3">
        <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        <p className="text-gray-600 font-medium">Loading user...</p>
      </div>
    ) : (
      <div className="bg-white shadow-lg rounded-2xl p-8 w-87.5 text-center">

        <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-blue-500 flex items-center justify-center text-white text-2xl font-bold">
          {data.name?.charAt(0).toUpperCase()}
        </div>

        <h1 className="text-2xl font-bold text-gray-800 mb-2">
          Welcome {data.name}
        </h1>

        <p className="text-gray-500 text-sm mb-6">
          Email: {data.email}
        </p>

        <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg transition">
          Go to Dashboard
        </button>

      </div>
    )}

  </div>
);
}

export default HomePage