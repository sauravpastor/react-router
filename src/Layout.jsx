import { Link, Outlet } from "react-router-dom";

const  Layout=()=>{
    return(
        <>
        <Link to="home"> Home</Link>
        <Link to="about"> About</Link>
        <Link to="service"> our service</Link>
        <Link to="contact"> Contact</Link>

        <hr size="4" color="blue"/>

        <Outlet/>
        <hr size="4" color="blue" />

        www.mycompany.com all right reserved. 2024
        </>
    )
}
export default Layout;