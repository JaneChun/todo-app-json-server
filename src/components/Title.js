import styled from 'styled-components';

const TitleContainer = styled.div`
  height: 270px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

const Text = styled.span`
  font-size: 64px;
  font-weight: 200;
  text-align: center;
  margin-bottom: 10px;
`;

export function Title() {
  return (
    <TitleContainer>
      <Text>
        TO DO <br /> LIST.
      </Text>
    </TitleContainer>
  );
}
