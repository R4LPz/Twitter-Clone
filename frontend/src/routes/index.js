import React from "react";
import AuthRoute from "./AuthRoute";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home";

export default function Router(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" exact element={<Login/>}/>
                <Route path="/register" element={<Register/>}/>
                <Route 
                path="/home" 
                element={
                    <AuthRoute>
                        <Home/>
                    </AuthRoute>
                }/>
            </Routes>   
        </BrowserRouter>
    )
}