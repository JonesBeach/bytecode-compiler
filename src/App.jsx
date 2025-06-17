import { useEffect, useState } from 'react'
import init, { compile } from '../pkg/memphis.js'

function App() {
  const [code, setCode] = useState('y = 42')
  const [error, setError] = useState('')
  const [compiled, setCompiled] = useState(null)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    init().then(() => setReady(true))
  }, [])

  useEffect(() => {
    if (!ready) return
    try {
      const compiled = compile(code)
      setCompiled(compiled)
      setError('')
    } catch (e) {
      setCompiled(null)
      setError(`Error: ${e.message}`)
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
      {error}
      <h2>Detected Names (globals)</h2>
      <pre>{compiled?.names.join('\n')}</pre>
      <h2>Detected Bytecode</h2>
      <pre>{compiled?.bytecode.join('\n')}</pre>
      <h2>Detected Constants</h2>
      <pre>{compiled?.constants.join('\n')}</pre>
    </div>
  )
}

export default App
