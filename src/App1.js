import './App.css';
import MenuList from "./components/menuList";
import PropTypesComponent from "./components/PropTypesComponent";
import ClassComponents from "./components/ClassComponent";
import EventsComponent from "./components/EventsComponent";
import ModuleExport, {Ar, Br, Cr} from "./components/ModuleExport";
import StyleComponent from "./components/StyleComponent";
import ConditionalComponent from "./components/ConditionalComponent";
import ReactLists from "./components/ReactLists";

import React from 'react';
import { Component } from "react";


import Home from "./components/dir/Home";
import Blogs from "./components/dir/Blogs";
import Contact from "./components/dir/Contact";
import AboutUs from "./components/dir/AboutUs";
import Index from "./components/dir/Index";
import FormComponent from "./components/FormComponent";



import {Router, Route, BrowserRouter, Routes} from 'react-router-dom';
import Layout from "./components/dir/Layout";
import NoPage from "./components/dir/NoPage";

export default function App() {
    return (
        <div className="mainApp">



            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path="blogs" element={<Blogs />} />
                        <Route path="contact" element={<Contact />} />
                        <Route path="*" element={<NoPage />} />
                    </Route>
                </Routes>
            </BrowserRouter>



            {/*<MenuList/>*/}
            {/*<div className={"bodyContainer"}>*/}
            
            {/*    /!*Module Exporting / Module Name Exporting*!/*/}
            {/*    <div className={"boxContainer"}>*/}
            {/*        <div>{ModuleExport}</div>*/}
            {/*        <div>{Ar}</div>*/}
            {/*        <div>{Br}</div>*/}
            {/*        <div>{Cr}</div>*/}
            {/*    </div>*/}
            
            {/*    /!*Calling a Function Component With Props*!/*/}
            {/*    <div className={"boxContainer"}>*/}
            {/*        <FunctionComponentWithPropTypes propsText1={"***FuncCompCall***"} propsText2={2}/>*/}
            {/*        <FunctionComponentWithPropTypes/>*/}
            {/*        <FunctionComponentWithPropTypes/>*/}
            {/*    </div>*/}
            
            {/*    /!*Calling a Class Component*!/*/}
            {/*    <div className={"boxContainer"}>*/}
            {/*        <ClassComponents ClassProps={"***ClassCompCall***"}/>*/}
            {/*    </div>*/}
            
            {/*    /!*Calling a FunctionComponents Props With Hooks*!/*/}
            {/*    <div className={"boxContainer"}>*/}
            {/*        <FormPage headingRequest={"Api Request"}/>*/}
            {/*    </div>*/}
            
            {/*    /!*Calling a StyleFunctionalityByUseState With Css Styles*!/*/}
            {/*    <div className={"boxContainer"}>*/}
            {/*        <StyleFunctionalityByUseState/>*/}
            {/*    </div>*/}
            
            {/*    /!*Alert Function in Console Log Also*!/*/}
            {/*    <div className={"boxContainer"}>*/}
            {/*        <AlertMessage isGoal={false}/>*/}
            {/*    </div>*/}
            
            {/*    /!*Alert Function in Console Log Also*!/*/}
            {/*    <div className={"boxContainer"}>*/}
            {/*        <ReactLists/>*/}
            {/*    </div>*/}
            
            {/*    /!*Api Calling Function*!/*/}
            {/*    /!*<div className={"boxContainer"}>*!/*/}
            {/*    /!*    <FormComponent/>*!/*/}
            {/*    /!*</div>*!/*/}
            
            {/*    /!*Alert Function in Console Log Also*!/*/}
            {/*    <div className={"boxContainer"}>*/}
            {/*        <Home />*/}
            {/*    </div>*/}
            
            {/*</div>*/}
        </div>
    );
}

console.log('Script Ended Successfully');
