export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const CHECK_TODO = 'CHANGE_CHECK';

export const addTodo = ({ id, inputText }) => {
	console.log('add id', id);
	console.log('add inputText', inputText);
	return {
		type: ADD_TODO,
		id: id.current,
		text: inputText,
	};
};

export const deleteTodo = ({ id }) => {
	console.log('delete id', id);
	return {
		type: DELETE_TODO,
		id: id,
	};
};

export const checkTodo = ({ id, checked }) => {
	console.log('changeCheck id', id);
	console.log('checked?', checked); // true/false
	return {
		type: CHECK_TODO,
		id: id,
		checked: checked,
	};
};
