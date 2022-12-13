import { ADD_TODO, DELETE_TODO, CHECK_TODO, EDIT_TODO } from '../actions/index';

const todoReducer = (state = [], action) => {
	console.log('action', action);
	switch (action.type) {
		case ADD_TODO:
			return [
				{
					id: action.id,
					text: action.text,
					checked: false,
				},
				...state,
			];

		case DELETE_TODO:
			return state.filter((todo) => todo.id !== action.id);

		case CHECK_TODO:
			state.filter((todo) => todo.id === action.id).map((todo) => (todo.checked = action.checked));
			// 전달받은 id를 가진 투두를 filter로 찾아서, map으로 속성 수정

			return [...state].sort((a, b) => {
				// state.sort()로 하면 리렌더링이 발생하지 않으므로 [...state]로 새로운 state를 리턴해줘야 한다.
				if (a.checked === false) {
					return -1;
				} else {
					return 1;
				}
			}); // 체크된 항목이 뒤로 가도록 정렬

		case EDIT_TODO:
			state.filter((todo) => todo.id === action.id).map((todo) => (todo.text = action.text));
			return state;

		default:
			return state;
	}
};

export default todoReducer;
