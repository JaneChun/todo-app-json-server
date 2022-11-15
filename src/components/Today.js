import styled from 'styled-components';

// let date = new Date();
// let year = date.getFullYear();
// let month = date.getMonth();
// let day = date.getDay();
// console.log(year, '/', month, '/', day);

export function Today() {
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
  return (
    <DateContainer>
      <span>{new Date().toLocaleDateString('ko-KR')}</span>
    </DateContainer>
  );
}
