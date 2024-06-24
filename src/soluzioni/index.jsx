import { useState } from 'react'

import Soluzione01 from './soluzione-01'
import Soluzione02 from './soluzione-02'
import Soluzione03 from './soluzione-03'
import Soluzione04 from './soluzione-04'
import Soluzione05 from './soluzione-05'
import Soluzione06 from './soluzione-06'

function Soluzioni() {
  const [ soluzione, setSoluzione ] = useState(1)

  return <>
    <nav>
      <button onClick={() => setSoluzione(1)}> { soluzione === 1 && <b>*</b> } Soluzione 01</button>
      <button onClick={() => setSoluzione(2)}> { soluzione === 2 && <b>*</b> } Soluzione 02</button>
      <button onClick={() => setSoluzione(3)}> { soluzione === 3 && <b>*</b> } Soluzione 03</button>
      <button onClick={() => setSoluzione(4)}> { soluzione === 4 && <b>*</b> } Soluzione 04</button>
      <button onClick={() => setSoluzione(5)}> { soluzione === 5 && <b>*</b> } Soluzione 05</button>
      <button onClick={() => setSoluzione(6)}> { soluzione === 6 && <b>*</b> } Soluzione 06</button>
    </nav>
    <div>
      { soluzione === 1 && <Soluzione01 /> }
      { soluzione === 2 && <Soluzione02 /> }
      { soluzione === 3 && <Soluzione03 /> }
      { soluzione === 4 && <Soluzione04 /> }
      { soluzione === 5 && <Soluzione05><p>sono un paragrafo</p></Soluzione05> }
      { soluzione === 6 && <Soluzione06 /> }
    </div>
  </>
}

export default Soluzioni
