import styled from '@emotion/styled'
import { useState } from 'react'

const BaseWrapper = styled.div`
  padding: 32px;
  margin: 16px;
`

const DarkWrapper = styled(BaseWrapper)`
  background: black;
  color: white;
`

const LightWrapper = styled(BaseWrapper)`
  background: lightgray;
  color: darkblue;
`

function Soluzione05({children}) {
  const [ isDark, setIsDark ] = useState(false)

  return <div>
    <button onClick={() => setIsDark(!isDark) }> Switch to {isDark ? 'light': 'dark' }</button>
    { isDark ? <DarkWrapper>{children}</DarkWrapper> : <LightWrapper>{children}</LightWrapper> }
  </div>
}


export default Soluzione05

