import './App.css';
import styled from 'styled-components';
import { Title } from './components/Title.js';
import { Input } from './components/Input.js';
import { TodoList } from './components/TodoList.js';
import { CompletedCounter } from './components/CompletedCounter.js';
import { Today } from './components/Today.js';
import { useState } from 'react';

const Body = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
`;

const AppContainer = styled.div`
	width: 375px;
	height: 812px;
	border: 1px solid lightgray;
	border-radius: 15px;
`;

function App() {
	
	const [todos, setTodos] = useState([]);
	return (
		<Body>
			<AppContainer>
				<Title />
				<Input todos={todos} setTodos={setTodos}/>
				<TodoList todos={todos} setTodos={setTodos} />
				<CompletedCounter todos={todos}/>
				<Today />
			</AppContainer>
		</Body>
	);
}

export default App;
