import {useState, createContext, useContext} from "react";

const UserContext = createContext(); // created context api for passing values

function Component1() {
    const user = useContext(UserContext); // using context api for receiving values
    return (
        <div>
            <h1>Component 1 Div Hi {user}</h1>
        </div>
    );
}

function Component2() {
    const user = useContext(UserContext);
    return (
        <>
            <h1>Component 2 Div Hi {user}</h1>
            <Component1/>
        </>
    );
}

function Component3() {
    const user = useContext(UserContext);
    return (
        <>
            <h1>Component 3 Div Hi {user}</h1>
            <Component2/>
        </>
    );
}

function UseContextHook() { // using context api for passing var value in one component and receiving in other component too

    const [user] = useState("Paul Demon");

    return (
        <div className={"ComponentContainer"}>
            <h1 className={'ComponentTitle'}>UseContext Hook</h1><br/>
            <div>
                <UserContext.Provider value={user}>
                    <h1>Component 4 Div Hi {user}</h1>
                    <Component3/>
                </UserContext.Provider>
            </div>
        </div>
    );
}

export {UseContextHook, Component1, Component2, Component3}