//  type typescript

export type TaskProps = {
  title: string;
  content: string;
};

export type TasksProps = {
  tasks: Array<TaskProps>;
  setTasks: (e: any) => void;
};
