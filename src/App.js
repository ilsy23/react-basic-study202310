import React from 'react';
import './App.css';
import ExpenseItem from './components/ExpenseItem';
import NoName from './NoName';

function App() {
  const $h2 = <h2>반가워요~</h2>;

  return (
    <>
      <NoName />
      <ExpenseItem />
      <div className='App'>
        <h1>메롱메롱</h1>
        {$h2}
      </div>
      <div className='noname'>
        <input type='text' />
        <p>
          오늘은 월요일 입니다. <br />
          그래서 공부가 하기 싫어요~
        </p>
      </div>
    </>
  );
}

export default App;
