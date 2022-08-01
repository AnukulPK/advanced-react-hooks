import useLocalStorage from "../hooks/useLocalStorage";

const CustomHookExample2 = () => {
  const [task, setTask] = useLocalStorage("task", "");
  const [tasks, setTasks] = useLocalStorage("tasks", []);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const tasksObject = {
      task,
      completedValue: false,
      date: new Date().toLocaleDateString,
    };

    setTasks([...tasks, tasksObject]);
  };

  return (
    <>
      {" "}
      <form className="w-50" onSubmit={onSubmitHandler}>
        <div className="mb-3">
          <label className="form-label">Task</label>
          <input
            className="form-control"
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
        </div>
        <button className="btn btn-primary" type="Submit">
          Submit
        </button>
      </form>
      <hr />
      {tasks.map((task) => (
        <h3 key={task.date}>{task.task}</h3>
      ))}
    </>
  );
};

export default CustomHookExample2;
