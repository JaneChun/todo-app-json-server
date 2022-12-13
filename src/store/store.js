import { legacy_createStore as createStore } from 'redux';
import todoReducer from '../reducers/todoReducer';

const store = createStore(todoReducer);
store.subscribe(() => console.log('getState', store.getState()));
// store에 변화가 일어날 때마다 감지하여 콜백 함수를 실행 -> 콜백함수에 state를 출력

export default store;
