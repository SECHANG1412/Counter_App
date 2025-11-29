import './App.css';
import { useState } from 'react';
import Controller from './components/Controller';
import Viewer from './components/Viewer';

const App = () => {
  const [count, setCount] = useState<number>(0);

  const onClickButton = (value: number) => {
    setCount((prevCount) => prevCount + value);
  };

  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <Viewer count={count} />
      </section>
      <section>
        <Controller onClickButton={onClickButton} />
      </section>
    </div>
  );
};

export default App;
