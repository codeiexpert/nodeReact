import Header from "./Header";
import Footer from "./Footer";
import { Navigate, Outlet } from "react-router-dom";

const Layout = ({isAllowed, isAdminPage=false, redirectPath="/dashboard"}) => {
    
    return <>
        <Header isAllowed={isAllowed} isAdminPage={isAdminPage}/>   
                <Outlet isAllowed={isAllowed}/>
        <Footer />
    </>

}

export default Layout