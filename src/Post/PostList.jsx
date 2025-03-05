import { Link } from "react-router-dom";
import PostButton from "./PostButton";
import document from "../image/document.jpg";
export function PostList({ postList }) {
  return (
    <div className="min-h-screen p-8 bg-orange-50">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {" "}
        {/* 2그리드 레이아웃 */}
        {postList.map((post) => (
          <div
            key={post.postId}
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <h3 className="text-2xl font-bold text-orange-700 mb-4">
              {post.title}
            </h3>{" "}
            {/* 제목 스타일 */}
            <p className="text-orange-800 mb-4 line-clamp-3">
              {post.content}
            </p>{" "}
            {/* 내용 스타일 (3줄 제한) */}
            <div className="space-y-2 text-orange-600 mb-4">
              {" "}
              {/* 메타 정보 스타일 */}
              <p>
                <span className="font-semibold">작성자:</span> {post.userName}
              </p>
              <p>
                <span className="font-semibold">조회수:</span> {post.viewCount}
              </p>
            </div>
            <Link
              to={`/post/${post.postId}`}
              className="inline-block py-2 px-4 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors duration-300"
            >
              자세히 보기
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
export function NoPost() {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <img className="mb-4" src={document} />
      <PostButton>{"새 글쓰기"}</PostButton>
    </div>
  );
}
