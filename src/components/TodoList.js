import styled from 'styled-components';
import { Todo } from './Todo.js';
import { dummydata } from '../dummydata';

export function TodoList() {
  const TodoContainer = styled.div`
    height: 318px;
    overflow-y: scroll;
  `;

  return (
    <TodoContainer>
      <ul>
        {dummydata.map((data) => {
          return <Todo data={data} />;
        })}
      </ul>
    </TodoContainer>
  );
}
