import React, { memo } from "react";
import styles from "../../contents/Common.module.css";

function Child({ name }) {
  console.log(name);

  console.log("Rendering - Child");

  return <div className={styles.result}>{`Child ${name.last}${name.first}`}</div>;
}

// export default Child;
export default memo(Child);
