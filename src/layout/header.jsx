import axios from "axios";
import { useEffect } from "react";
import LoginButton from "./LoginButton";
import { Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
const naverLogin = () => {
  window.location.href = "http://localhost:8080/oauth2/authorization/naver";
};
const getData = (dispatch) => {
  axios
    .get("http://localhost:8080/my", { withCredentials: true })
    .then((res) => {
      console.log(res.data + "userInfo받음");
      dispatch({ type: "SET_USER_INFO", payload: res.data });
    })
    .catch((error) => console.log(error));
};
const showDetailData = (userInfo) => {
  alert(userInfo.name);
};
const logout = () => {
  window.location.href = "http://localhost:8080/logout";
};
export default function HeaderLayout() {
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.userInfo);

  useEffect(() => {
    if (!userInfo) {
      console.log("간다");
      getData(dispatch);
    }
  }, []);
  return (
    <>
      <header className="flex items-center justify-between p-4 bg-orange-300 shadow-md">
        <div className="flex items-center space-x-2">
          <p className="text-lg font-bold bg-orange-500 px-4 py-2 rounded-lg shadow">
            {userInfo
              ? userInfo.regDate + "에 로그인하였습니다."
              : "로그인 하세요~"}
          </p>
        </div>

        {/* 오른쪽 - 버튼 그룹 */}
        <div className="flex space-x-4">
          <LoginButton
            clickEvent={
              !userInfo ? () => naverLogin() : () => showDetailData(userInfo)
            }
          >
            {!userInfo ? "네이버로그인" : userInfo.name + "계정정보 확인"}
          </LoginButton>
          <LoginButton clickEvent={logout}>로그아웃(아직 미구현)</LoginButton>
        </div>
      </header>
      <Outlet />
    </>
  );
}
