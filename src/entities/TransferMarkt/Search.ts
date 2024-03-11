import { Player } from "./Player";
import { PlayerFromSearch } from "./PlayerFromSearch";

export interface Search {
  count: {
    players: number;
    coaches: number;
    clubs: number;
    competitions: number;
    referees: number;
  };
  players: PlayerFromSearch[];
}
