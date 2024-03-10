import { TransferDetail } from "./TransferDetail";

export interface Transfer {
  date: string;
  type: string;
  teams: TransferDetail;
}
