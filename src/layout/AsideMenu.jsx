import { NavLink } from "react-router-dom";

export default function AsideMenu() {
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
        className={({ isActive }) =>
          isActive
            ? "block my-2 text-blue-500 text-xl no-underline hover:text-blue-500"
            : "block my-2 text-gray-800 text-xl no-underline hover:text-blue-500"
        }
      >
        글 쓰기
      </NavLink>
    </aside>
  );
}
