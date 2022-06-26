import React, {useState} from "react";
import Navbar from '../navbar/Narbar'
import Footer from '../footer/Footer'
import "@fontsource/poppins";
import {Toaster} from "react-hot-toast";

interface MainLayoutProps {
  [key: string]: any;
}

const MainLayout: React.FunctionComponent<MainLayoutProps> = ({children}) => {
  // const [user, setUser] = useState();

  // @ts-ignore
  // const handleUserInfoChange = (userData) => {
  //   setUser(userData);
  // }

  // @ts-ignore
  return (
    <>
      <Navbar/>
      {children}
      <Toaster position="bottom-right"/>
      <Footer/>
    </>
  )

}

export default MainLayout;