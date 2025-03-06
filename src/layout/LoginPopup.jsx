import { useNavigate } from "react-router-dom";
export default function LoginPopup({ setShowPopup }) {
  const navigate = useNavigate();

  const handleConfirm = () => {
    navigate("/"); // 확인 버튼을 누르면 /post로 이동
    setShowPopup(false);
  };

  return (
    <>
      {
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <p className="text-lg mb-4">
              로그인이 필요합니다. 로그인 페이지로 이동하시겠습니까?
            </p>
            <button
              onClick={handleConfirm}
              className="bg-orange-500 text-white px-4 py-2 rounded-lg mr-2 hover:bg-orange-600"
            >
              확인
            </button>
          </div>
        </div>
      }
    </>
  );
}
