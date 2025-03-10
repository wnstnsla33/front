import { useState, useEffect } from "react";
import axios from "axios";
import { NoPost, PostList } from "./PostList";
import { useSelector } from "react-redux";
// const getPostList = (setPostList) => {
//   axios
//     .get("http://localhost:8080/post", { withCredentials: true })
//     .then((res) => setPostList(res.data))
//     .catch((error) => console.log(error));
// };

export default function Post() {
  const user = useSelector((state) => state.userInfo);
  var username = null;
  if (user != null) username = user.name;
  console.log(username);
  const [postList, setPostList] = useState([]);
  useEffect(() => {
    getPostList(setPostList);
  }, []);
  const getPostList = () => {
    axios
      .get("http://localhost:8080/post", { withCredentials: true })
      .then((res) => setPostList(res.data))
      .catch((error) => console.log(error));
  };
  return (
    <>
      <div>
        <h2>
          {postList.length > 0 ? (
            <PostList
              refreshPost={getPostList}
              username={username}
              postList={postList}
            />
          ) : (
            <NoPost />
          )}
        </h2>
      </div>
    </>
  );
}
