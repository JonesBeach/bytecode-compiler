import JsonView from "@uiw/react-json-view";
import { darkTheme } from "@uiw/react-json-view/dark";
import { lightTheme } from "@uiw/react-json-view/light";

const BytecodeViewer = ({ codeObject, darkMode = false }) => (
  <>
    {codeObject && (
      <JsonView
        style={darkMode ? darkTheme : lightTheme}
        value={codeObject}
        enableClipboard={false}
        displayObjectSize={false}
      />
    )}
    {!codeObject && <div style={{ fontFamily: "monospace" }}>See error.</div>}
  </>
);

export default BytecodeViewer;
