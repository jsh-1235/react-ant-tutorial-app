import { handleActions, createAction } from "redux-actions";
import { pender } from "redux-pender";
import axios from "axios";

const GET = "GET";

function getPostAPI(id) {
  return axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
}

export const getPost = createAction(GET, getPostAPI);

const initialState = {
  data: {
    title: "",
    body: "",
  },
};

export default handleActions(
  {
    ...pender({
      type: GET,
      onPending: (state, action) => {
        console.log("onPending", state);

        return state;
      },
      onSuccess: (state, action) => {
        console.log("onSuccess", action.payload.data);

        const { title, body } = action.payload.data;

        return {
          data: {
            title,
            body,
          },
        };
      },
      onFailure: (state, action) => {
        console.log("onFailure", state);

        return state;
      },
    }),
  },
  initialState
);
