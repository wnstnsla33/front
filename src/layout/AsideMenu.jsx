import { NavLink } from "react-router-dom";
import LoginPopup from "./LoginPopup";
import { useState } from "react";
import { useSelector } from "react-redux";
export default function AsideMenu() {
  const user = useSelector((state) => state.userInfo);
  const [ShowPopup, setShowPopup] = useState(false);
  return (
    <aside className="w-48 h-full bg-gray-100 p-5 shadow-md rounded-tr-lg rounded-br-lg ">
      <NavLink
        to="home"
        className={({ isActive }) =>
          isActive
            ? "block my-2 text-blue-500 text-xl no-underline hover:text-blue-500"
            : "block my-2 text-gray-800 text-xl no-underline hover:text-blue-500"
        }
      >
        메인
      </NavLink>
      <NavLink
        to="post"
        end
        className={({ isActive }) =>
          isActive
            ? "block my-2 text-blue-500 text-xl no-underline hover:text-blue-500"
            : "block my-2 text-gray-800 text-xl no-underline hover:text-blue-500"
        }
      >
        게시판
      </NavLink>
      <NavLink
        to="post/new"
        onClick={(e) => {
          if (!user || Object.keys(user).length === 0) {
            e.preventDefault(); // 페이지 이동 방지
            setShowPopup(true); // 팝업 표시
          }
        }}
        className={({ isActive }) =>
          isActive
            ? "block my-2 text-blue-500 text-xl no-underline hover:text-blue-500"
            : "block my-2 text-gray-800 text-xl no-underline hover:text-blue-500"
        }
      >
        글 쓰기
      </NavLink>
      {ShowPopup && <LoginPopup setShowPopup={setShowPopup} />}
    </aside>
  );
}
