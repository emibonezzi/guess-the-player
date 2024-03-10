import { Player } from "./Player";
import { Team } from "./Team";

export interface PlayerFetchedFromTeam {
  team: Team;
  players: Player[];
}
