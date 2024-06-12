import { useState } from 'react'
import Esercizio01 from './esercizio-01'
import Esercizio02 from './esercizio-02'
import Esercizio03 from './esercizio-03'

function Esercizi() {
  const [ esercizio, setEsercizio ] = useState(1)

  return <>
    <nav>
      <button onClick={() => setEsercizio(1)}>{ esercizio === 1 && <b>*</b> } Esercizio 01</button>
      <button onClick={() => setEsercizio(2)}>{ esercizio === 2 && <b>*</b> } Esercizio 02</button>
      <button onClick={() => setEsercizio(3)}>{ esercizio === 3 && <b>*</b> } Esercizio 03</button>
    </nav>
    <div>
      { esercizio === 1 && <Esercizio01 /> }
      { esercizio === 2 && <Esercizio02 /> }
      { esercizio === 3 && <Esercizio03 /> }
    </div>
  </>


}

export default Esercizi
