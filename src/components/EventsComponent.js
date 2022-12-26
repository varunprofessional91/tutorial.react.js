import {useState} from "react";

export default function EventsComponent() {

    let [text, setText] = useState('');

    //Arrow Function Used
    const valueChangeFunction = (event) => {
        setText(event.target.value)
    }

    //Arrow Function Used
    const onBtnClick1 = () => {
        text = text.toUpperCase();
        setText(text);
    }

    //Arrow Function Used
    const onBtnClick2 = () => {
        text = text.toLowerCase();
        setText(text);
    }

    return (
        <div className={"ComponentContainer"}>
            {/* FormComponent Through Fetch Function */}
            <h1 className={'ComponentTitle'}>Events Component Upper & Lower Case</h1>
            <div>
                <div>
                    <input type={text} onChange={valueChangeFunction} placeholder={"Input Text Field"}/>
                </div>
                <button className={"btnClass"} onClick={onBtnClick1}>ToUpper</button>
                <br/><br/>
                <button className={"btnClass"} onClick={onBtnClick2}>ToLower</button>
                <div>
                    <br/>
                    Alphabet Counts-: {text.length}
                    <br/>
                    Words Count-: {text.split(' ').length}
                    <br/>
                    UpperCase & LowerCase-: {text}
                    <br/>
                    <br/>
                </div>
            </div>
        </div>

    )
}


