import React, { useState, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";

import SideMenu, { getItem } from "../../components/SideMenu";
import Painter from "../../components/Painter";

import { AppstoreOutlined, SettingOutlined } from "@ant-design/icons";

import SearchKey from "../../components/SearchKey";

import Script1 from "./contents/worker/WebWorker";
import Script2 from "./contents/split/CodeSplit";
import Script3 from "./contents/ajax/Ajax";
import Script4 from "./contents/fragment/Fragment";
import Script5 from "./contents/fragment/Keys";

const group = "syntax";

const pages = [
  { key: "1", url: "script1", label: "Web Worker" },
  { key: "2", url: "script2", label: "Code Split" },
  { key: "3", url: "script3", label: "Ajax" },
  { key: "4", url: "script4", label: "React Fragment" },
  { key: "5", url: "script5", label: "List key" },
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

export default function Syntax() {
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
    });
  };

  const contents = [
    { ...pages[0], content: <Script1 url={url} /> },
    { ...pages[1], content: <Script2 url={url} /> },
    { ...pages[2], content: <Script3 url={url} /> },
    { ...pages[3], content: <Script4 url={url} /> },
    { ...pages[4], content: <Script5 url={url} /> },
  ];

  return (
    <>
      <SideMenu items={items} url={url} onSelect={onSelect} />
      <Painter contents={contents} url={url} />
    </>
  );
}
