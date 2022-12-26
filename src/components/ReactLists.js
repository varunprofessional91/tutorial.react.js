import {useState} from "react";

const Car = (props) => {
    return <li>I'm a {props.brand}</li>
}

export default function ReactLists() {

    let [styleElem] = useState({
        "color": "red",
        "backgroundColor": "yellow"
    });

    const carsList = ['Ford', 'BMW', 'Honda']

    const numbersList = [1, 2, 3, 4, 5, 6, 7, 8, 9]

    return (
        <div className={"ComponentContainer"}>
            <h1 className={'ComponentTitle'}>ReactLists Component</h1><br/>
            <div>
                <ol style={styleElem}>
                    {carsList.map( // calling a variable through map method
                        function (carFuncArgument) {
                            return (<Car key={carFuncArgument} brand={carFuncArgument}/>)
                        })
                    }
                </ol>
                <ol>
                    {
                        numbersList.map((mapValue) => {
                                return (<li key={mapValue}>{mapValue * 7}</li>)
                            }
                        )
                    }
                </ol>
            </div>
        </div>
    )
}