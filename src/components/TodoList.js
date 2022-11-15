import styled from 'styled-components';
import { Todo } from './Todo.js';
import { dummydata } from '../dummydata';
import { useState } from 'react';

const TodosContainer = styled.div`
  height: 318px;
  overflow-y: scroll;
`;

export function TodoList({ todoList }) {
  return (
    <TodosContainer>
      <ul>
        {todoList.map((data) => {
          return <Todo key={Math.random()} data={data} />;
        })}
      </ul>
    </TodosContainer>
  );
}
