import React from "react";
import { Link } from "react-router-dom";

import { Empty, Button } from "antd";

function NotFound() {
  const style = {
    gridColumn: "1 / span 2",
    alignSelf: "center",
    justifySelf: "center",
  };

  return (
    <div style={style}>
      <Empty
        image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
        imageStyle={{
          height: 60,
        }}
        description={<span>404 Not Found</span>}>
        <Button type="primary">
          <Link to={"/"}>Go to Home</Link>
        </Button>
      </Empty>
    </div>
  );
}

export default NotFound;
