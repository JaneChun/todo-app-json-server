import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

export function Input() {
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

  const Input = styled.input`
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

  return (
    <InputContainer>
      <Label>
        <Input />
        <PlusButton>
          <FontAwesomeIcon icon={faPlus} />
        </PlusButton>
      </Label>
    </InputContainer>
  );
}
