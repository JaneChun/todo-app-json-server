import styled from 'styled-components';

const DateContainer = styled.div`
	height: 110px;

	display: flex;
	justify-content: center;
	align-items: center;

	& span {
		font-size: 20px;
		font-weight: 500;
		color: #959595;
	}
`;

export function Today() {
	return (
		<DateContainer>
			<span>{new Date().toLocaleDateString('ko-KR').replace('.', ' /').replace('.', ' /').slice(0, -1)}</span>
		</DateContainer>
	);
}
