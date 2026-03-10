import { createBrowserRouter, RouterProvider } from "react-router"
import App from "../App"
import HomePage from "../pages/HomePage"
import AuthPage from "../pages/AuthPage"
import ProtectedRoute from "../components/ProtectedRoute"

const AppRouter = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element:<AuthPage/>
        }, {
            path: "/profile",
            element: <ProtectedRoute />,
            children: [
                {
                    index: true,
                    element:<HomePage/>
                }
            ]
      }
    ])
    return <RouterProvider router={router}/>
}

export default AppRouter
