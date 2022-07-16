const Output = ({
  output,
  onReset,
}: {
  output: string;
  onReset: () => void;
}) => {
  const handleCopy = async () => {
    await navigator.clipboard.writeText(output || "");
    alert("copied to clipboard");
  };

  return (
    <>
      <ul className="list-inline">
        <li className="list-inline-item">
          <button
            type="button"
            className="btn btn-secondary btn-sm"
            onClick={handleCopy}
          >
            <i className="fa fa-copy"></i>&nbsp;Copy
          </button>
        </li>
        <li className="list-inline-item">
          <button
            className="btn btn-secondary btn-sm"
            type="button"
            onClick={onReset}
          >
            <i className="fa fa-rotate"></i>&nbsp;Reset
          </button>
        </li>
      </ul>

      <pre>{output}</pre>
    </>
  );
};

export default Output;
