import React, { useState, useEffect, useRef, useCallback } from "react";

import { useSearchParams } from "react-router-dom";

import { Button, Form, Input, InputNumber, Space, Divider } from "antd";

const { Search } = Input;

const layout = {
  labelCol: {
    offset: 0,
    span: 2,
  },
  wrapperCol: {
    offset: 0,
    span: 20,
  },
};

const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};

export default function FormSearch({ ...props }) {
  const inputRef = useRef(null);

  const [searchParams, setSearchParams] = useSearchParams();

  let user = searchParams.get("user");

  const [data, setData] = useState();

  const getUser = useCallback(async () => {
    console.log("useCallback", user);

    const abortController = new AbortController();

    const response = await fetch(`https://api.github.com/users/${user}`, {
      signal: abortController.signal,
    });

    if (!abortController.signal.aborted) {
      const json = await response.json();

      setData(json);
    } else {
      console.log("aborted");
    }
  }, [user]);

  const randomUser = () => {
    let users = ["chaance", "jacob-ebey", "mcansh", "mjackson", "ryanflorence"];

    console.log(users.join("-"));

    return users[Math.floor(Math.random() * users.length)];
  };

  useEffect(() => {
    return () => {
      // abortController.abort();
    };
  }, []);

  useEffect(() => {
    console.log("user", user);

    getUser();
  }, [user]);

  useEffect(() => {
    console.log(data);
  }, [data]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const newUser = formData.get("user");

    console.log("newUser", newUser);

    if (!newUser) return;

    setSearchParams({ user: newUser });

    inputRef.current.value = "";
    inputRef.current.focus();
  };

  const handleRadom = (e) => {
    e.preventDefault();

    const newUser = randomUser();

    console.log("newUser", newUser);

    if (newUser === user) {
      console.error("It's the same data.");

      handleRadom(e);
    } else {
      setSearchParams({ user: newUser });
    }
  };

  const onFinish = (values) => {
    console.log("Success:", values);

    setSearchParams({ user: values.user });
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const handleSearch = (value) => {
    console.log("search", typeof value);

    setSearchParams({ user: value });
  };

  // JSON.stringify(value, replacer, space);
  // Indent the output with one space:
  const result = JSON.stringify(data, null, 2) ?? "The data does not exist.";

  return (
    <>
      <span className="script-title">{props.url.title}</span>
      <span className="script-border" />
      <div style={{ backgroundColor: "#f5f5f5", height: "100%", padding: "10px", color: "black" }}>
        <Space direction="vertical" size={[0, 16]} wrap>
          <form action="" onSubmit={handleSubmit}>
            <label className="label" htmlFor="user">
              User
            </label>
            <input
              className="input"
              ref={inputRef}
              style={{
                height: "32px",
              }}
              type="text"
              id="user"
              name="user"
              defaultValue={user ?? undefined}
            />
            <button
              className="button"
              style={{
                height: "32px",
              }}
              type="submit">
              Search
            </button>
          </form>

          <form action="" onSubmit={handleRadom}>
            <label htmlFor="random">Random</label>
            <button
              className="button"
              style={{
                height: "32px",
              }}
              id="random"
              name="random"
              type="submit">
              Random
            </button>
          </form>

          <Form {...layout} validateMessages={validateMessages} onFinish={onFinish} onFinishFailed={onFinishFailed} autoComplete="off">
            <Form.Item
              name="user"
              label="Name"
              rules={[
                {
                  required: true,
                },
              ]}>
              <Input />
            </Form.Item>
            <Form.Item
              wrapperCol={{
                ...layout.wrapperCol,
                offset: 2,
              }}>
              <Button
                style={{
                  width: "100%",
                }}
                type="primary"
                htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>

          <Search
            addonBefore="Search"
            placeholder="input search text"
            allowClear
            onSearch={handleSearch}
            style={{
              width: 400,
            }}
          />
          {data && (
            <div>
              <img style={{ borderRadius: "50%" }} width={100} height={100} src={data.avatar_url} alt={data.login} />
              <p>{data.name}</p>
              <p>{data.bio}</p>
            </div>
          )}
          <pre>{result}</pre>
        </Space>
      </div>
    </>
  );
}
