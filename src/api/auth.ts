import requestService from "./request";
import { RESPONSE_DATA } from "./core";
import { USER } from "types/auth";

interface DataInput {
  account_name: string;
  password: string;
}

export const signUp = async (input: DataInput): Promise<RESPONSE_DATA> => {
  const { data: res } = await requestService.post("/signup/basic", {
    data: {
      ...input,
    },
  });
  return res;
};

export const signin = async (input: DataInput): Promise<RESPONSE_DATA> => {
  const { data: res } = await requestService.post("/signin/basic", {
    data: {
      ...input,
    },
  });
  return res;
};

export const getMe = async (): Promise<RESPONSE_DATA> => {
  const { data: res } = await requestService.get("/profile/me");
  return res;
};
