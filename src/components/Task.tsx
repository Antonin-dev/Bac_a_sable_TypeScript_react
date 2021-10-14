import { TaskProps } from "../type/Type";

export default function Task({ title, content, index }: TaskProps) {
  const deleteTask = () => {
    console.log(index);
  };

  return (
    <div className="task">
      <h3>{title}</h3>
      <p>{content}</p>
      <button type="button" onClick={deleteTask}>
        Supprimer
      </button>
    </div>
  );
}
