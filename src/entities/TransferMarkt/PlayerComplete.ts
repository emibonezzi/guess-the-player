import { Player } from "./Player";
import { Transfer } from "./Transfer";
import { TransferHistory } from "./TransferHistory";

export interface PlayerComplete {
  id: string | undefined;
  name: string | undefined;
  transferHistory: Transfer[] | undefined;
}
