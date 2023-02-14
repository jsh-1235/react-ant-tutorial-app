import React, { useState, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";

import SideMenu, { getItem } from "../../components/SideMenu";
import Painter from "../../components/Painter";

import { AppstoreOutlined, SettingOutlined } from "@ant-design/icons";

import SearchKey from "../../components/SearchKey";

import Script1 from "./contents/product/Product";
import Script2 from "./contents/FormSearch";

const group = "router";

const pages = [
  { key: "1", url: "script1", label: "Product" },
  { key: "2", url: "script2", label: "Form Search" },
];

const items = [
  getItem(
    group,
    <AppstoreOutlined />,
    group.toUpperCase(),
    pages.map((item, index) => getItem(item.key, <SettingOutlined />, <Link to={`/${group}/${item.url}`}>{item.label}</Link>)),
    group
  ),
];

export default function Router() {
  const location = useLocation();

  const find = useCallback(() => {
    return SearchKey(pages, location, 2);
  }, [location]);

  const [url, setURL] = useState(() => {
    const index = Number(find()) - 1;

    console.log("index", index);

    if (index !== -1) {
      return {
        group,
        index,
        key: pages[index].key,
        title: pages[index].label,
        src: pages[index].url,
      };
    } else {
      return {
        group,
        index,
        key: "0",
        title: group,
      };
    }
  });

  const onSelect = (index) => {
    setURL({
      ...url,
      index,
      key: pages[index].key,
      title: pages[index].label,
      src: pages[index].url,
    });
  };

  const contents = [
    { ...pages[0], content: <Script1 url={url} /> },
    { ...pages[1], content: <Script2 url={url} /> },
  ];

  return (
    <>
      <SideMenu items={items} url={url} onSelect={onSelect} />
      <Painter contents={contents} url={url} nested={true} />
    </>
  );
}
