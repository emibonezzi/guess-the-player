import { Lineup } from "./Lineup";
import { PlayerFromLineup } from "./PlayerFromLineup";

export interface GameLineUp {
  formations: {
    home: {
      start: Lineup;
    };
    away: {
      start: Lineup;
    };
  };
}
