import React from "react";
import { useParams } from "react-router";
import { NavLink, Outlet, useNavigate, useLocation } from "react-router-dom";

export default function Product({ ...props }) {
  const navigate = useNavigate();
  const location = useLocation();
  const { id } = useParams();

  function handleClick() {
    navigate("/");
  }

  const base_url = `/${props.url.group}/${props.url.src}`;

  console.log(props);

  return (
    <>
      <span className="script-title">{props.url.title}</span>
      <span className="script-border" />
      <button className="button" onClick={handleClick}>
        go home
      </button>
      <div className="note">
        <ul title={id}>
          <li>
            <NavLink to={`${base_url}/category`} style={({ isActive }) => ({ color: isActive ? "pink" : "white" })}>
              Category
            </NavLink>
          </li>
          <li>
            <NavLink to={`${base_url}/name`} style={({ isActive }) => ({ color: isActive ? "pink" : "white" })}>
              Name
            </NavLink>
          </li>
          <li>
            <NavLink to={`${base_url}/price`} style={({ isActive }) => ({ color: isActive ? "pink" : "white" })}>
              Price
            </NavLink>
          </li>
        </ul>
      </div>
      <Outlet />
    </>
  );
}
