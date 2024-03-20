//App.js file
// import { RouterProvider, createBrowserRouter } from "react-router-dom"
// import Home from "./features/home/Home";
// import About from "./features/home/About";
// import Contact from "./features/home/Contact";
// import Service from "./features/home/Service";
// import RootLayout from "./ui/RootLayout";
// import { Children } from "react";




// const App = () => {
// const router = createBrowserRouter([
//   {  path: '/',
//   element: <RootLayout />,
//   children:[
//     {index: true, element: <Home />},
//     {path: 'about', element: <About />},
//     {path: 'contact', element: <Contact />},
//     {path: 'service', element: <Service />}
//   ]}

// ]);

//   return <RouterProvider router = {router}/>
// }
// export default App



//about file
// const About = () => {
//   return (
//     <div>
//       <h1>About us</h1>
//       <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos fugiat, dolores modi dolore eius sint architecto aut ipsum alias. Quos ex accusantium, aut rem tempora perferendis? Placeat veniam perferendis tempora?</p>
//     </div>
//   )
// }
// export default About



//Contact file
// const Contact = () => {
//   return (
//     <div>
//        <h1>Contact us</h1>
//       <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis perferendis minima, quidem dolor laborum voluptatem fugiat quos illo eligendi ratione.
//       </p>
//     </div>
//   )
// }
// export default Contact


//home page file
// import { NavLink } from "react-router-dom"
// import Header from "../../ui/Header"

// const Home = () => {
//   return (
//     <div>
// {/* <Header /> */}
//       <h1>Home</h1>
//       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, unde labore iusto laudantium recusandae similique magnam sunt deleniti? Ullam, nostrum.</p>
//     </div>
//   )
// }
// export default Home



//footer file


//header file
// import { NavLink } from "react-router-dom"
// const Header = () => {
//   return (
//     <div className="bg-black text-white px-5 flex items-baseline justify-between py-2">
//       <h1>Web logo</h1>
//       <nav className="space-x-10">
//         <NavLink to='/'>Home</NavLink>
//         <NavLink to='/about'>About Us</NavLink>
//         <NavLink to='/contact'>Contact Us</NavLink>
//         <NavLink to='/service'>Service</NavLink>
        
//       </nav>
//     </div>
//   )
// }
// export default Header


//rootlayout page
// import { Outlet } from "react-router"
// import Header from "./Header"

// const RootLayout = () => {
//   return (
//     <div>

//       <Header />
//       <Outlet />
//     </div>
//   )
// }
// export default RootLayout