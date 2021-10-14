import { TaskProps } from "../type/Type";

export default function Task({ title, content }: TaskProps) {
  return (
    <div className="task">
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  );
}
