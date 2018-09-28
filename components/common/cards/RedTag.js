import React from "react";

const Tag = ({ children, style }) => {
  return (
    <div style={{ display: "inline-block", ...style }}>
      <div
        style={{
          padding: "5px 10px",
          backgroundColor: "rgb(233, 30, 99)",
          color: "white",
          marginRight: 8,
          marginBottom: 8,
          borderRadius: "10px"
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default Tag;
