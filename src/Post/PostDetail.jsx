import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { PostEditForm, PostDetailView } from "./PostEditOrDetailForm";

export default function PostDetail() {
  const { id } = useParams(); // URL에서 id 값 가져오기
  const [detail, setDetail] = useState(null);
  const [isEditing, setIsEditing] = useState(false); // 🔥 수정 모드 상태 추가
  const userInfo = useSelector((state) => state.userInfo);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/post/${id}`, { withCredentials: true })
      .then((res) => setDetail(res.data))
      .catch((error) => console.log(error));
  }, [id]);

  if (!detail) {
    return (
      <p className="text-center text-orange-500 text-xl mt-10">Loading...</p>
    );
  }

  const isAuthor = userInfo.name === detail.userName;

  // 🔥 제목 & 내용 수정
  const handleUpdate = (newTitle, newContent) => {
    axios
      .put(
        `http://localhost:8080/post/update/${id}`,
        { title: newTitle, content: newContent }, // 제목 + 내용 함께 전달
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      )
      .then(() => {
        setDetail((prev) => ({
          ...prev,
          title: newTitle,
          content: newContent,
        })); // 🔥 제목 & 내용 업데이트
        setIsEditing(false); // 수정 모드 종료
      })
      .catch((err) => alert("수정 실패: " + err.message));
  };

  return isEditing ? (
    <PostEditForm
      detail={detail}
      onUpdate={handleUpdate} // 🔥 수정 완료 시 제목 & 내용 업데이트
      onCancel={() => setIsEditing(false)}
    />
  ) : (
    <PostDetailView
      detail={detail}
      isAuthor={isAuthor}
      onEdit={() => setIsEditing(true)}
    />
  );
}
