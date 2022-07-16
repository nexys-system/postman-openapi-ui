import React from "react";

const isContent = (content?: string): content is string =>
  !!content && content !== "" && typeof content === "string";

const Form = ({ onSubmit }: { onSubmit: (content: string) => void }) => {
  const [content, setContent] = React.useState<string | undefined>();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isContent(content)) {
      onSubmit(content);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea value={content} onChange={(v) => setContent(v.target.value)} />
      <br />
      <button type="submit" className="btn btn-primary">
        Convert!
      </button>
    </form>
  );
};

export default Form;
