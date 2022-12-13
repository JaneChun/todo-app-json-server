import styled from 'styled-components';
import { Todo } from './Todo.js';
import { useSelector } from 'react-redux';

const TodosContainer = styled.div`
	height: 318px;
	overflow-y: scroll;
	padding-top: 10px;
`;

export function TodoList() {
	const state = useSelector((state) => state);
	return (
		<TodosContainer>
			<ul>
				{state.map((todo) => {
					return <Todo key={todo.id} id={todo.id} text={todo.text} />;
				})}
			</ul>
		</TodosContainer>
	);
}
// 체크된 항목이 맨 아래로 가도록 자동 정렬
