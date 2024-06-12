import { useState } from 'react'

import Soluzione01 from './soluzione-01'
import Soluzione02 from './soluzione-02'
import Soluzione03 from './soluzione-03'

function Soluzioni() {
  const [ soluzione, setSoluzione ] = useState(1)

  return <>
    <nav>
      <button onClick={() => setSoluzione(1)}> { soluzione === 1 && <b>*</b> } Soluzioni 01</button>
      <button onClick={() => setSoluzione(2)}> { soluzione === 2 && <b>*</b> } Soluzioni 02</button>
      <button onClick={() => setSoluzione(3)}> { soluzione === 3 && <b>*</b> } Soluzioni 03</button>
    </nav>
    <div>
      { soluzione === 1 && <Soluzione01 /> }
      { soluzione === 2 && <Soluzione02 /> }
      { soluzione === 3 && <Soluzione03 /> }
    </div>
  </>


}

export default Soluzioni
