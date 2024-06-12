import { useState } from 'react'

function Soluzione03() {
  const [ selezionato, setSelezionato] = useState(1)
  
  return <>
    <button style={{ color: selezionato === 1 ? 'purple' : 'black' }} onClick={() => setSelezionato(1)}>primo</button>
    <button style={{ color: selezionato === 2 ? 'purple' : 'black' }} onClick={() => setSelezionato(2)}>secondo</button>
    <button style={{ color: selezionato === 3 ? 'purple' : 'black' }} onClick={() => setSelezionato(3)}>terzo</button>
  </>
}

export default Soluzione03
