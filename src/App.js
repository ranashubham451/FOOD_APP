 import React, {lazy,Suspense, useEffect, useState} from "react"
import ReacTDOM, { createRoot } from "react-dom/client"
import Header from "./components/Header"
import Body  from "./components/Body"
import { createBrowserRouter ,RouterProvider,Outlet} from "react-router-dom"
import About from "./components/About";
import Contact from "./components/Contact"
import Eroor from "./components/Eroor"
import RestroMenu from "./components/RestroMenu"
import UserContext from "../src/utils/UserContext";
import { Provider } from "react-redux"
import appStore from "./utils/appStore"
import Cart from "./components/Cart"

// import Grocery from "./components/Grocery"

/**
 * Header
 * --Logo
 * -- NAv Items
 * Body
 * -- Search
 * -- Card Container
 * -- Restro Card
 * footer
 * -- Copy Right
 * -- Links
 * -- Address
 *-- Contact 
 */


const Grocery=lazy(()=>  import("./components/Grocery"));


const AppLayout = () => {

   // Authentication

   const [userName,setUserName]=useState();

   useEffect(()=>{
      const data ={
         name:"Shubham Rana"
      }
     setUserName(data.name)
   },[])
   return (
      <Provider store={appStore}>
      <UserContext.Provider value={{loggedInUser:userName,setUserName}}>
      
      <div className="app">
         <Header />
         <Outlet/> 
      </div>
         </UserContext.Provider>
         </Provider>
   )
};
const appRouter=createBrowserRouter([{
   path:"/",
   element:<AppLayout/>,
   children:[
      {
         path:"/",
         element:<Body/>

      }
     ,{
  path:"/about",
  element:<About/>
},
{
   path:"/contact",
   element:<Contact/>
},
{
   path:"/cart",
   element:<Cart/>
},
{
path:"/grocery",
element:<Suspense fallback={<h1>Loading...</h1>}><Grocery/></Suspense>
},
{
   path:"/restaurants/:resId",
   element:<RestroMenu/>                         
}
   ],
   errorElement:<Eroor/>,
}

]);
const root = createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/> )