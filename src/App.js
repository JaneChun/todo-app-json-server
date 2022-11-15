import './App.css';
import styled from 'styled-components';
import { Title } from './components/Title.js';
import { Input } from './components/Input.js';
import { TodoList } from './components/TodoList.js';
import { CompletedCounter } from './components/CompletedCounter.js';
import { Today } from './components/Today.js';

function App() {
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
    /* background: skyblue; */
  `;

  return (
    <Body>
      <AppContainer>
        <Title />
        <Input />
        <TodoList />
        <CompletedCounter />
        <Today />
      </AppContainer>
    </Body>
  );
}

export default App;
