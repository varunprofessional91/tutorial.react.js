import React, {useRef, useState} from 'react';

export default function FormComponent() {

    const [ApiPrint, SetApiPrint] = useState(null);

    const FormReference = useRef(null);

    const LoaderReference = useRef(null);

    const OutputReference = useRef(null);

    const ApiCallingFunction = () => {

        let SubmittedInput = Number(FormReference.current["FormUserInput"].value)

        if (SubmittedInput === 0 || null || "") {
            SetApiPrint("Enter Your Input!")
        } else if ((SubmittedInput < 0) || (SubmittedInput > 200)) {
            SetApiPrint("Out of Range(Type 1-200)!")
        } else {
            LoaderReference.current.style.display = "block"
            OutputReference.current.style.display = "none"
            fetch("https://jsonplaceholder.typicode.com/todos?id=" + SubmittedInput)
                .then((response) => {
                    if (response.ok) {
                        LoaderReference.current.style.display = "none"
                        OutputReference.current.style.display = "block"
                        return response.json();
                    }
                    throw new Error('Something Went Wrong!');
                })
                .then((result) => {
                    SetApiPrint(result[0].title)
                })
                .catch((error) => {
                    SetApiPrint('Server Error! ' + error)
                });
        }
    }
    return (
        <div className={"ComponentContainer"}>
            {/* FormComponent Through Fetch Function */}
            <h1 className={'ComponentTitle'}>Form Component</h1>
            <div>
                <form name={"FormBox"} ref={FormReference} onSubmit={(e) => {
                    e.preventDefault()
                }}>
                    <input className={"FormInputBox"} type={"number"} name={"FormUserInput"} placeholder={"Type 1-200"}
                           autoComplete={"off"} autoFocus/>
                    <button className={"FormSubmitButton"} onClick={ApiCallingFunction}>GetApiData</button>
                </form>
                <br/>
                <div ref={LoaderReference} className={"OutputPrint"}></div>
                <h1 ref={OutputReference}>{ApiPrint}</h1>
            </div>
        </div>
    );
}