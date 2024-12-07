import { useState } from "react";

import Form from "./Form";
import TodoList from "./TodoList";
import Footer from "./Footer";
 
export default function Todo() {
  const [todos, setTodos] = useState([]);
  const completedTodos = todos.filter((todos)=> todos.done).length
  const totalTodos = todos.lenght;
  return (
    <div>
      <Form todos={todos}  setTodos={setTodos} />
      <TodoList todos={todos} setTodos= {setTodos} />
      <Footer completedTodos= {completedTodos} totaltodos= {totalTodos} />
    </div>
  );
}