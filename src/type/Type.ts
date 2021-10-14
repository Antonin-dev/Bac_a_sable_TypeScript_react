//  type typescript

export type TaskProps = {
  title: string;
  content: string;
  index: number;
};

export type TasksProps = {
  tasks: Array<TaskProps>;
  setTasks: (e: any) => void;
};
