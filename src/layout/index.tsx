import { Outlet } from "react-router-dom";
import styled from "styled-components";
import bg from "assets/bg/bg-main.jpg";
import MainHeader from "./MainHeader";
import MainFooter from "./MainFooter";
import useContentResizer from "hooks/useContentResizer";
import SeedsBox from "components/ui/SeedsBox";
import Modals from "components/modal";
import LoginMain from "components/ui/LoginMain";
import Loading from "components/elements/Loading";
import BoxNotification from "components/elements/BoxNotification";
import { useAppDispatch, useAppSelector } from "store";
import { getMe } from "api/auth";
import { StatusCode, getAuhorization } from "api/core";
import { useEffect } from "react";
import LoadingScreen from "components/elements/LoadingScreen";
import { useFnLoading } from "hooks/useLoading";
import { TYPE_LOADING } from "contants";
import { setUser } from "store/user";
import { setLoginApp } from "store/app";
const Layout = () => {
  const height = useContentResizer();
  const isLogin = useAppSelector((state) => state.app.isLogin);
  const accessToken = getAuhorization().accessToken;
  const { user } = useAppSelector((state) => state.user);
  const { onLoading } = useFnLoading();
  const dispatch = useAppDispatch()
  const fetchUser = async () => {
    onLoading({
      type: TYPE_LOADING.LOAD_SCREEN,
      value: true,
    });
    try {
      const result = await getMe();
      if (result.statusCode === StatusCode.SUCCESS) {
        dispatch(setUser(result.data));
        dispatch(setLoginApp(true));
      }
    } catch (error) {
      localStorage.clear();
    }
    onLoading({
      type: TYPE_LOADING.LOAD_SCREEN,
      value: false,
    });
  };

  useEffect(() => {
    if (accessToken && !user) {
      fetchUser();
    }
  }, []);

  return (
    <LayoutStyle bg={bg} height={height}>
      <LoadingScreen />
      <Modals />
      <BoxNotification />
      <Loading />
      <div className="main-page">
        {isLogin ? (
          <>
            <SeedsBox />
            <MainHeader />
            <div className="farm">
              <Outlet />
            </div>
            <MainFooter />
          </>
        ) : (
          <LoginMain />
        )}
      </div>
    </LayoutStyle>
  );
};

export default Layout;

const LayoutStyle: any = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  .main-page {
    max-width: 478px;
    height: ${(props: any) => props?.height}px;
    width: 100%;
    background: url(${(props: any) => props.bg});
    background-position: center;
    background-size: cover;
    position: relative;

    @media (max-width: 478px) {
      height: ${(props: any) => props.height}px;
    }
    .farm {
      display: grid;
      grid-template-columns: repeat(12, 1fr);
      grid-template-rows: repeat(20, 1fr);
      grid-auto-rows: 1fr;
      height: 100%;
      overflow-y: clip;
    }
  }
`;
