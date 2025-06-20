import { useEffect, useState } from "react";
import init, { compile } from "../pkg/memphis.js";

import Console from "./Console";
import BytecodeViewer from "./BytecodeViewer";
import { getCodeFromURL, setCodeInURL } from "./urlState";
import styles from './App.module.css';

const INITIAL_CODE = `y = 42

def foo(x, z):
    return x + y + z

foo(11,12)`;

const App = () => {
  const [code, setCode] = useState("");
  const [error, setError] = useState("");
  const [codeObject, setCodeObject] = useState(null);
  const [wasmLoaded, setWasmLoaded] = useState(false);

  useEffect(() => {
    init().then(() => {
      setWasmLoaded(true);
      const initial = getCodeFromURL() || INITIAL_CODE;
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
    <div className={styles.container}>
      <div className={styles.leftColumn}>
        <div className={styles.codeContainer}>
          <textarea
            className={styles.codeForm}
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder="Enter Python code here"
          />
        </div>
        <div className={styles.consoleContainer}>
          <Console error={error} />
        </div>
      </div>
      <div className={styles.rightColumn}>
        <BytecodeViewer codeObject={codeObject} />
      </div>
    </div>
  );
};

export default App;
