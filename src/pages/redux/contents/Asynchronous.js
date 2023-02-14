import styles from "./Common.module.css";

import React, { useEffect } from "react";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import * as counterActions from "./reducers/counter";
import * as postActions from "./reducers/post";

const getPost = async (actions, id) => {
  try {
    console.log(id);

    await actions.getPost(id);
    console.log("Executed after the request completes.");
  } catch (e) {
    console.log(e.message);
  }
};

function Asynchronous({ ...props }) {
  useEffect(() => {
    console.log("componentDidMount");

    return () => {
      console.log("cleanup");
    };
  }, []);

  useEffect(() => {
    const { PostActions } = props;

    getPost(PostActions, props.id);
  }, [props.id]);

  const { CounterActions, id, data, loading, error } = props;

  return (
    <>
      <span className="script-title">{props.url.title}</span>
      <span className="script-border" />
      <div>
        <button className="button" onClick={CounterActions.decrement}>
          -
        </button>
        <span style={{ display: "inline" }}>{id}</span>
        <button className="button" onClick={CounterActions.increment}>
          +
        </button>
      </div>
      {loading && <div className={styles.loading}>Loading...</div>}
      {error ? (
        <div className={styles.error}>Error!!!</div>
      ) : (
        <div>
          <div className={styles.title}>{data.title}</div>
          <div className={styles.content}>{data.body}</div>
        </div>
      )}
    </>
  );
}

export default connect(
  (state) => ({
    id: state.counter,
    data: state.post.data,
    loading: state.pender.pending["GET"],
    error: state.pender.failure["GET"],
  }),
  (dispatch) => ({
    CounterActions: bindActionCreators(counterActions, dispatch),
    PostActions: bindActionCreators(postActions, dispatch),
  })
)(Asynchronous);
