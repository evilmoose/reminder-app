import { useState } from 'react';
import data from './data.js';

const App = () => {
  const [poeple, setPeople] = useState(data);
  console.log(poeple);
  return <h2>Birthday Reminder - Starter</h2>;
};
export default App;
