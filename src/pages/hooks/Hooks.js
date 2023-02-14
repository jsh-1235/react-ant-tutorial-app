import React, { useState, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";

import SideMenu, { getItem } from "../../components/SideMenu";
import Painter from "../../components/Painter";

import { AppstoreOutlined, SettingOutlined } from "@ant-design/icons";

import SearchKey from "../../components/SearchKey";

import Script1 from "./contents/state/Counter";
import Script2 from "./contents/state/Timer";
import Script3 from "./contents/state/HeavyJob";
import Script4 from "./contents/ref/Counter";
import Script5 from "./contents/ref/Field";

import Script6 from "./contents/memoization/Calculator";
import Script7 from "./contents/memoization/Human";
import Script8 from "./contents/memoization/Counter";
import Script9 from "./contents/memoization/Paper";
import Script10 from "./contents/memoization/Parent";
import Script11 from "./contents/custom/InputText";
import Script12 from "./contents/custom/InputURL";

import Script13 from "./contents/context/Page";
import Script14 from "./contents/reducer/Bank";
import Script15 from "./contents/reducer/Recorder";

const group = "hooks";

const pages = [
  { key: "1", url: "script1", label: "State useState" },
  { key: "2", url: "script2", label: "State Cleanup" },
  { key: "3", url: "script3", label: "State Heavy Job" },
  { key: "4", url: "script4", label: "useRef" },
  { key: "5", url: "script5", label: "forwardRef" },
  { key: "6", url: "script6", label: "useMemo function return value" },
  { key: "7", url: "script7", label: "useMemo Object" },
  { key: "8", url: "script8", label: "useCallback Counter" },
  { key: "9", url: "script9", label: "useCallback Paper" },
  { key: "10", url: "script10", label: "React.memo" },
  { key: "11", url: "script11", label: "Custom Hooks Input Text" },
  { key: "12", url: "script12", label: "Custom Hooks Input URL" },
  { key: "13", url: "script13", label: "Context API" },
  { key: "14", url: "script14", label: "Reducer Bank" },
  { key: "15", url: "script15", label: "Reducer Recorder" },
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
    { ...pages[5], content: <Script6 url={url} /> },
    { ...pages[6], content: <Script7 url={url} /> },
    { ...pages[7], content: <Script8 url={url} /> },
    { ...pages[8], content: <Script9 url={url} /> },
    { ...pages[9], content: <Script10 url={url} /> },
    { ...pages[10], content: <Script11 url={url} /> },
    { ...pages[11], content: <Script12 url={url} /> },
    { ...pages[12], content: <Script13 url={url} /> },
    { ...pages[13], content: <Script14 url={url} /> },
    { ...pages[14], content: <Script15 url={url} /> },
  ];

  return (
    <>
      <SideMenu items={items} url={url} onSelect={onSelect} />
      <Painter contents={contents} url={url} />
    </>
  );
}
