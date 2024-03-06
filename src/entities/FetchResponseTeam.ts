import { Player } from "./Player";
import { PlayerFetchedFromTeam } from "./PlayerFetchedFromTeam";

export interface FetchResponseTeam {
  results: number;
  response: PlayerFetchedFromTeam[];
}
