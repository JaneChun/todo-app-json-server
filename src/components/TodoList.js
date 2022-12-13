import styled from 'styled-components';

import { Todo } from './Todo.js';
import { useEffect } from 'react';
import axios from 'axios';

const TodosContainer = styled.div`
	height: 318px;
	overflow-y: scroll;
	padding-top: 10px;
`;

export const URL = 'http://localhost:3001/todos';
export function TodoList({todos, setTodos}) {
	

	useEffect(() => {
		axios.get(URL).then((res) => {
			const data = res.data;
			data.sort((a, b) => {
				if (a.checked === false) {
					return -1;
				} else {
					return 1;
				}
			})
			setTodos(data);
		});
	}, []);

	return (
		<TodosContainer>
			<ul>
				{todos.map((todo) => {
					return <Todo key={todo.id} id={todo.id} text={todo.text} todos={todos} setTodos={setTodos} />;
				})}
			</ul>
		</TodosContainer>
	);
}
// 체크된 항목이 맨 아래로 가도록 자동 정렬
