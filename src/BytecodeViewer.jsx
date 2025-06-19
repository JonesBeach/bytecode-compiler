import JsonView from "@uiw/react-json-view";

const BytecodeViewer = ({ codeObject }) => (
  <>
    {codeObject && (
      <JsonView
        value={codeObject}
        enableClipboard={false}
        displayObjectSize={false}
      />
    )}
    {!codeObject && <div style={{ fontFamily: "monospace" }}>See error.</div>}
  </>
);

export default BytecodeViewer;
