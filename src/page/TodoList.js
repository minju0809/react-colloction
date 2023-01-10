import { useEffect, useState } from "react";

const TodoList = ({setPage}) => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const handleTodo = (e) => {
    console.log(e.target.value);
    setTodo(e.target.value);
  };

  const handleAdd = () => {
    setTodos((prev) => {
      const newTodos = [...prev, todo];
      localStorage.setItem("todos", JSON.stringify(newTodos));
      return newTodos;
    });
    setTodo("");
  };
  const handleDelete = (i) => {
    setTodos((prev) => {
      const newTodos = prev.filter((prev, idx) => idx !== i);
      localStorage.setItem("todos", JSON.stringify(newTodos));
      return newTodos;
    });
  };

  useEffect(() => {
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos) {
      setTodos(JSON.parse(savedTodos));
    }
  }, []);

  return (
    <div className="todoList">
      <button className="btn" onClick={() => setPage(0)}>Home</button>
      <button className="btn" onClick={() => setPage(1)}>FindGym</button>
      <button className="btn" onClick={() => setPage(2)}>FindMovie</button>
      <h2>To do List</h2>
      <input
        value={todo}
        onChange={handleTodo}
        placeholder="할 일을 입력하세요."
      ></input>
      <button className="btn" onClick={handleAdd}>추가</button>
      <div>
        {todos.length > 0 ? (
          todos.map((todo, index) => (
            <div key={index}>
              {todo}
              <button className="btn" onClick={() => handleDelete(index)}>삭제</button>
            </div>
          ))
        ) : (
          <div>할 일이 없습니다.</div>
        )}
      </div>
    </div>
  );
};

export default TodoList;
