import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo, updateTodo } from "./todoActions";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

export default function Todo() {
  const [inputTodo, setInputTodo] = useState("");
  const [btn, setbtn] = useState(false);
  const [currentId, setCurrentId] = useState(null);
  const [showAlert, setShowAlert] = useState(false);
  const [updateSuccess, setUpdateSuccess] = useState(false);
  const [deleteTodoId, setDeleteTodoId] = useState(null);
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const handleClick = () => {
    if (inputTodo.trim() !== "") {
      if (btn) {
        // const updatedTodo = [...todos];
        // updatedTodo[currentIndex] = inputTodo;
        dispatch(updateTodo(currentId, inputTodo));
        setInputTodo("");
        setbtn(false);
        setCurrentId(null);
        setUpdateSuccess(true);
      } else {
        dispatch(addTodo(inputTodo));
        setInputTodo("");
      }
    }
    //   Dispatch(todos(inputTodo))
    //   setInputTodo('')
  };
  const handleDelete = (id) => {
    // let del = todos.filter((list) => list.index !== index)
    setDeleteTodoId(id);
    setShowAlert(true);
  };
  const handleConfirmDelete = () => {
    if (deleteTodoId !== null) {
      dispatch(deleteTodo(deleteTodoId));
      setDeleteTodoId(null);
    }
    setShowAlert(false);
  };

  const handleUpdate = (id, todo) => {
    setInputTodo(todo);
    setbtn(true);
    setCurrentId(id);
  };

  useEffect(() => {
    const Timeout = setTimeout(() => {
      setUpdateSuccess(false);
    }, 1500);
    return () => clearTimeout(Timeout);
  }, [updateSuccess]);
  console.log(todos, "5353");
  return (
    <div className="container">
      <h3>TODO</h3>
      <input
        className="field"
        type="text"
        name="inputTodo"
        placeholder="TODO"
        value={inputTodo}
        onChange={(e) => setInputTodo(e.target.value)}
        required
      />
      <button className="ADD" type="submit" onClick={handleClick}>
        {" "}
        {btn ? "Update" : "ADD TODO"}
      </button>

      {showAlert && (
        <div className="alert-container">
          <Stack sx={{ width: "50%" }} spacing={2}>
            <Alert
              severity="warning"
              action={
                <>
                  {/* {todos.map((todo) => ( */}
                  <Button
                    // key={todo.id}
                    color="inherit"
                    size="small"
                    onClick={() => {
                      handleConfirmDelete();
                    }}
                  >
                    YES
                  </Button>
                  {/* //  ))} */}
                  <Button
                    color="inherit"
                    size="small"
                    onClick={() => setShowAlert(false)}
                  >
                    NO
                  </Button>
                </>
              }
            >
              {/* <AlertTitle>Warning</AlertTitle> */}
              Do You Want To Delete —
            </Alert>
          </Stack>
        </div>
      )}

      {updateSuccess && (
        <div className="alert-container">
          <Stack sx={{ width: "50%" }} spacing={2}>
            <Alert severity="success">Updated Successfully!</Alert>
          </Stack>
        </div>
      )}

      <ul className="list">
        {todos.length > 0 ? (
          todos.map((todo, index) => (
            <li key={index}>
              <strong className="text">{todo.text}</strong>
              <button className="bone" onClick={() => handleDelete(todo.id)}>
                Delete
              </button>
              <button
                className="bone"
                onClick={() => handleUpdate(todo.id, todo.text)}
              >
                Update
              </button>
            </li>
          ))
        ) : (
          <p className="message">TODO List Is Empty</p>
        )}
      </ul>
    </div>
  );
}
