import { useContext, useState } from "react";
import './AddTodo.css';
import TodoDispatchContext from "../../TodoDispatchContext";
function AddTodo({ update }) {
    const [text,setText] = useState('')
    const {list,dispatch} = useContext(TodoDispatchContext);
    return (
        <div className="div">
            <input className="in" type="text" value={text} placeholder="write" onChange={e => setText(e.target.value)} />
            <button className="btn" 
            onClick={() => dispatch({type : 'add_todo' , payload : {todoText : text}})
            }>Add</button>
        </div>
    );
}
export default AddTodo;