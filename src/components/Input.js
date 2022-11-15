import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const InputContainer = styled.div`
  height: 61px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Label = styled.label`
  width: 273px;
  height: 38px;
  border-radius: 20px;
  border: 1.5px solid #d9d9d9;
  padding: 0 3px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TodoInput = styled.input`
  background: none;
  font-size: 16px;
  padding-left: 10px;
  border: none;
  width: 90%;
  &:focus {
    outline: none;
  }
`;

const PlusButton = styled.button`
  background-color: #d9d9d9;
  font-size: 20px;
  color: white;
  width: 31px;
  height: 31px;
  border-radius: 20px;
  border: none;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export function Input({ todoList, setTodoList }) {
  const [inputText, setInputText] = useState('');

  const handleInputChange = (e) => {
    setInputText(e.target.value);
    if (e._reactName === 'onKeyUp' && e.code === 'Enter') {
      addTodoList();
    }
  };

  const addTodoList = () => {
    if (inputText) {
      setTodoList([inputText, ...todoList]); // + 버튼 누르면 todoList 배열에 추가된다.
      setInputText('');
    }
  };

  return (
    <InputContainer>
      <Label>
        <TodoInput placeholder='Add a new task' type='text' value={inputText} onChange={handleInputChange} onKeyUp={handleInputChange} />
        <PlusButton onClick={addTodoList}>
          <FontAwesomeIcon icon={faPlus} />
        </PlusButton>
      </Label>
    </InputContainer>
  );
}
