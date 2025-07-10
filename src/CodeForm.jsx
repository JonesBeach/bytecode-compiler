import styles from "./CodeForm.module.css";

const CodeForm = ({ code, setCode, darkMode }) => (
  <textarea
    className={`${styles.codeForm} ${darkMode ? styles.darkMode : ""}`}
    value={code}
    onChange={(e) => setCode(e.target.value)}
    placeholder="Enter Python code here"
  />
);

export default CodeForm;
