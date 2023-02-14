import styles from "./Painter.module.css";

import React, { useEffect, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

const Detail = React.lazy(() => import("../pages/router/contents/product/Detail.js"));

export default function Painter({ ...props }) {
  useEffect(() => {
    return () => {};
  }, []);

  return (
    <div className={styles.painter}>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {props.contents.map((content, i) => {
            return props.nested ? (
              <Route key={i} path={`/${content.url}/*`} element={content.content}>
                <Route path=":id" element={<Detail url={content.url} />} />
              </Route>
            ) : (
              <Route key={i} path={`/${content.url}`} element={content.content} />
            );
          })}
          <Route path="/" element={<div className={styles.home}>{props.url.title}</div>} />
          <Route
            path="*"
            element={
              <div className={styles.none}>
                <div>{props.url.title}</div>
                <div>404 Not Found</div>
              </div>
            }
          />
          {/* <Route path="*" element={<Navigate to="/none" />} /> */}
        </Routes>
      </Suspense>
    </div>
  );
}
