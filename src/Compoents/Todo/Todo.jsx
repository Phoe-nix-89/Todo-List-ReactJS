import { useState } from "react";
import './Todo.css';

function Todo({ todoData,isFinished,changeFinished,onDelete,onEdit }) {
    const [edit,setedit] = useState(false);
    const [text,settext] = useState('');
    return (
        <div className="odiv">
            <div className="odiv1">
                <input className="oin" type="checkbox" checked={isFinished}
                onChange={(e) => changeFinished(e.target.checked)} />
                {(edit) ? <input className="oin2" type="text" value={todoData}  onChange={(e) => onEdit(e.target.value)}/> : <div className="sp">{todoData}</div>}
            </div>
            <div className="odiv2">
                <button className="obtn1" onClick={() => {
                    (edit) ? setedit(false) : setedit(true);
                }}>{(edit) ? 'Save': 'Edit'}</button>
                <button className="obtn2" onClick={onDelete}>Delete</button>
            </div>
        </div>
    );
}
export default Todo;