import { Lineup } from "./Lineup";
import { PlayerFromLineup } from "./PlayerFromLineup";

export interface Formations {
  [type: string]: {
    start: Lineup;
    bank: PlayerFromLineup[];
  };
}
