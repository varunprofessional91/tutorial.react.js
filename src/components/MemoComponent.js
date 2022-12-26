import {memo, useState} from "react";

function MemoComponent() {

    const [count, setCount] = useState(0);

    const increment = () => {
        setCount((c) => c + 1);
    };

    return (
        <div className={"ComponentContainer"}>
            <h1 className={'ComponentTitle'}>MemoFunction Component</h1><br/>
            <div>
                <button className={'FormSubmitButton'} onClick={increment}>Memoized Function</button>
            </div>
            <h3>Count: {count}</h3>
        </div>
    );
}

export default memo(MemoComponent); // component will not get called until props or state value get changed