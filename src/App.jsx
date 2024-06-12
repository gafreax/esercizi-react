import { useState } from 'react'

import Esercizi from './esercizi/index'
import Soluzioni from './soluzioni/index'

function App() {
  const [ mode, setMode ] = useState('esercizi')

  return <>
    <h1>Esercizi React</h1>
    <nav>
      <p><button onClick={ () => setMode('esercizi') }>Esercizi</button></p>
      <p><button onClick={ () => setMode('soluzioni') }>Soluzioni</button></p>
    </nav>
    { mode === 'esercizi' ? <Esercizi /> : <Soluzioni /> }
  </>
}

export default App
