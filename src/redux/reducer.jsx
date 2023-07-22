

const init= {
    todos:[],
    Filter:true
}

export const reducerTask=(state=init,{type,payload})=>{
   switch (type) {
    case "ADD":
        return {
...state,
todos: [...state.todos,payload]
        }
    case "EDIT":
        return {
            ...state,
            todos: [...state.todos.map(e=>e.id===payload.id?payload:e)]
        }
    case "DONETASK":
        return {
            ...state,
            todos: [...state.todos.map(e=>e.id===payload?{...e,isDone:!e.isDone}:e)]
        }

    case "FILTER":
        return {
            ...state,
            Filter: payload==="All"?state.todos.map(el=>el):payload==="Done"?state.todos.filter(el=>el.isDone===true):state.todos.filter(el=>el.isDone===false)
        }    
    default:
        return state
   }

}