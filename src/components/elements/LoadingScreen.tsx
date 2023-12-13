import { LoadindScrenStyled } from "globalStyles/loadingscreen";
import img1 from "assets/mipmap-xxxhdpi-v4/dialog_guide_people.png";
import { useLoading } from "hooks/useLoading";
import { TYPE_LOADING } from "contants";

const LoadingScreen = () => {
  const loading = useLoading(TYPE_LOADING.LOAD_SCREEN);
  return (
    <>
      {loading && (
        <LoadindScrenStyled>
          <div className="flex justify-center items-center img-load">
            <img src={img1} alt="" />
          </div>
          <div className="text-title">Xin chờ ...</div>
        </LoadindScrenStyled>
      )}
    </>
  );
};

export default LoadingScreen;
