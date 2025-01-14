import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import Header from "./Header";
import Footer from "./Footer";


const ProtectedLayout = ({ isAllowed, isAdminPage=false,  redirectPath = '/' }) => {
    // console.log(isAllowed);
    if(!isAllowed || isAllowed === 'false'){
        return <Navigate to="/" />;
    }
    return <>
        <Header isAllowed={isAllowed} isAdminPage={isAdminPage}/>   
             <Outlet isAllowed={isAllowed}/>
        <Footer />
    </>;
}

export default ProtectedLayout