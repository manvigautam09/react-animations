import React from "react";
import styled, { keyframes } from "styled-components";
import { swing } from "react-animations";

const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  border-radius: 3px;
`;

const AnimatedDiv = styled.div`
  animation: 2s ${keyframes`${swing}`} infinite;
`;

const TodoArray = props => {
  return (
    props.todos &&
    props.todos.map(item => {
      return (
        <AnimatedDiv key={item.id}>
          <Input
            type="text"
            value={item.text}
            onChange={event => {
              props.onEdit(item, event);
            }}
          />
          <button
            onClick={() => {
              props.onDelete(item);
            }}
          >
            <i className="fa fa-times" aria-hidden="true" />
          </button>
        </AnimatedDiv>
      );
    })
  );
};
export default TodoArray;
