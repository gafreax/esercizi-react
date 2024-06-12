import { useState } from 'react'

function Soluzione02() {
  const [ hidden, setHidden ] = useState(false)

  return <>
    <button onClick={() => setHidden(!hidden)}>hide</button>
    { !hidden && <p>Sono un paragrafo</p> }
  </>
}

export default Soluzione02
