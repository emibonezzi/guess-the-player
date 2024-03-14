import { Coaches } from "./Coaches";
import { Formations } from "./Formations";
import { Lineup } from "./Lineup";
import { PlayerFromLineup } from "./PlayerFromLineup";

export interface GameLineUp {
  coaches: Coaches;
  formations: Formations;
}
