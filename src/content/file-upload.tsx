import React from "react";

const FileUpload = ({ onChange }: { onChange: (s: string) => void }) => {
  const id = "file-upload";
  const handleChange = async (v: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = v.target;

    if (!files) {
      throw Error("file is not an array");
    }

    const data = await files[0].text();

    onChange(data);
  };
  return (
    <>
      <input
        onChange={handleChange}
        type="file"
        id={id}
        style={{ display: "none" }}
      />

      <label htmlFor={id} className={"btn btn-primary btn-sm"}>
        <i className="fa fa-upload"></i> Upload File
      </label>
    </>
  );
};

export default FileUpload;
