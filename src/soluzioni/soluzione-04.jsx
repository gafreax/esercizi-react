import { useState } from 'react'

function Soluzione04() {
  const [number, setNumber] = useState(0)

  return <div style={{ display: "flex", flexDirection: "row" }}>
    <button onClick={() => number && setNumber(number - 1)}>-</button>
    <h3 style={{ marginLeft: "16px", marginRight: "16px" }}>{number}</h3>
    <button onClick={() => number<99 && setNumber(number + 1)}>+</button>
  </div>
}

export default Soluzione04

