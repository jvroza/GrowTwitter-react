import { RouterProvider } from "react-router";
import { routes } from "./routes.tsx";


export function App () {
  return (
    <RouterProvider router={routes}/>
  )
}
