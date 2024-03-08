import { Player } from "./Player";
import { PlayerStatistics } from "./PlayerStatistics";

export interface PlayerFromTopScorers {
  player: Player;
  statistics: PlayerStatistics[];
}
