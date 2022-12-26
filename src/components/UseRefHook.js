import React, {useRef, useState} from 'react';

export default function UseRefHook() {

    const userInputRef = useRef(null);
    const [userInput, setInput] = useState(null)

    const OnClickUseRefFunc = () => { // useRef will detect and current style or state or value of a element
        userInputRef.current.style.color = "red";
        setInput(userInputRef.current.value);
    }

    return (
        <div className={"ComponentContainer"}>
            <h1 className={'ComponentTitle'}>UseRef Hook</h1><br/>
            <label>UseRef Input:</label>
            <input type={"text"} ref={userInputRef} placeholder={"UseRef Hook"}/>
            <button className={'FormSubmitButton'} onClick={OnClickUseRefFunc}>useRef</button>
            <h2>{userInput}</h2>
        </div>
    );
}