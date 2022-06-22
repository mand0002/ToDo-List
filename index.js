function App(){
  const [todos, setTodos] = React.useState([
    {
      text: 'do homework',
      isCompleted: false,
    },
    {
      text: 'clean boat',
      isCompleted: false,
    },
    {
      text: 'paint trim',
      isCompleted: false,
    },
    {
      text: 'find contractor for windows',
      isCompleted: false,
    }        
  ]);

  const addTodo = text => {
    const newTodos = [...todos, {text, isCompleted:false}];
    setTodos(newTodos);
  }
  const removeTodo = e => {
    var index = Number(e.target.id);
    let temp = [...todos];    
    temp.splice(index, 1);
    setTodos(temp);
  }

  return(
    <>
      {todos.map((todo, i) => (
        <div className="todo" key={i} id={i} onClick={removeTodo}>{todo.text}</div>
      ))}
      <TodoForm addTodo={addTodo} />
    </>
  );
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
