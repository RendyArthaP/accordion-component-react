import React, {useState} from 'react'

const Question = ({question, answer}) => {
  const [toggle, setToggle] = useState(false)
  return (
    <div className="p-4">
      <div className="flex flex-col">
        <h1 className="font-bold">Question: </h1>
        <h1> {question}</h1>
      </div>
      {toggle && (
        <div className="py-2">
          <h1 className="font-bold">Answer: </h1>
          <h1> {answer}</h1>
        </div>
      )}
      <div className="pt-4">
      <button 
        onClick={() => setToggle(!toggle)}
        className="bg-gray-300 rounded-full w-6 h-6"
      >
        {toggle ? '-' : '+'}
      </button>
      </div>
      
    </div>
  )
}

export default Question
