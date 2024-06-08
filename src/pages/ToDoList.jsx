import { useState } from "react";
import { Container, VStack, Input, Button, List, ListItem, IconButton } from "@chakra-ui/react";
import { FaTrash, FaEdit } from "react-icons/fa";

const ToDoList = () => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [currentTask, setCurrentTask] = useState(null);

  const addTask = () => {
    if (task.trim() !== "") {
      setTasks([...tasks, { id: Date.now(), text: task }]);
      setTask("");
    }
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const editTask = (task) => {
    setIsEditing(true);
    setTask(task.text);
    setCurrentTask(task);
  };

  const updateTask = () => {
    setTasks(tasks.map((t) => (t.id === currentTask.id ? { ...t, text: task } : t)));
    setTask("");
    setIsEditing(false);
    setCurrentTask(null);
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Input placeholder="Add a new task" value={task} onChange={(e) => setTask(e.target.value)} />
        <Button onClick={isEditing ? updateTask : addTask}>{isEditing ? "Update Task" : "Add Task"}</Button>
        <List spacing={3} width="100%">
          {tasks.map((task) => (
            <ListItem key={task.id} display="flex" justifyContent="space-between" alignItems="center">
              {task.text}
              <span>
                <IconButton aria-label="Edit" icon={<FaEdit />} size="sm" onClick={() => editTask(task)} />
                <IconButton aria-label="Delete" icon={<FaTrash />} size="sm" onClick={() => deleteTask(task)} />
              </span>
            </ListItem>
          ))}
        </List>
      </VStack>
    </Container>
  );
};

export default ToDoList;
