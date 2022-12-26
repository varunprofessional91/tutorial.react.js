import {Link} from "react-router-dom";

export default function Layout() {
    return (
        <div>
            <nav className={"headerClass"}>
                <ul className={"menuButtonsList"}>
                    <li>
                        <Link to="/" className={"headerButtons"}>Module Import</Link>
                    </li>
                    <li>
                        <Link to="proptypes" className={"headerButtons"}>PropTypes</Link>
                    </li>
                    <li>
                        <Link to="classcomponent" className={"headerButtons"}>Class</Link>
                    </li>
                    <li>
                        <Link to="api" className={"headerButtons"}>Api</Link>
                    </li>
                    <li>
                        <Link to="stylecomponent" className={"headerButtons"}>Styling</Link>
                    </li>
                    <li>
                        <Link to="conditionalcomponent" className={"headerButtons"}>Conditional</Link>
                    </li>
                    <li>
                        <Link to="reactlists" className={"headerButtons"}>ReactLists</Link>
                    </li>
                    <li>
                        <Link to="memocomponent" className={"headerButtons"}>MemoFunction</Link>
                    </li>
                    <li>
                        <Link to="useeffect" className={"headerButtons"}>UseEffect</Link>
                    </li>
                    <li>
                        <Link to="contextapi" className={"headerButtons"}>ContextApi</Link>
                    </li>
                    <li>
                        <Link to="useref" className={"headerButtons"}>UseRef</Link>
                    </li>
                    <li>
                        <Link to="usecustom" className={"headerButtons"}>UseCustom</Link>
                    </li>
                    <li>
                        <Link to="formcomponent" className={"headerButtons"}>FormEvents</Link>
                    </li>
                    <li>
                        <Link to="temporary" className={"headerButtons"}>Temporary</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
};

