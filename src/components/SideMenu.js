import styles from "./SideMenu.module.css";

import React, { useEffect } from "react";

import { Menu } from "antd";

export function getItem(key, icon, label, children, type) {
  return {
    key,
    icon,
    label,
    children,
    type,
  };
}

export default function SideMenu({ ...props }) {
  useEffect(() => {
    // console.log("url", props.url);
  }, [props.url]);

  const onClick = (e) => {
    props.onSelect(Number(e.key) - 1);
  };

  return (
    <>
      <Menu className={styles.menu} selectedKeys={[props.url.key]} defaultOpenKeys={[props.url.group]} mode="inline" items={props.items} onClick={onClick} />
    </>
  );
}
