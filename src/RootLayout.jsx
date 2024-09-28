import { Outlet } from "react-router-dom"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
function RootLayout() {
  return (
    <div className="main">
    
 <Header/>
<div  style={{minHeight:'100vh'}}>
    <Outlet/>
   </div>
   <Footer/>
    </div>
  )
}

export default RootLayout