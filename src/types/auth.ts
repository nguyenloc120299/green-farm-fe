export interface FORM_REGISTER {
  isAccept: boolean;
  account_name: string;
  password: string;
  code_invite: string;
  confirm_password: string;
}

export interface FORM_LOGIN {
  account_name: string;
  password: string;
}

export interface USER {
  account_name: string;
  active_point: number;
  code_invite: string;
  game_id: number;
  gold_balance: number;
  money_balance: number;
  landNotBuy:number;
  name: string;
  _id: string;
}
