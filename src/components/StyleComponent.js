import {useState} from "react";

export default function StyleComponent() {

    let [myStyle, setMyStyle] = useState({ // default textarea style
        backgroundColor: "yellow",
        color: "red"
    });

    let [btnText, setBtnText] = useState('TextRed');

    const BtnFunction = () => {  // onclick text area style will be changed
        if (myStyle.color === 'yellow') {
            setMyStyle({
                color: 'red',
                backgroundColor: 'yellow'
            })
            btnText = setBtnText("TextRed");
        } else {
            setMyStyle({
                color: 'yellow',
                backgroundColor: 'red'
            });
            btnText = setBtnText('TextYellow');
        }
    }

    return (
        <div className={"ComponentContainer"}>
            <h1 className={'ComponentTitle'}>Style Component</h1><br/>
            <div>
                <textarea name={"TextAreaText"} style={myStyle} defaultValue={"  I'm Text Area Component Element"}/>
                <br/><br/>
                <button className={"btnClass"} onClick={BtnFunction}>{btnText}</button>
                <br/><br/>
            </div>
        </div>
    )
}

