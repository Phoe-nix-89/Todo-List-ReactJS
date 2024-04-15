import Todo from "../Todo/Todo";
import Context from "../../Context";
import { useContext, useReducer } from "react";
import todoReducer from "../todoReducer";
import TodoDispatchContext from "../../TodoDispatchContext";
import { act } from "react-dom/test-utils";
function TodoList() {
    const {list} = useContext(Context);
    const {dispatch} = useContext(TodoDispatchContext);
    //const [st,dispatch] = useReducer(todoReducer,list);
    function onFinish(elem,Finished) {
        
        // const v = list.map((t) => {
        //     if(t.id == elem.id){
        //         t.finished = Finished;
                
        //     }
        //     return t;
        // })

        // setList(v);

        dispatch({type : 'check_todo' , payload : {elem : elem , Finished : Finished}})
        
    }

    function Del(elem) {
        
        // const v = list.filter((t) => t.id != elem.id)
        // setList(v);
        
        dispatch({type : 'delete_todo' , payload : {elem : elem}})
    }

    function Edit(elem,data) {
        
        // const v = list.map((t) => {
        //     if(t.id == elem.id){
        //         t.tododata = data;
                
        //     }
        //     return t;
        // })

        // setList(v);
        
        dispatch({type : 'edit_todo' , payload : {elem : elem , data : data}})
    }
    return (
        <div>
            {list.map((elem) => {
                return <Todo  
                todoData={elem.tododata} 
                isFinished={elem.finished} 
                changeFinished={(Finished) => onFinish(elem,Finished)}
                onDelete={() => Del(elem)}
                onEdit={(data) => Edit(elem,data)}/>
            })}
        </div>
    );
}
export default TodoList;