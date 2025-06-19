import { useEffect, useState } from "react";
import JsonView from "@uiw/react-json-view";
import init, { compile } from "../pkg/memphis.js";

import Console from "./Console";
import "./App.css";

const App = () => {
  const [code, setCode] = useState("y = 42");
  const [error, setError] = useState("");
  const [compiled, setCompiled] = useState(null);
  const [wasmLoaded, setWasmLoaded] = useState(false);

  useEffect(() => {
    init().then(() => setWasmLoaded(true));
  }, []);

  useEffect(() => {
    if (!wasmLoaded) return;
    try {
      const compiled = compile(code);
      setCompiled(compiled);
      setError("");
    } catch (e) {
      setCompiled(null);
      setError(e.toString());
    }
  }, [code, wasmLoaded]);

  return (
    <div className="container">
      <div className="left-column">
        <textarea
          rows={20}
          cols={50}
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="Enter Python code here"
          style={{ fontFamily: "monospace", fontSize: "1rem", width: "100%" }}
        />
        <Console error={error} />
      </div>
      <div className="right-column">
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
};

export default App;
