import { PlayerFromLineup } from "./PlayerFromLineup";

export interface Lineup {
  [index: string]: PlayerFromLineup;
}
