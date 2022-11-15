import styled from 'styled-components';

const DateContainer = styled.div`
  height: 110px;

  display: flex;
  justify-content: center;
  align-items: center;

  & span {
    font-size: 20px;
    color: #959595;
  }
`;

export function Today() {
  return (
    <DateContainer>
      <span>{new Date().toLocaleDateString('ko-KR')}</span>
    </DateContainer>
  );
}
