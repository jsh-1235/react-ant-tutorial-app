import React from "react";

export default function Column({ items }) {
  return (
    <>
      {items.map((item) => {
        return (
          <React.Fragment key={item.id}>
            <td>{item.title}</td>
          </React.Fragment>
        );
      })}
    </>
  );
}
