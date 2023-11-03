import React, { useState } from 'react';
import './App.css';
import CourseInput from './components/CourseGoals/CourseInput';
import CourseList from './components/CourseGoals/CourseList';

const App = () => {
  return (
    <div>
      <section id='goal-form'>
        <CourseInput />
      </section>
      <section id='goals'>
        <CourseList />
      </section>
    </div>
  );
};

export default App;
