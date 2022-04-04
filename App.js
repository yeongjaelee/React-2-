import Hello from './hello';
import React from 'react';
import Wrapper from './Wrapper';

function App() {
  return (
    <Wrapper>
    <Hello name="react" color='red' />
    <Hello color='pink' /> {/* this is the children in Wrapper tag*/}
    </Wrapper>
  );
}


export default App;
