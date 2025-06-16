import { useEffect, useState } from 'react'
import init, { compile } from '../pkg/memphis.js'

function App() {
  const [code, setCode] = useState('y = 42')
  const [output, setOutput] = useState('')
  const [ready, setReady] = useState(false)

  useEffect(() => {
    init().then(() => setReady(true))
  }, [])

  useEffect(() => {
    if (!ready) return
    try {
      const result = compile(code)
      setOutput(result.names.join(', '))
    } catch (e) {
      setOutput(`Error: ${e.message}`)
    }
  }, [code, ready])

  return (
    <div style={{ padding: '1rem', fontFamily: 'sans-serif' }}>
      <h1>Bytecode Compiler</h1>
      <textarea
        rows={4}
        cols={60}
        value={code}
        onChange={(e) => setCode(e.target.value)}
        placeholder="Enter Python code here"
        style={{ fontFamily: 'monospace', fontSize: '1rem', width: '100%' }}
      />
      <h2>Detected Names</h2>
      <pre>{output}</pre>
    </div>
  )
}

export default App
