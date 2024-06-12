import { useState } from 'react'

const redButton = { background: 'red', color: 'white' }
const blueButton = { background: 'blue', color: 'white' }
function Soluzioni01() {
  const [style, setStyle] = useState(redButton)
  
  function handleClick(color) {
    if(color === 'red') {
      setStyle(blueButton)
    } else {
      setStyle(redButton)
    }
  }

  return <button style={style} onClick={ () => handleClick( style.background ) }>Switch</button>
}


export default Soluzioni01
