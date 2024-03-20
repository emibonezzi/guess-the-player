import { PlayerFromSearch } from "./PlayerFromSearch";

export interface Search {
  data: {
    count: {
      players: number;
      coaches: number;
      clubs: number;
      competitions: number;
      referees: number;
    };
    players: PlayerFromSearch[];
  };
}
