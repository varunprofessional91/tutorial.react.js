import {memo} from "react";

const UseCallBackSupportFile = ({todos, addTodo}) => {
    return (
        <div>
            <h2>My Todos</h2>
            {todos.map((todo, index) => {
                return <p key={index}>{todo}</p>;
            })}
            <button className={'FormSubmitButton'} onClick={addTodo}>AddToDo</button>
        </div>
    );
};

export default memo(UseCallBackSupportFile);