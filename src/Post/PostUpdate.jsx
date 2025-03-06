import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

export default function PostEdit() {
  const { postId } = useParams(); // URL에서 postId 가져오기
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  const [viewCount, setViewCount] = useState(0);
  const [createdAt, setCreatedAt] = useState("");
  const [updatedAt, setUpdatedAt] = useState("");
  const navigate = useNavigate();

  // 기존 게시글 데이터 가져오기
  useEffect(() => {
    axios
      .get(`http://localhost:8080/post/${postId}`, { withCredentials: true })
      .then((res) => {
        setTitle(res.data.title);
        setContent(res.data.content);
        setAuthor(res.data.userName); // 작성자
        setViewCount(res.data.viewCount); // 조회수
        setCreatedAt(res.data.createdAt); // 작성일
        setUpdatedAt(res.data.updatedAt); // 수정일
      })
      .catch((err) => console.error("게시글 불러오기 실패:", err));
  }, [postId]);

  // 수정한 내용 서버로 전송
  const handleUpdate = (e) => {
    e.preventDefault();
    axios
      .put(
        `http://localhost:8080/post/update/${postId}`,
        { title, content },
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      )
      .then(() => {
        alert("게시글이 수정되었습니다.");
        navigate(`/post/${postId}`); // 수정 후 게시글 상세 페이지로 이동
      })
      .catch((err) => alert("수정 실패: " + err.message));
  };

  return (
    <div className="w-full min-h-screen mx-auto p-12 bg-orange-100 rounded-lg shadow-xl">
      <h2 className="text-3xl font-bold text-orange-600 mb-6">게시글 수정</h2>

      {/* 게시글 정보 (수정 불가) */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <p className="text-lg font-semibold text-gray-700">
          작성자: <span className="text-orange-600">{author}</span>
        </p>
        <p className="text-lg font-semibold text-gray-700">
          조회수: <span className="text-orange-600">{viewCount}</span>
        </p>
        <p className="text-lg font-semibold text-gray-700">
          작성일: <span className="text-gray-500">{createdAt}</span>
        </p>
        <p className="text-lg font-semibold text-gray-700">
          수정일: <span className="text-gray-500">{updatedAt}</span>
        </p>
      </div>

      {/* 게시글 수정 폼 */}
      <form onSubmit={handleUpdate} className="flex flex-col space-y-6">
        <input
          type="text"
          placeholder="제목을 입력하세요"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-4 text-lg border-2 border-orange-300 rounded-xl focus:ring-4 focus:ring-orange-500 outline-none"
          required
        />
        <textarea
          placeholder="내용을 입력하세요"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          rows="10"
          className="w-full p-4 text-lg border-2 border-orange-300 rounded-xl focus:ring-4 focus:ring-orange-500 outline-none resize-y"
          required
        ></textarea>
        <button
          type="submit"
          className="w-full py-3 px-6 bg-orange-500 text-white text-xl rounded-xl hover:bg-orange-600 transition-transform transform hover:scale-105"
        >
          수정 완료
        </button>
      </form>
    </div>
  );
}
