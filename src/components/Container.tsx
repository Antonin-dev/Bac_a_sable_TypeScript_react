import { useState } from "react";
import Task from "./Task";
import "./Container.css";
import Form from "./Form";

export default function Container() {
  const [tasks, setTasks] = useState<Array<any>>([]);

  return (
    <div className="container">
      <Form tasks={tasks} setTasks={setTasks} />
      <div className="container-tasks">
        {tasks &&
          tasks.map((task, index: number) => {
            const { title, content } = task;
            return <Task key={index} title={title} content={content} />;
          })}
      </div>
    </div>
  );
}
