import { createBrowserRouter,RouterProvider } from "react-router-dom";
import RootLayout from "./RootLayout";
import HeroSection from './components/Hero-Section/HeroSection'
import AboutUs from "./components/About-us/AboutUs";
//import Total_Courses from "./components/Total_Coruses/Total_Courses";
import Features from "./components/Feature-section/Features";
import Newsletter from './components/Newsletter/Newsletter'
//import LoginSign from "./components/loginSignUp/LoginSign";
import Syllabus from "./components/syllabus/Syllabus";
function App() {
  let browserRouter=createBrowserRouter([
    {
      path:'/',
      element:<RootLayout/>,
        children:[
            {
                path:'/',
                element:<HeroSection/>
            },
            {
              path:'about',
              element:<AboutUs/>
          },
          {
            path:'courses',
            element:<Syllabus/>
        },
        {
          path:'pages',
          element:<Features/>
      },
      {
        path:'blog',
        element:<Newsletter/>
    }
            
        ]
    }
  ])
 return(
  <div className="appmain">
         <RouterProvider router={browserRouter}/>
       </div>
 )
}
export default App;
