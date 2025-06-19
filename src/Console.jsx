const needsExtra = (error) => error.indexOf("Unsupported feature") !== -1;

const buildExtra = () => {
  return (
    <p>
      For a full list, see the{" "}
      <a href="https://github.com/JonesBeach/memphis/blob/main/docs/SUPPORTED.md">
        Memphis documentation
      </a>
      .
    </p>
  );
};

const Console = ({ error }) => {
  const firstLine = error ? error : "Success!";
  const secondLine = needsExtra(error) ? buildExtra() : null;
  return (
    <pre>
      {firstLine}
      {secondLine}
    </pre>
  );
};

export default Console;
