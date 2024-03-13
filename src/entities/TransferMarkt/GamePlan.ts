import { Match } from "./Match";

export interface GamePlan {
  seasonID: string;
  leagueID: string;
  dayID: number;
  playDayMatches: Match[];
}
