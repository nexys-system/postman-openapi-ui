import React from "react";
import FileUpload from "./file-upload";
import { isContent } from "./utils";

const Form = ({ onSubmit }: { onSubmit: (content: string) => void }) => {
  const [content, setContent] = React.useState<string | undefined>();
  const [error, setError] = React.useState<string | undefined>();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!isContent(content)) {
      setError("please check the input");
      return;
    }

    onSubmit(content);
  };

  const handleExample = async () => {
    const r = await fetch("/postman-openapi-ui/example.json");
    const t = await r.text();
    setContent(t);
  };

  const handleFileChange = (data: string) => {
    if (!isContent(data)) {
      setError("please check the input");
      setContent(data);
      return;
    }

    onSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <ul className="list-inline">
          <li className="list-inline-item">
            <FileUpload onChange={handleFileChange} />
          </li>
          <li className="list-inline-item">
            <button
              onClick={handleExample}
              type="button"
              className="btn btn-secondary btn-sm"
            >
              <i className=" fa fa-file-import"></i> Use an example
            </button>
          </li>
          <li className="list-inline-item">
            <button
              onClick={() => setContent("")}
              type="button"
              className="btn btn-secondary btn-sm"
            >
              <i className=" fa fa-eraser"></i> Clear
            </button>
          </li>
        </ul>

        <textarea
          className={"form-control" + (!!error ? " is-invalid" : "")}
          id={"textInput"}
          required
          placeholder={"Paste here the content of your collection.json"}
          value={content}
          onChange={(v) => setContent(v.target.value)}
        />
        {!!error && <div className="invalid-feedback">{error}</div>}
      </div>

      <div className="mb-3">
        <button type="submit" className="btn btn-primary">
          Convert!
        </button>
      </div>
    </form>
  );
};

export default Form;
