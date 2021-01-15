import { list } from 'postcss';
import React, { useState } from 'react';
import {data} from './data/data';
import Question from './List/Question';

function App() {
  const [listQuestions, setListQuestions] = useState(data)
  return (
    <div className="flex flex-col md:flex-row justfiy-between w-full">
      <h1 className="text-left px-4 pt-4 w-full md:w-1/3">Question and answer</h1>
      <div>
        {listQuestions.map(listQuestion => (
          <Question key={listQuestion.id} {...listQuestion}/>
        ))}
      </div>
    </div>
  );
}

export default App;
