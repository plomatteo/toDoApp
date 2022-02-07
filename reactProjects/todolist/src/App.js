import List from "./List";
import data from "./data";
import { useState } from "react";
import FormTask from "./form";


function App() {
  const [task, setTask] = useState(data);



  const insertItem = (x) => {

    const newTask = [x, ...task]
    setTask(newTask);
  };

  const removeItem = (id) => {
    setTask((oldValue) => oldValue.filter((value) => value.id !== id));
  };

  const reloadAllItem = () => {
    setTask(data);
  };

  return (
    <>
    <div className="overlay">
      <section>
        <div className="container">
          <h2 style={{ color: "var(--title-app)" }}>To do list</h2>
          <FormTask onSubmit={insertItem}/>
          <div className="people-list">
            <List data={task} removeItem={removeItem} />
          </div>
          <div className="btn-group">
            <button className="btn btn-reset" onClick={reloadAllItem}>
              {" "}
              Reload default task{" "}
            </button>
            <button className="btn btn-delete" onClick={() => setTask([])}>
              {" "}
              All done
            </button>
          </div>
        </div>
      </section>  
    </div>
    </>
  );
}

export default App;