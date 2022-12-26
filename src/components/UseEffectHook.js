import {useState, useEffect} from "react";

const UseEffectCheckFunction = (count) => {
    return (`UseEffectChecked: ${count}`)
}

export default function UseEffectHook() {

    const [count, setCount] = useState(0);

    useEffect(() => { // only run when state value will change
        UseEffectCheckFunction(count)
    }, [count]);

    return (
        <div className={"ComponentContainer"}>
            <h1 className={'ComponentTitle'}>UseEffect Hook</h1><br/>
            <button className={'FormSubmitButton'} onClick={() => {
                setCount((c) => c + 1)
            }}>Increment
            </button>
            <div>
                <div>Used useEffect: {count}</div>
            </div>
        </div>
    );
}


