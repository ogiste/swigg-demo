import React from "react";
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';
import "@fontsource/poppins";
import {Toaster} from "react-hot-toast";
import '../../globals.css';

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