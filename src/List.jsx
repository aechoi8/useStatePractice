import Task from "./Task";

function List({ tasks }) {
  return (
    <section>
      {tasks.map((task) => {
        return <Task key={task.id} {...task} />;
      })}
    </section>
  );
}

export default List;
