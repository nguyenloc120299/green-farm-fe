import { RESPONSE_DATA } from "./core";
import requestService from "./request";

export const buyLand = async (land_id: number): Promise<RESPONSE_DATA> => {
  const { data: res } = await requestService.post("/farm/buy-land", {
    data: {
      land_id,
    },
  });
  return res;
};
