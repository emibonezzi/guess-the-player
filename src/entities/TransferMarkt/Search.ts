import { Player } from "./Player";

export interface Search {
  count: {
    players: number;
    coaches: number;
    clubs: number;
    competitions: number;
    referees: number;
  };
  players: Player[];
}
