import { useEffect, useState } from 'react'
import init, { compile } from '../pkg/memphis.js'

function App() {
  const [output, setOutput] = useState('')

  useEffect(() => {
    init().then(() => {
      const result = compile('y = 42')
      setOutput(result.names.join(', '))
    })
  }, [])

  return (
    <div>
      <h1>Bytecode Compiler</h1>
      <pre>{output}</pre>
    </div>
  )
}

export default App

