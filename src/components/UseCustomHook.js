import {useState} from "react";
import UseCustomHookSupportFile_useTitleCounter from "./UseCustomHookSupportFile_toggleCase";

function UseCustomHook() {

    const [Count, SetCount] = useState(0);

    UseCustomHookSupportFile_useTitleCounter(Count) // created a Custom hook for document title

    return (
        <div className={"ComponentContainer"}>
            <h1 className={'ComponentTitle'}>UseCustom Hook</h1><br/>
            <div>
                <button className={'FormSubmitButton'} onClick={() => SetCount(Count + 1)}>TitleHitsCounter</button>
            </div>
            <br/>
            <h3>Document Title Counter-: {Count}</h3>
        </div>
    );
}

export default UseCustomHook;