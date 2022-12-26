import React, {useReducer} from 'react';

export default function UseReducerHook() { // use reducer will work when action will dispatch a state
    const [state, dispatch] = useReducer((state = 0, action) => {
        if (action.type === "ADD_TODO") {
            return {count: state.count + 1};
        } else if (action.type === "SUBTRACT_TODO") {
            return {count: state.count - 1};
        }
    }, {count: 0});
    return (
        <div className={"ComponentContainer"}>
            <h1 className={'ComponentTitle'}>UseReducer Hook</h1><br/>
            <button className={'FormSubmitButton'} onClick={() => {
                dispatch({type: "ADD_TODO"});
            }}>AdditionState
            </button>
            <br/><h1>Counting: {state.count}</h1>
            <button className={'FormSubmitButton'} onClick={() => {
                dispatch({type: "SUBTRACT_TODO"});
            }}>SubtractState
            </button>

        </div>
    );
}

