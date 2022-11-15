import { useState } from 'react'

function App() {
  const [script, setScript] = useState<string>()
  const [text, setText] = useState()

  return (
    <div>
      <input onChange={e => setText(e.target.value)} />
      <button onClick={() => setScript(text)}>Inject Script</button>

      {script && <div dangerouslySetInnerHTML={{ __html: script }} />}
    </div>
  )
}

export default App
