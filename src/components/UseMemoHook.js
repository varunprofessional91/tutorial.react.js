import {useState, useMemo} from "react";

export default function UseMemoHook() {
    const [count, setCount] = useState(0);
    const [multiply, setCountMultiply] = useState(0);

    const multiCountMemo = useMemo(() => { // will only run on the change of state value
        return multiply * 3
    }, [multiply]);

    return (
        <div className={"ComponentContainer"}>
            <h1 className={'ComponentTitle'}>UseMemo Hook</h1><br/>
            <button className={'FormSubmitButton'} onClick={() => {
                setCount(count + 1)
            }}>Counting+
            </button>
            <h3>Counting+ Values: {count}</h3>
            <button className={'FormSubmitButton'} onClick={() => {
                setCountMultiply(multiply + 1)
            }}>Counting*
            </button>
            <h3>Counting* Values-: {multiply}</h3>
            <h2>Multiplied Values-: {multiCountMemo}</h2>
        </div>

    )
}

