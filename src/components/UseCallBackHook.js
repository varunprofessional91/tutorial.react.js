import {memo, useCallback, useState} from "react";
import UseCallBackHookSupportFile from "./UseCallBackHookSupportFile";

const UseCallBackHook = () => {
    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState([]);

    const increment = () => {
        setCount((c) => c + 1);
    };
    const addTodo = useCallback(() => { // function will only run when dependency state will change
        setTodos((t) => [...t, "New Todo"]);
    }, []);

    return (
        <div className={"ComponentContainer"}>
            <h1 className={'ComponentTitle'}>UseCallBack Hook</h1><br/>
            <div>
                <UseCallBackHookSupportFile todos={todos} addTodo={addTodo}/>
                <br/>
                <hr/>
                <br/>
                <div>
                    <button className={'FormSubmitButton'} onClick={increment}>UseCallBackCounter</button>
                    <br/>
                    <div>UseCallBackFunctionCount: {count}</div>
                </div>
            </div>
        </div>
    );
};

export default memo(UseCallBackHook);