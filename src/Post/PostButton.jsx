import { Link } from "react-router-dom";
export default function PostButton({ children }) {
  return (
    <>
      <Link to={"/post/new"}>
        <button className=" text-center  bg-yellow-500 rounded py-2 px-4 ">
          {children}
        </button>
      </Link>
    </>
  );
}
