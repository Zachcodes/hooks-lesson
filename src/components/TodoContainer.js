import React, { useEffect, useState } from 'react';
import axios from 'axios';
import useAxios from '../hooks';

// const TodoContainer = () => {
//   const [todos, setTodos] = useState([]);
//   useEffect(() => {
//     async function fetchData() {
//       let response = await axios.get(
//         'https://jsonplaceholder.typicode.com/todos'
//       );
//       setTodos(response.data);
//     }
//     fetchData();
//   }, []);

//   return (
//     <div>
//       {todos.map(val => {
//         return <h1 key={val.id}>{val.title}</h1>;
//       })}
//     </div>
//   );
// };
const TodoContainer = () => {
  const data = useAxios('https://jsonplaceholder.typicode.com/todos');
  return (
    <div>
      {data.map(val => {
        return <h1>{val.title}</h1>;
      })}
    </div>
  );
};

export default TodoContainer;
