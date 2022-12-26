import React from "react";

export default class ClassComponent extends React.Component {
    render() {
        return (
            <div className={"ComponentContainer"}>
                {/* Class Component Component */}
                <h1 className={'ComponentTitle'}>Class Component</h1>
                <div>
                    <h1>Hi I'm a Class Components{this.props.ClassProps}</h1>
                </div>
            </div>
        );
    }
}

