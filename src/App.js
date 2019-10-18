import React from 'react';
import './App.css';
import Counter from './components/Counter';
import TodoContainer from './components/TodoContainer';

function App() {
  return (
    <div className="App">
      <Counter />
      <TodoContainer />
    </div>
  );
}

export default App;
