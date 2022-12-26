import './App.css';
import ModuleExport, {Ar, Br, Cr} from "./components/ModuleExport";
import {Route, BrowserRouter, Routes} from 'react-router-dom';
import PropTypesComponent from "./components/PropTypesComponent";
import ClassComponents from "./components/ClassComponent";
import EventsComponent from "./components/EventsComponent";
import StyleComponent from "./components/StyleComponent";
import ConditionalComponent from "./components/ConditionalComponent";
import ReactLists from "./components/ReactLists";
import UseEffectHook from "./components/UseEffectHook";
import Layout from "./components/dir/Layout";
import MemoComponent from "./components/MemoComponent";
import {UseContextHook} from "./components/UseContextHook"
import Temporary from "./components/Temporary";
import UseRefHook from "./components/UseRefHook";
import UseReducerHook from "./components/UseReducerHook";
import UseCallBackHook from "./components/UseCallBackHook";
import UseMemoHook from "./components/UseMemoHook";
import UseCustomHook from "./components/UseCustomHook";
import FormComponent from "./components/FormComponent";

export default function App() {
    console.log('ReactApp Rendered')
    return (
        <div className="mainApp">
            {/*Routing Function*/}
            <BrowserRouter>
                <Layout/>
                <div className={"bodyContainer"}>
                    <div className={"boxContainer"}>
                        <Routes>
                            {/*Module Exporting / Module Name Exporting*/}
                            <Route exact path={'/'} element={
                                <div className={"ComponentContainer"}>
                                    <h1 className={'ComponentTitle'}>Module Import Component</h1><br/>
                                    <div>
                                        <div>{ModuleExport}</div>
                                        <div>{Ar}</div>
                                        <div>{Br}</div>
                                        <div>{Cr}</div>
                                    </div>
                                </div>
                            }/>
                            {/*/!*Calling a Function Component With Props*!/*/}
                            <Route exact path="proptypes"
                                   element={<PropTypesComponent propsText1={"'Varun Kumar'"} propsText2={252}/>}/>
                            {/*/!*Calling a Class Component*!/*/}
                            <Route exact path="classcomponent"
                                   element={<ClassComponents ClassProps={" 'Class Component Called' "}/>}/>
                            {/*/!*Calling a FunctionComponents Props With Hooks*!/*/}
                            <Route exact path="api" element={<EventsComponent headingRequest={"Api Request"}/>}/>
                            {/*/!*Calling a StyleFunctionalityByUseState With Css Styles*!/*/}
                            <Route exact path={'stylecomponent'} element={<StyleComponent/>}/>
                            {/*/!*Conditional Statement Function in Console Log Also*!/*/}
                            <Route exact path={'conditionalcomponent'}
                                   element={<ConditionalComponent Condition={false}/>}/>
                            {/*/!* React Lists with Map Method *!/*/}
                            <Route exact path={'reactlists'} element={<ReactLists/>}/>
                            {/*/!* Memoized Function Component *!/*/}
                            <Route exact path={'memocomponent'} element={<MemoComponent/>}/>
                            {/*/!*UseEffect Hook*!/*/}
                            <Route exact path={'useeffect'} element={<UseEffectHook/>}/>
                            {/*/!*UseContext Hook*!/*/}
                            <Route exact path={'contextapi'} element={<UseContextHook/>}/>
                            {/*/!*UseRef Hook*!/*/}
                            <Route exact path={'useref'} element={<UseRefHook/>}/>
                            {/*/!*UseReducer Hook*!/*/}
                            <Route exact path={'usereducer'} element={<UseReducerHook/>}/>
                            {/*/!*UseCallBack Hook*!/*/}
                            <Route exact path={'usecallback'} element={<UseCallBackHook/>}/>
                            {/*/!*UseMemo Hook*!/*/}
                            <Route exact path={'useref'} element={<UseMemoHook/>}/>
                            {/*/!*UseCustom Hook*!/*/}
                            <Route exact path={'usecustom'} element={<UseCustomHook/>}/>
                            {/*/!*Form Component*!/*/}
                            <Route exact path={'formcomponent'} element={<FormComponent/>}/>
                            {/*/!*Temporary File*!/*/}
                            <Route exact path={'temporary'} element={<Temporary isGoal={true}/>}/>
                            {/*/!*UnExpected Address*!/*/}
                            <Route exact path="*" element={<h1>Error !404 No Page Found</h1>}/>
                        </Routes>
                    </div>
                </div>
            </BrowserRouter>
        </div>
    );
}
