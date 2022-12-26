function ConditionFalse() {
    return (<h1>Alert Condition False</h1>);
}

function ConditionTrue() {
    return (<h1>Alert Condition True</h1>);
}

export default function ConditionalComponent(props) {
    function Goal() {
        const isGoal = props.Condition;
        if (isGoal) {
            return <ConditionTrue/>;
        }
        return <ConditionFalse/>;
    }

    return (
        <div className={"ComponentContainer"}>
            <h1 className={'ComponentTitle'}>Conditional Component</h1>
            <div>
                <Goal/>
            </div>
        </div>
    )
}

