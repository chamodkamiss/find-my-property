import React from 'react'
import testData from './test.json';

const test = () => {
  return (
    <div>
     <h1>Test Data</h1>
      <ul>
        {testData.map((item) => (
          <li key={item.id}>
            {item.name} - {item.age} years old
          </li>
        ))}
      </ul>
    </div>
  )
}

export default test
