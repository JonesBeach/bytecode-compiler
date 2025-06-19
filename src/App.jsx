import { useEffect, useState } from "react";
import JsonView from "@uiw/react-json-view";
import init, { compile } from "../pkg/memphis.js";

import "./App.css";

function App() {
  const [code, setCode] = useState("y = 42");
  const [error, setError] = useState("");
  const [compiled, setCompiled] = useState(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    init().then(() => setReady(true));
  }, []);

  useEffect(() => {
    if (!ready) return;
    try {
      const compiled = compile(code);
      setCompiled(compiled);
      setError("");
    } catch (e) {
      setCompiled(null);
      setError(e.toString());
    }
  }, [code, ready]);

  return (
    <div style={{ padding: "1rem", fontFamily: "sans-serif" }}>
      <h1>Bytecode Compiler</h1>
      <div className="flex-container">
        <div>
          <textarea
            rows={20}
            cols={50}
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder="Enter Python code here"
            style={{ fontFamily: "monospace", fontSize: "1rem", width: "100%" }}
          />
          <pre>{error ? error : "Success!"}</pre>
        </div>
        {compiled && (
          <JsonView
            value={compiled}
            enableClipboard={false}
            displayObjectSize={false}
          />
        )}
      </div>
    </div>
  );
}

export default App;
