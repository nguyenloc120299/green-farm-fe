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

export const buyPlant = async (data: {
  land_id: number;
  plant_id: number;
}): Promise<RESPONSE_DATA> => {
  const { land_id, plant_id } = data;
  const { data: res } = await requestService.post("/farm/plant", {
    data: {
      land_id,
      plant_id,
    },
  });
  return res;
};

export const havest = async (land_id: number): Promise<RESPONSE_DATA> => {
  const { data: res } = await requestService.post("/farm/havest", {
    data: {
      land_id,
    },
  });
  return res;
};

export const getRanking = async (): Promise<RESPONSE_DATA> => {
  const { data: res } = await requestService.get("/accounts/ranking");
  return res;
};
