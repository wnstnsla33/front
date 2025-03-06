import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
export default function PostWrite() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate(); // ✅ 페이지 이동을 위한 useNavigate 사용

  // body: JSON.stringify({ title, content }),
  const handleSubmit = () => {
    axios.post(
      "http://localhost:8080/post/new",
      { title, content },
      {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      }
    );
    navigate("/post");
  };
  return (
    <div className="w-full min-h-screen mx-auto  p-12 bg-orange-100 rounded-lg shadow-xl">
      <h2 className="text-3xl font-bold text-orange-600 mb-10">게시글 작성</h2>{" "}
      <form onSubmit={handleSubmit} className="flex flex-col space-y-6">
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
          게시글 작성
        </button>
      </form>
    </div>
  );
}
