import React, {useState} from "react";
import Navbar from '../navbar/Narbar'
import Footer from '../footer/Footer'
import "@fontsource/poppins";
import {Toaster} from "react-hot-toast";
import { UserAuthProvider } from "../../context/UserAuth";

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
    <UserAuthProvider>
    <>
      <Navbar/>
      {children}
      <Toaster position="bottom-right"/>
      <Footer/>
    </>
    </UserAuthProvider>
  )

}

export default MainLayout;