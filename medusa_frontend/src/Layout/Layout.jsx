import { Outlet } from 'react-router-dom'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'

import loginIcon from "../assets/loginIcon.png";
import checkoutIcon from "../assets/checkoutIcon.png";


export const Layout = () => {
    const links = [
        {name: "Loginpage", link: "Loginpage", icon: loginIcon},
       
    ];


    const frontpageLink = { link: "/", name: "Frontpage" };

    return (
        <>
            <Navbar frontpageLink={frontpageLink} links={links} />
            <Header />
            <Outlet /> 
            <Footer />
        </>
    );
}
