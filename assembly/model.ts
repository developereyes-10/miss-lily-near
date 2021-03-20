import { context, u128, PersistentVector } from "near-sdk-as";

@nearBindgen
export class Volunteer {
  premium: boolean;
  sender: string;
  constructor(public text: string, public name: string, public email: string, public score: string, public education: string, public interest: string) {
    this.premium = context.attachedDeposit >= u128.from('10000000000000000000000');
    this.sender = context.sender;
  }
}

export const volunteers = new PersistentVector<Volunteer>("m");
