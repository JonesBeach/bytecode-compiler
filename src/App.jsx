import { useEffect, useState } from 'react'
import JsonView from '@uiw/react-json-view'
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
      { compiled && <JsonView value={compiled} /> }
    </div>
  )
}

export default App
