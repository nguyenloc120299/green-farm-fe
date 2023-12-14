import { getMe } from 'api/auth';
import { StatusCode } from 'api/core';
import { TYPE_LOADING } from 'contants';
import { useFnLoading } from 'hooks/useLoading';
import { useAppDispatch } from 'store';
import { setLoginApp } from 'store/app';
import { setUser } from 'store/user';

const useApiUser = () => {
    const { onLoading } = useFnLoading();
    const dispatch = useAppDispatch()
    const fetchUser = async (hideLoadScreen?:boolean) => {
        !hideLoadScreen && onLoading({
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
  return {
    fetchUser
  }
}

export default useApiUser