function Task({ item, priority }) {
  return (
    <article>
      <div>
        <p>
          Priority {priority}: {item}
        </p>
      </div>
    </article>
  );
}
export default Task;
