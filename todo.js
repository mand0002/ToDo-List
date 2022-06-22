function Todo({todo,index,remove}){
    function handle(){
        remove(index);
    }
    if (todo.text === 'homework'){
        return <div className="priority" onClick={handle}>{todo.text}</div>;
    }
    return <div className="todo" onClick={handle}>{todo.text}</div>;
}