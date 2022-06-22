function App(){
  const [todos, setTodos] = React.useState([
    {
      text: 'homework',
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
  const removeTodo = index => {
    let temp = [...todos];    
    temp.splice(index, 1);
    setTodos(temp);
  }

  return(
      <div className="app">
        <div className="todo-list">
 
            {todos.map((todo, i) => 
              <Todo index={i} key={i} todo={todo} remove={removeTodo}/>
            )}
            <TodoForm addTodo={addTodo} />
          
        </div>
      </div>
  );
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
