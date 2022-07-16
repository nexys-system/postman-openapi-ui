import { title, github } from "./config";

import Content from "./content";

export default () => (
  <>
    <h1>{title}</h1>

    <Content />

    <p>
      <a href={github.url}>
        <i className="fa fa-code"></i> Source
      </a>
      &nbsp;available under MIT license. Contributions are welcome.
    </p>
  </>
);
