# **TODO LIST REACT TYPESCRIPT**

## **COMPONENTS**

### **Component Container**

Contains the object of object that will be modified later.

### **Component Form**

Using the form component that allows you to edit a _*state*_ that is represented by an object chart.

### **Component Task**

Allows you to retain the state information and display them.

## **TYPESCRIPT**

### **Type**

Folder that includes types of _*Typescript*_ .

```
export type TaskProps = {
  title: string;
  content: string;
  index: number;
};

export type TasksProps = {
  tasks: Array<TaskProps>;
  setTasks: (e: any) => void;
};
```
