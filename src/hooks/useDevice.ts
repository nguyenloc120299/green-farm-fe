import { Device } from "@capacitor/device";
import { useEffect, useState } from "react";
import { useAppDispatch } from "store";
import { setDeviceId } from "store/app";

const useDevice = () => {
  const dispatch = useAppDispatch();
  const [data, setData] = useState<{
    deviceId: string;
  }>({
    deviceId: "",
  });
  const fetchData = async () => {
    const deviceId = await Device.getId();
    if (deviceId) {
      dispatch(setDeviceId(deviceId.identifier));
      setData({
        deviceId: deviceId.identifier,
      });
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return {
    deviceId: data.deviceId,
  };
};

export default useDevice;
