import { useState } from 'react';
import data from './data.js';
import List from './List.jsx';

const App = () => {
  const [people, setPeople] = useState(data);

  return (
    <main>
      <section className='container'>
        <h3>{people.length} birthdays today</h3>
        <List poeple={people} />
      </section>
    </main>
  );
};
export default App;
