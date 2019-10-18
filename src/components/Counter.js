import React, { Component, useState } from 'react';

// export default class Counter extends Component {
//   constructor() {
//     super();

//     this.state = {
//       count: 0
//     };
//   }

//   render() {
//     return (
//       <div>
//         <p>You clicked {this.state.count} times</p>
//         <button onClick={() => this.setState({ count: this.state.count + 1 })}>
//           Increase Count
//         </button>
//       </div>
//     );
//   }
// }

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Increase count</button>
    </div>
  );
}
