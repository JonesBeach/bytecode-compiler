import { useEffect, useState } from "react";
import init, { compile } from "../pkg/memphis.js";

import Console from "./Console";
import BytecodeViewer from "./BytecodeViewer";
import { getCodeFromURL, setCodeInURL } from "./urlState";
import "./App.css";

const App = () => {
  const [code, setCode] = useState("");
  const [error, setError] = useState("");
  const [codeObject, setCodeObject] = useState(null);
  const [wasmLoaded, setWasmLoaded] = useState(false);

  useEffect(() => {
    init().then(() => {
      setWasmLoaded(true);
      const initial = getCodeFromURL() || "y = 42";
      setCode(initial);
    });
  }, []);

  useEffect(() => {
    if (!wasmLoaded) return;
    try {
      const compiled = compile(code);
      setCodeObject(compiled);
      setError("");
      setCodeInURL(code);
    } catch (e) {
      setCodeObject(null);
      setError(e.toString());
    }
  }, [code, wasmLoaded]);

  return (
    <div className="container">
      <div className="left-column">
        <textarea
          className="code-area"
          rows={20}
          cols={50}
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="Enter Python code here"
        />
        <div className="console-area">
          <Console error={error} />
        </div>
      </div>
      <div className="right-column">
        <BytecodeViewer codeObject={codeObject} />
      </div>
    </div>
  );
};

export default App;
