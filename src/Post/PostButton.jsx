import { NavLink } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import LoginPopup from "../layout/LoginPopup";
export default function PostButton({ children, style }) {
  const [ShowPopup, setShowPopup] = useState(false);
  const user = useSelector((state) => state.userInfo);
  return (
    <>
      <NavLink to={"/post/new"}>
        <button
          onClick={(e) => {
            if (!user || Object.keys(user).length === 0) {
              e.preventDefault(); // 페이지 이동 방지
              setShowPopup(true); // 팝업 표시
            }
          }}
          className={style}
        >
          {children}
        </button>
      </NavLink>
      {ShowPopup && <LoginPopup setShowPopup={setShowPopup} />}
    </>
  );
}
export function DeleteButton({ id, refreshPost }) {
  const navigate = useNavigate();
  const deletePost = (id) => {
    console.log(id);
    axios
      .delete(`http://localhost:8080/post/delete/${id}`, {
        withCredentials: true,
      })
      .then((res) => {
        alert(res.data);
        if (refreshPost != null) refreshPost();
        navigate("/post");
      })
      .catch((err) => {
        alert("삭제 실패" + err.message);
      });
  };
  return (
    <button
      onClick={() => deletePost(id)}
      className="inline-block py-2 px-4 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors duration-300 m-4"
    >
      삭제
    </button>
  );
}
