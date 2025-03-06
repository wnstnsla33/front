import { DeleteButton } from "./PostButton";
import { useState } from "react";

export function PostDetailView({ detail, isAuthor, onEdit }) {
  return (
    <div className="h-screen p-8 bg-orange-50 flex flex-col">
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

      <div className="max-w-4xl mx-auto w-full mt-8 flex-grow flex flex-col">
        <div
          className="flex-grow bg-orange-100 p-6 rounded-lg shadow-inner overflow-y-auto"
          style={{ maxHeight: "calc(100vh - 400px)" }}
        >
          <p className="text-2xl text-orange-800 whitespace-pre-wrap">
            {detail.content}
          </p>
        </div>

        {isAuthor && (
          <div className="mt-6 text-right">
            <button
              onClick={onEdit}
              className="py-2 px-4 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors duration-300"
            >
              수정하기
            </button>
            <DeleteButton id={detail.postId} />
          </div>
        )}
      </div>
    </div>
  );
}

export function PostEditForm({ detail, onUpdate, onCancel }) {
  const [newTitle, setNewTitle] = useState(detail.title);
  const [newContent, setNewContent] = useState(detail.content);

  return (
    <div className="h-screen p-8 bg-orange-50 flex flex-col">
      <div className="max-w-4xl mx-auto w-full">
        <h3 className="text-4xl font-bold text-orange-700 mb-6">게시글 수정</h3>
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

      <div className="max-w-4xl mx-auto w-full mt-8 flex-grow flex flex-col space-y-4">
        <input
          type="text"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          className="w-full p-4 text-2xl border-2 border-orange-300 rounded-lg focus:ring-4 focus:ring-orange-500 outline-none"
        />
        <textarea
          value={newContent}
          onChange={(e) => setNewContent(e.target.value)}
          rows="10"
          className="w-full p-4 text-lg border-2 border-orange-300 rounded-lg focus:ring-4 focus:ring-orange-500 outline-none resize-y"
        />
        <div className="mt-6 text-right">
          <button
            onClick={() => onUpdate(newTitle, newContent)}
            className="py-2 px-4 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors duration-300"
          >
            수정 완료
          </button>
          <button
            onClick={onCancel}
            className="ml-4 py-2 px-4 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors duration-300"
          >
            취소
          </button>
        </div>
      </div>
    </div>
  );
}
