import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
export default function PostDetail() {
  const { id } = useParams(); // URL에서 id 값 가져오기
  const [detail, setDetail] = useState(null); // 상태 관리
  const userInfo = useSelector((state) => state.userInfo);
  useEffect(() => {
    axios
      .get(`http://localhost:8080/post/${id}`, { withCredentials: true })
      .then((res) => setDetail(res.data)) // 데이터를 상태에 저장
      .catch((error) => console.log(error));
  }, [id]); // id가 변경될 때마다 실행

  if (!detail) {
    return (
      <p className="text-center text-orange-500 text-xl mt-10">Loading...</p>
    ); // 로딩 중 메시지
  }

  // 🔥 현재 로그인한 사용자가 작성자인지 확인
  const isAuthor = userInfo.name === detail.userName;

  return (
    <div className="h-screen p-8 bg-orange-50 flex flex-col">
      {/* 제목 및 메타 정보 */}
      <div className="max-w-4xl mx-auto w-full">
        <h3 className="text-4xl font-bold text-orange-700 mb-6">
          {detail.title}
        </h3>
        <div className="space-y-2 text-orange-600">
          <p>
            <span className="font-semibold">작성자:</span> {detail.userName}
          </p>
          <p>
            <span className="font-semibold">조회수:</span> {detail.viewCount}
          </p>
          <p>
            <span className="font-semibold">작성일:</span> {detail.createdDate}
          </p>
          <p>
            <span className="font-semibold">수정일:</span>{" "}
            {detail.lastModifiedDate}
          </p>
        </div>
      </div>

      {/* 본문 내용 */}
      <div className="max-w-4xl mx-auto w-full mt-8 flex-grow flex flex-col">
        <div
          className="flex-grow bg-orange-100 p-6 rounded-lg shadow-inner overflow-y-auto"
          style={{ maxHeight: "calc(100vh - 400px)" }} // 화면 높이에 맞게 조정
        >
          <p className="text-2xl text-orange-800 whitespace-pre-wrap">
            {detail.content}
          </p>
        </div>

        {/* 🔥 작성자만 수정/삭제 버튼 표시 */}
        {isAuthor && (
          <div className="mt-6 text-right">
            <button
              className="inline-block py-2 px-4 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors duration-300"
              onClick={() => {
                alert("수정하기 기능 구현 예정");
              }}
            >
              수정하기
            </button>
            <button
              className="m-6 inline-block py-2 px-4 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors duration-300"
              onClick={() => {
                alert("삭제하기 기능 구현 예정");
              }}
            >
              삭제
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
