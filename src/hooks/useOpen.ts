import { useCallback, useMemo } from "react";
import { useAppDispatch, useAppSelector } from "store";
import { setOpen } from "store/app";

type OpenType = {
  type: string;
  value: boolean;
};

export const useOpen = (type: string) => {
  const isOpen = useAppSelector((state) => state.app.isOpen) as any;

  return useMemo(() => isOpen[type], [isOpen, type]);
};

export const useFnOpen = () => {
  const dispatch = useAppDispatch();

  const handleOpen = useCallback(({ type, value }: OpenType) => {
    dispatch(setOpen({ type, value }));
  }, []);

  return {
    onOpen: handleOpen,
  };
};
