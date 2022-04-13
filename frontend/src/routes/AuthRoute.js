import React from "react";
import { Navigate } from "react-router-dom";

export default function AuthRoute({children}){
    

    if(!localStorage.getItem("SESSION_TOKEN")){
        return <Navigate to="/" replace />
    }
        
    return children;
}