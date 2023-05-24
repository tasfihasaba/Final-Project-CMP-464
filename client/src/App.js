function App() {
  return (
    <div className="App">
        <h1>Welcome, Tasfiha Saba!</h1>
        <h4>Your Todos</h4>

        <div className="todos">
          <div className="todo">
            <div className="checkbox"></div>

            <div className="text">Finish CMP 464 project</div>

            <div className="delete-todo">x</div>
          </div>

          <div className="todo is-complete">
          <div className="todo">
            <div className="checkbox"></div>

            <div className="text">Finish Math HW</div>

            <div className="delete-todo">x</div>
          </div>


        </div> 
        </div>
        </div>
   
  );
}

export default App;
