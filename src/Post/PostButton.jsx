import { Link } from "react-router-dom";
export default function PostButton({ children, style }) {
  return (
    <>
      <Link to={"/post/new"}>
        <button className={style}>{children}</button>
      </Link>
    </>
  );
}
