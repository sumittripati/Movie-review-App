import Header from "./Header"
import Footer from "./Footer"
import { Outlet  } from "react-router-dom";
import { useNavigation } from "react-router-dom";
import Loding from "./Loding";
const Applayout = () => {

   let navigater = useNavigation()
   console.log(navigater)

   if (navigater.state === "loding") {
    // return <h1>Loding...</h1>
    return <Loding/>
   }

  return (
    <>
      <Header/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default Applayout
