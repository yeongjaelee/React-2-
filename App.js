import logo from './logo.svg';
import './App.css';
import Hello from './hello';
import './App.css';

function App() {
  const name = 'react';
  const style = {
    backgroundColor:'black',
    color : 'aqua',
    fontSize:24,
    padding: '1rem'
  }
  return (
    <div>
      <Hello />
      <Hello />
      <div style={style} >{name}</div>
      <div className='gray-box'>{name}</div>
    </div>
  );
}

export default App;
