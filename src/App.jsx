import Header from "./components/Header";
import Main from "./components/Main/Index";
import { useState } from 'react';

function App() {

  const [text, setText] = useState('');

  return (
    <div className="App">
      <Header text={text} setText={setText}/>
      <Main text={text}/>
    </div>
  );
}

export default App;
