import { Lineup } from "./Lineup";

export interface Formations {
  formations: {
    home: {
      start: Lineup;
    };
    away: {
      start: Lineup;
    };
  };
}
