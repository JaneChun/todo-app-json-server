import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

const Counter = styled.div`
  width: 100%;
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
  background-color: #d9d9d9;
`;

const Text = styled.p`
  margin-left: 13.25px;
  color: #a8a8a8;

  & span {
    margin-right: 160px;
  }
`;

export function CompletedCounter() {
  return (
    <Counter>
      <Checkbox disabled />
      <Text>
        <span>완료된 할 일</span>
        <FontAwesomeIcon icon={faCaretDown} />
      </Text>
    </Counter>
  );
}
