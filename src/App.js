import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Home from "./features/home/Home";
import About from "./features/home/About";
import Contact from "./features/home/Contact";
import Service from "./features/home/Service";
import RootLayout from "./ui/RootLayout";
import NoutFound from "./ui/NoutFound";
import Details from "./features/home/Details";




const App = () => {
const router = createBrowserRouter([
  {  path: '/',
  element: <RootLayout />,
  children:[
    {index: true, element: <Home />},
    {path: 'product/detail/:id', element: <Details />},
    {path: 'about', element: <About />},
    {path: 'contact', element: <Contact />},
    {path: 'service', element: <Service />},
    {path: '*', element: <NoutFound />}
  ]}

]);

  return <RouterProvider router = {router}/>
}
export default App