import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { bounceInDown } from "react-animations";
import TodoArray from "../../components/TodoArray";
import "font-awesome/css/font-awesome.min.css";

const BouncyDiv = styled.h1`
  animation: 2s ${keyframes`${bounceInDown}`};
`;

const OuterDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  background: papayawhip;
  border-radius: 3px;
`;

const Todo = () => {
  const [inputText, updateInputText] = useState("");
  const [todos, updateTodos] = useState([]);
  const [disabled, updateDisabled] = useState(true);

  useEffect(() => {
    let disabledValue = inputText ? false : true;
    updateDisabled(disabledValue);
  }, [inputText]);

  const handleChange = event => {
    const text = event.target.value;
    updateInputText(text);
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log("");
    let newTodos = [...todos];
    let obj = {
      id: Date.now(),
      text: inputText
    };
    newTodos.push(obj);
    updateTodos(newTodos);
    updateInputText("");
  };

  const onEdit = (item, event) => {
    const updatedTodos = [...todos];
    updatedTodos.forEach(todo => {
      if (todo.id === item.id) {
        todo.text = event.target.value;
      }
    });
    updateTodos(updatedTodos);
  };

  const onDelete = item => {
    let updatedTodos = [...todos];
    updatedTodos = updatedTodos.filter(todo => {
      return todo.id !== item.id;
    });
    updateTodos(updatedTodos);
  };

  return (
    <OuterDiv>
      <BouncyDiv>AnimatedTodo</BouncyDiv>
      <form onSubmit={handleSubmit}>
        <Input
          name="todo"
          type="text"
          value={inputText}
          onChange={handleChange}
        />
        <button type="Submit" disabled={disabled}>
          Submit
        </button>
      </form>
      <div
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          display: "flex",
          flexDirection: "row",
          marginLeft: "20%",
          marginRight: "20%",
          flexWrap: "wrap",
          paddingTop: "5%",
          // alignSelf: "center",
          width: "500px"
        }}
      >
        <TodoArray todos={todos} onEdit={onEdit} onDelete={onDelete} />
      </div>
    </OuterDiv>
  );
};
export default Todo;
