import { Player } from "./Player";
import { Transfer } from "./Transfer";

export interface PlayerDetail {
  player: Player;
  transfers: Transfer[];
}
