import JsonView from "@uiw/react-json-view";
import { darkTheme } from "@uiw/react-json-view/dark";
import { lightTheme } from "@uiw/react-json-view/light";
import styles from "./BytecodeViewer.module.css";

const BytecodeViewer = ({ codeObject, darkMode }) => (
  <>
    {codeObject && (
      <JsonView
        style={darkMode ? darkTheme : lightTheme}
        value={codeObject}
        enableClipboard={false}
        displayObjectSize={false}
      />
    )}
    {!codeObject && (
      <div
        className={`${styles.outputContainer} ${darkMode ? styles.darkMode : ""}`}
      >
        See error.
      </div>
    )}
  </>
);

export default BytecodeViewer;
