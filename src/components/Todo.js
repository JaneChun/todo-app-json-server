import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPen } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodo, checkTodo, editTodo } from '../actions/index';

const TodoContainer = styled.li`
	background-color: white;
	list-style: none;
	height: 53px;

	display: flex;
	align-items: center;

	.textAndIcons {
		/* background-color: skyblue; */
		width: 250px;
		display: flex;
		justify-content: space-between;

		&:hover button {
			color: #959595;
		}
	}
`;

const Checkbox = styled.input`
	margin-left: 53px;
	appearance: none;
	width: 29px;
	height: 29px;
	border: 1.5px solid #d9d9d9;
	border-radius: 20px;
	transition: 0.3s;
	cursor: pointer;

	/* 체크 상태일 때 */
	&:checked {
		background-color: #d9d9d9;
		transition: 0.3s;
	}
`;
const Text = styled.div`
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
	margin-left: 13.25px;
	cursor: pointer;

	&.open {
		overflow: visible;
		white-space: normal;
	}
`;

const EditText = styled.input`
	border: none;
	font-size: 16px;
	margin-left: 13.25px;
	/* text-decoration: underline 1px solid; */
`;

const Icons = styled.div`
	display: flex;
`;

const Button = styled.button`
	color: transparent;
	width: 30px;
	font-size: 14px;
	background: none;
	border: none;
	/* padding-right: 12px; */

	cursor: pointer;
`;

export function Todo({ id, text }) {
	const [isOpen, setIsOpen] = useState(false);
	const [isEdit, setIsEdit] = useState(false);
	const [newText, setNewText] = useState(text);
	const dispatch = useDispatch();

	// ✅ todo 삭제
	const handleDelBtn = () => {
		dispatch(deleteTodo({ id }));
	};

	// ✅ todo 수정
	const handleEditBtn = () => {
		setIsEdit(true);
	};

	const onChange = (e) => {
		setNewText(e.target.value);

		// 엔터 누르면 수정
		if (e._reactName === 'onKeyUp' && e.code === 'Enter') {
			dispatch(editTodo({ id, newText }));
			setIsEdit(false);
		}
	};

	const handleChkBox = (e) => {
		const checked = e.target.checked; // 체크 여부 true/false
		dispatch(checkTodo({ id, checked }));
	};

	const handleToggle = () => {
		setIsOpen(!isOpen); // true/false 토글
	};

	return (
		<TodoContainer>
			<Checkbox onClick={handleChkBox} type='checkbox' />
			<div className='textAndIcons'>
				{isEdit ? (
					<EditText value={newText} onChange={onChange} onKeyUp={onChange} type='text' />
				) : (
					<Text className={isOpen ? 'open' : ''} onClick={handleToggle}>
						{newText || text}
					</Text>
				)}

				<Icons>
					<Button>
						<FontAwesomeIcon icon={faPen} onClick={handleEditBtn} />
					</Button>
					<Button>
						<FontAwesomeIcon icon={faMinus} onClick={handleDelBtn} />
					</Button>
				</Icons>
			</div>
		</TodoContainer>
	);
}
