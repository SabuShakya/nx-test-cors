import NxWelcome from './nx-welcome';
import { useEffect } from 'react';

export function App() {

  useEffect(()=> {
    fetch("/todos")
      .then(data=>
        console.log(data))
  })

  return (
    <>
      <NxWelcome title="test-cors" />
      <div />
    </>
  );
}

export default App;
