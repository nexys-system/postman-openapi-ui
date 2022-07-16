const isJSONFormat = (s: string): boolean => {
  try {
    JSON.parse(s);
    return true;
  } catch (e) {
    return false;
  }
};

export const isContent = (content?: string): content is string =>
  !!content &&
  content !== "" &&
  typeof content === "string" &&
  isJSONFormat(content);

export const saveByteArray = (
  fileName: string,
  content: string,
  type: string = "application/text"
) => {
  const blob = new Blob([content], { type });
  const link = document.createElement("a");
  link.href = window.URL.createObjectURL(blob);

  //link.download = fileName;
  link.setAttribute("download", fileName);
  link.click();
};

export const loadExample = async () => {
  const pathPrefix = "/postman-openapi-ui";
  const examplePath = pathPrefix + "/example.json";
  const r = await fetch(examplePath);
  return r.text();
};
