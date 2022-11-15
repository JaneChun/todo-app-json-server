import styled from 'styled-components';

const TodoContainer = styled.li`
  background-color: white;
  list-style: none;
  height: 53px;

  display: flex;
  align-items: center;
`;

const Checkbox = styled.input`
  margin-left: 53px;
  appearance: none;
  width: 31px;
  height: 31px;
  border: 1.5px solid #d9d9d9;
  border-radius: 20px;
  transition: 0.3s;
  cursor: pointer;

  /* 체크 상태일 때 */
  &:checked {
    background-color: #d9d9d9;
    transition: 0.3s;
  }
`;
const Text = styled.p`
  margin-left: 13.25px;
  margin-right: 27px;
`;

export function Todo({ data }) {
  return (
    <TodoContainer>
      <Checkbox type='checkbox' />
      <Text>{data}</Text>
    </TodoContainer>
  );
}
