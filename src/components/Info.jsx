import React from "react";

export const Info = ({ title, content, className }) => {
  return (
    <div className={className}>
      <h4 className="subtitle">{title}</h4>
      <p>{content}</p>
    </div>
  );
};
