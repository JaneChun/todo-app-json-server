import styled from 'styled-components';

export function Title() {
  const Title = styled.div`
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

  return (
    <Title>
      <Text>
        TO DO <br /> LIST.
      </Text>
    </Title>
  );
}
