import propTypes from "prop-types";

PropTypesComponent.propTypes = {
    propsText1: propTypes.string.isRequired, // // defined prop required will show an error on without props
    propsText2: propTypes.number.isRequired // defined prop type number only will show an error on string type prop
};

PropTypesComponent.defaultProps = {
    propsText1: "---Default String Props---",
    propsText2: 43
};

export default function PropTypesComponent(props) {
    return (
        <div className={"ComponentContainer"}>
            <h1 className={'ComponentTitle'}>PropTypes Component</h1>
            <div>
                <h3>Prop Types String-: {props.propsText1}</h3>
                <h3>Prop Types Number-: {props.propsText2}</h3>
            </div>
        </div>
    )
}


