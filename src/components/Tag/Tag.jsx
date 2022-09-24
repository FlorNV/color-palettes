import React from "react";
import "./Tag.css";

const Tag = ({ tag }) => {
  console.log(tag);
  return <span className="tag">{tag.value}</span>;
};

export default Tag;
