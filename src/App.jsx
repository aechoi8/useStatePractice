import { useState } from "react";
import toDo from "./data";
import List from "./List";

function App() {
  const [tasks, setTasks] = useState(toDo);
  const handleClick = () => {
    setTasks([]);
  };
  return (
    <main>
      <section>
        <h3 className="header">{tasks.length} things to do today</h3>
        <List tasks={tasks} />
      </section>
      <button type="button" className="btn" onClick={handleClick}>
        clear all
      </button>
    </main>
  );
}

export default App;
