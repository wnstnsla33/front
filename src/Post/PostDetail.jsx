import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export default function PostDetail() {
  const { id } = useParams(); // URL에서 id 값 가져오기
  const [detail, setDetail] = useState(null); // 상태 관리

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

  return (
    <div className="min-h-screen p-8 bg-orange-50 flex flex-col">
      {" "}
      {/* 화면 전체 높이, 여백 추가, flex로 정렬 */}
      {/* 제목 및 메타 정보 */}
      <div className="max-w-4xl mx-auto w-full">
        <h3 className="text-4xl font-bold text-orange-700 mb-6">
          {detail.title}
        </h3>{" "}
        {/* 제목 크게 */}
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
      {/* 내용 (남은 공간 전체를 차지하도록 설정) */}
      <div className="max-w-4xl mx-auto w-full mt-8 flex-grow flex flex-col">
        <div className="flex-grow bg-orange-100 p-6 rounded-lg shadow-inner">
          {" "}
          {/* 내용 배경색 및 스타일 */}
          <p className="text-2xl text-orange-800">{detail.content}</p>{" "}
          {/* 내용 크게 */}
        </div>
      </div>
    </div>
  );
}
