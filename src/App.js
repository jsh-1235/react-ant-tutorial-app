import "./App.css";

import React, { useState, useEffect, useCallback, Suspense } from "react";

import { Route, Routes, Link, useLocation } from "react-router-dom";

import { Layout, Menu } from "antd";

import { AppstoreOutlined } from "@ant-design/icons";

import SearchKey from "./components/SearchKey";

const pages = [
  { key: "1", url: "", label: "home" },
  { key: "2", url: "styles", label: "styles" },
  { key: "3", url: "life-cycle", label: "life-cycle" },
  { key: "4", url: "router", label: "router" },
  { key: "5", url: "redux", label: "redux" },
  { key: "6", url: "syntax", label: "syntax" },
  { key: "7", url: "hooks", label: "hooks" },
];

const Home = React.lazy(() => import("./pages/Home"));
const Styles = React.lazy(() => import("./pages/styles/Styles"));
const LifeCycle = React.lazy(() => import("./pages/lifecycle/LifeCycle"));
const Router = React.lazy(() => import("./pages/router/Router"));
const Redux = React.lazy(() => import("./pages/redux/Redux"));
const Syntax = React.lazy(() => import("./pages/syntax/Syntax"));
const Hooks = React.lazy(() => import("./pages/hooks/Hooks"));
const NotFound = React.lazy(() => import("./pages/NotFound"));

function App() {
  const location = useLocation();

  const find = useCallback(() => {
    return SearchKey(pages, location, 1);
  }, [location]);

  const [match, setMatch] = useState(false);

  const [selectedKeys, setSelectedKeys] = useState(() => {
    return find();
  });

  useEffect(() => {
    // console.log("Mount");

    window.matchMedia("(min-width: 768px)").addEventListener("change", (e) => {
      setMatch(e.matches);
    });

    return () => {
      // console.log("Unmount");
    };
  }, []);

  useEffect(() => {
    // console.log("location", location);

    const key = find();

    setSelectedKeys(key);
  }, [find, location]);

  useEffect(() => {
    // console.log("match", match);
  }, [match]);

  useEffect(() => {
    // console.log("selectedKeys", selectedKeys);
  }, [selectedKeys]);

  useEffect(() => {
    // console.log("Rendering");
  });

  const handleSelectMenu = (item) => {
    setSelectedKeys(item.key);
  };

  return (
    <>
      <Layout style={{ minHeight: "100vh", backgroundColor: "white" }}>
        <header className="header">
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={[selectedKeys]}
            selectedKeys={[selectedKeys]}
            items={pages.map((page, index) => {
              const key = index + 1;
              return {
                key,
                label: <Link to={`/${page.url}`}>{`${String(page.label).toUpperCase()}`}</Link>,
                icon: <AppstoreOutlined />,
              };
            })}
            onClick={handleSelectMenu}></Menu>
        </header>
        <main className="main">
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/styles/*" element={<Styles />}>
                <Route path=":id" element={<Styles />} />
              </Route>
              <Route path="/life-cycle/*" element={<LifeCycle />}>
                <Route path=":id" element={<LifeCycle />} />
              </Route>
              <Route path="/router/*" element={<Router />}>
                <Route path=":id" element={<Router />} />
              </Route>
              <Route path="/redux/*" element={<Redux />}>
                <Route path=":id" element={<Redux />} />
              </Route>
              <Route path="/syntax/*" element={<Syntax />}>
                <Route path=":id" element={<Syntax />} />
              </Route>
              <Route path="/hooks/*" element={<Hooks />}>
                <Route path=":id" element={<Hooks />} />
              </Route>
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </main>
        <footer className="footer">It is ©2018 Created by BT Inc</footer>
      </Layout>
    </>
  );
}

export default App;
