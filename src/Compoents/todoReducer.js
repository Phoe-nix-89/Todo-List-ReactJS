
function todoReducer(state,action) {
    if(action.type == 'check_todo'){
        let elem = action.payload.elem;
        let Finished = action.payload.Finished;
        const v = state.map((t) => {
            if(t.id == elem.id){
                t.finished = Finished;
                
            }
            return t;
        })

        return v;
    }
    else if(action.type == 'add_todo'){
        let todoText = action.payload.todoText;
        return [...state,{id : state.length+1 , tododata : todoText , finished : false}]
    }
    else if(action.type == 'edit_todo'){
        let elem = action.payload.elem;
        let data = action.payload.data;
        const v = state.map((t) => {
            if(t.id == elem.id){
                t.tododata = data;
                
            }
            return t;
        })

        return v;
    }
    else if(action.type == 'delete_todo'){
        let elem = action.payload.elem;
        const v = state.filter((t) => t.id != elem.id)
        return v;
    }
}

export default todoReducer;