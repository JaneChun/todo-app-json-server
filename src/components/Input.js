import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../actions/index';

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

const TodoInput = styled.input`
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
	font-size: 19px;
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

export function Input() {
	const [inputText, setInputText] = useState('');
	const id = useRef(0); // useRef에 id 값 저장
	const dispatch = useDispatch();

	const handleInputChange = (e) => {
		setInputText(e.target.value);
		if (e._reactName === 'onKeyUp' && e.code === 'Enter') {
			// 엔터 누르면 추가
			addTodoList();
		}
	};

	// ✅ todo 추가
	const addTodoList = () => {
		if (inputText) {
			// 텍스트 없으면 추가 X
			id.current++; // ref 객체의 current 값을 1 증가시킨다.
			dispatch(addTodo({ id, inputText })); // + 버튼 누르면 todoList 배열에 추가된다.
			setInputText('');
		}
	};

	return (
		<InputContainer>
			<Label>
				<TodoInput type='text' value={inputText} onChange={handleInputChange} onKeyUp={handleInputChange} />
				<PlusButton onClick={addTodoList}>
					<FontAwesomeIcon icon={faPlus} />
				</PlusButton>
			</Label>
		</InputContainer>
	);
}
