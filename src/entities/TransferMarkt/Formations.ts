import { Lineup } from "./Lineup";

export interface Formations {
  home: {
    start: Lineup;
  };
  away: {
    start: Lineup;
  };
}
