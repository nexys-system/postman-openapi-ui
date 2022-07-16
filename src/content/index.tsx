import React from "react";

import postmanToOpenApiWrap from "./postman";

import Form from "./form";
import Output from "./output";

enum State {
  form = 1,
  output = 2,
  loading = 3,
}

const Controller = () => {
  const [output, setOutput] = React.useState<string | undefined>();
  const [state, setState] = React.useState<State>(State.form);

  const handleSubmit = (content: string) => {
    setState(State.loading);

    postmanToOpenApiWrap(content)
      .then((x) => {
        setOutput(x);
        setState(State.output);
      })
      .catch((err) => {
        alert("something went wrong, see console for errors");
        console.log(err);
        setState(State.form);
      });
  };

  if (state === State.loading) {
    return (
      <p>
        <i>Loading...</i>
      </p>
    );
  }

  if (state === State.output && !!output) {
    return <Output output={output} onReset={() => setState(State.form)} />;
  }

  return <Form onSubmit={handleSubmit} />;
};

export default Controller;
