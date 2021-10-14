import { useState } from "react";

export default function Form({ tasks, setTasks }: any) {
  const [task, setTask] = useState({});

  const saveTask = (e: any): void => {
    const { name, value } = e.target;
    switch (name) {
      case "title":
        setTask({
          ...task,
          title: value,
        });
        break;
      case "content":
        setTask({
          ...task,
          content: value,
        });
        break;
    }
  };

  const preventDefault = (e: any): void => {
    e.preventDefault();
    setTasks([...tasks, task]);
  };

  return (
    <form onSubmit={preventDefault}>
      <div className="container-input">
        <label htmlFor="title">Write your title</label>
        <input
          type="text"
          id="title"
          placeholder="Write your title"
          name="title"
          onChange={saveTask}
        />
        <label htmlFor="content">Write your content</label>
        <input
          type="textarea"
          id="content"
          placeholder="Write your content"
          name="content"
          onChange={saveTask}
        />
      </div>
      <button type="submit">Ajouter</button>
    </form>
  );
}
