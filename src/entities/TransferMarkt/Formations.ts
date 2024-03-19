import { Lineup } from "./Lineup";
import { Player } from "./Player";
import { PlayerFromLineup } from "./PlayerFromLineup";

export interface Formations {
  [type: string]: {
    start: Lineup;
    bank: PlayerFromLineup[];
  };
}
