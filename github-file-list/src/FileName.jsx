import React from "react";
import PropTypes from "prop-types";
import FileIcon from "./FileIcon";

function FileName({ file }) {
  return (
    <>
      <FileIcon file={file} />
      <span className="file-name">{file.name}</span>
    </>
  );
}

FileName.propTypes = {
  file: PropTypes.object.isRequired,
};

export default FileName;
