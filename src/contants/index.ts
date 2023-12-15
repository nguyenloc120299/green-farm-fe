import { PLANT } from "types/land";
import carot from "assets/mipmap-xxxhdpi-v4/home_house_people9.png";

export const TYPE_MODAL = {
  SEEDS: "SEEDS",
  MISSION: "MISSION",
  REFERRAL: "REFERRAL",
  GAMES: "GAMES",
  PROFILE: "PROFILE",
  WITHDRAW: "WITHDRAW",
  LUCKYWEEL: "LUCKYWEEL",
  LOTTERY: "LOTTERY",
  TICKETS: "TICKETS",
  DEPOSIT: "DEPOSIT",
  RANKING: "RANKING",
  UNLOCK_LAND: "UNLOCK_LAND",
};

export const TYPE_LOADING = {
  APP: "APP",
  LOAD_SCREEN: "LOAD_SCREEN",
  FARM: "FARM",
};
export const A_MINUTE = 1000 * 60;
export const PRICE = {
  LAND: 400000,
};

export const plants: PLANT[] = [
  {
    img: carot,
    id: 1,
    harvest_balance: 15000,
    name: {
      original: "carot",
      translated: "Carot",
    },
    price: 10000,
    time_harvest: A_MINUTE,
  },
];

