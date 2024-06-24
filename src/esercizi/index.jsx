import { useState } from 'react'
import Esercizio01 from './esercizio-01'
import Esercizio02 from './esercizio-02'
import Esercizio03 from './esercizio-03'
import Esercizio04 from './esercizio-04'
import Esercizio05 from './esercizio-05'
import Esercizio06 from './esercizio-06'

function Esercizi() {
  const [ esercizio, setEsercizio ] = useState(1)

  return <>
    <nav>
      <button onClick={() => setEsercizio(1)}>{ esercizio === 1 && <b>*</b> } Esercizio 01</button>
      <button onClick={() => setEsercizio(2)}>{ esercizio === 2 && <b>*</b> } Esercizio 02</button>
      <button onClick={() => setEsercizio(3)}>{ esercizio === 3 && <b>*</b> } Esercizio 03</button>
      <button onClick={() => setEsercizio(4)}>{ esercizio === 4 && <b>*</b> } Esercizio 04</button>
      <button onClick={() => setEsercizio(5)}>{ esercizio === 5 && <b>*</b> } Esercizio 05</button>
      <button onClick={() => setEsercizio(6)}>{ esercizio === 6 && <b>*</b> } Esercizio 06</button>
    </nav>
    <div>
      { esercizio === 1 && <Esercizio01 /> }
      { esercizio === 2 && <Esercizio02 /> }
      { esercizio === 3 && <Esercizio03 /> }
      { esercizio === 4 && <Esercizio04 /> }
      { esercizio === 5 && <Esercizio05 ><p>sono il figlio</p></Esercizio05> }
      { esercizio === 6 && <Esercizio06 /> }
    </div>
  </>
}

export default Esercizi
